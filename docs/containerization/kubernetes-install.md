---
title: Kubernetes安装
slug: kubernetes-install
---

:::info
虚拟机安装 Kubernetes 集群
:::
<img src="https://img.shields.io/badge/version-1.26-orange.svg"/>

### 1. 版本信息
| 组件                                                       | 版本   | 组件                                                         | 版本   |
| ---------------------------------------------------------- | ------ | ------------------------------------------------------------ | ------ |
| **[kubernetes](https://github.com/kubernetes/kubernetes)** | 1.26.1 | **[containerd](https://github.com/containerd/containerd)**   | 1.6.17 |
| **[kubeadm](https://github.com/kubernetes/kubeadm)**       | 1.26.1 | **[kubelet](https://github.com/kubernetes/kubelet)**         | 1.26.1 |
| **[kubectl](https://github.com/kubernetes/kubectl)**       | 1.26.1 | **[calico](https://github.com/projectcalico/calico)**        | 3.25.0 |
| **[helm](https://github.com/helm/helm)**                   | 3.11.1 | **[ingress-nginx](https://kubernetes.github.io/ingress-nginx/)** | 4.5.0  |


### 2. 准备工作

集群按照用途可分为两种角色：

- master 节点，负责集群的管理和初始化，配置不低于 2C4G 
- worker 节点，可配置多台，配置不低于 2C4G

节点配置及安装程序：

| **hostname** |  **IP**   | **version**  | **CPU** | **Mem** | **安装组件**                                                 |
| :----------: | :-------: | :----------: | :-----: | :-----: | ------------------------------------------------------------ |
|  k8s-master  | 10.0.0.50 | Ubuntu 22.04 |   2核   |   4G    | kubeadm, etcd, kubectl, kubelet, kube-controll-manager, kube-proxy, api-server, helm3, calico |
| k8s-worker-1 | 10.0.0.51 | Ubuntu 22.04 |   2核   |   4G    | kubeadm, kubelet, kubectl, kube-proxy                        |
| k8s-worker-2 | 10.0.0.52 | Ubuntu 22.04 |   2核   |   4G    | kubeadm, kubelet, kubectl, kube-proxy                        |



官方建议 [配置](https://kubernetes.io/zh-cn/docs/setup/production-environment/tools/kubeadm/install-kubeadm/)

- 一台兼容的 Linux 主机。Kubernetes 项目为基于 Debian 和 Red Hat 的 Linux 发行版以及一些不提供包管理器的发行版提供通用的指令
- 每台机器 2 GB 或更多的 RAM（如果少于这个数字将会影响你应用的运行内存）
- CPU 2 核心及以上
- 集群中的所有机器的网络彼此均能相互连接（公网和内网都可以
- 节点之中不可以有重复的主机名、MAC 地址或 product_uuid
- 开启机器上的某些端口 比如 6443
- 禁用交换分区。为了保证 kubelet 正常工作，你必须禁用交换分区。



1、准备三台虚拟机, 以 [Ubuntu 22.04 LTS](https://releases.ubuntu.com/22.04/ubuntu-22.04.1-live-server-amd64.iso) 系统为例。下载服务器版本，然后最小化安装(不安装其他程序和更新) ， 这里可以省去一些麻烦，比如 selinux 直接没装，不用手动关了。但是最小化安装后可能部分工具需要自己装，比如：`iptables`, `ping` 等等

2、为每一台虚拟机都配置静态IP，方便后续访问，节点配置规划如下：

```bash
$ vim /etc/netplan/00-installer-config.yaml
```
```yaml
# This is the network config written by 'subiquity'
network:
  ethernets:
    ens33:
      dhcp4: false # close dhcp (set true is open)
      addresses:
        - 10.0.0.50/24 # set static ip
      routes:
        - to: default
          via: 10.0.0.1 # set gateway
      nameservers:
        addresses: [8.8.8.8] # dns服务器地址
  version: 2
```

```bash
# 重启网络
$ systemctl netplan apply
```

**注意：静态IP配置中，DNS的地址不能配多了，Kubelet在配置DNS时，发现DNS服务器数量已经超出了限制后会报错**

```text
kubelet[45206]: E0213 15:13:42.770960   45206 dns.go:156] "Nameserver limits exceeded" err="Nameserver limits were exceeded, some nameservers have been omitted, the applied nameserver line is: 8.8.8.8 8.8.4.4 114.114.114.114"
```

3、设置 hostname

```bash
# 为每台机器配置hostname, 方便辨认是哪台机器
$ sudo hostnamectl set-hostname k8s-master
...
```

4、可能有的机器时区会不对，修改下时区
```bash
$ sudo timedatectl set-timezone Asia/Shanghai
```

### 3. 修改系统配置
1、关闭 swap 交换分区

```shell
# 临时关闭
$ swapoff -a

# 永久关闭
$ vim /etc/fstab

# 直接注释掉最后一行
# /swap.img     none    swap    sw      0       0 
```
Kubernetes 建议禁用交换分区（swap），因为在 Kubernetes 中，资源的分配和使用是由调度程序控制的。如果操作系统在运行缺少内存的情况下使用交换分区，则可能导致调度程序无法正确分配和使用内存资源。
在 Kubernetes 中，当 Pod 在节点上分配了更多内存资源，调度程序将试图将其从其他节点上移动，以确保每个节点的内存使用情况合理。如果交换分区被启用，则可能导致误判，并导致调度程序将 Pod 分配到不适当的节点。

2、配置iptables

```shell
$ sudo iptables -P FORWARD ACCEPT
```
`iptables -P FORWARD ACCEPT` 是 Linux 中 iptables 命令的一条指令。

- iptables: 是一个防火墙命令，用于管理 Linux 内核的 Netfilter（网络过滤）机制。
- -P : 参数表示设置默认策略，即所有的规则都有一个默认的策略，如果所有的规则都不匹配，则将采用默认策略。
- FORWARD:  表示匹配接下来传递给其他设备的数据包。
- ACCEPT: 表示接受这些数据包，并继续传递给其他设备。
  

因此，这条指令的意思是：**设置默认策略为接受所有要被转发给其他设备的数据包**。

3、禁用 SELinux

```shell
  # 将以下文件中的 enforcing 改为 disabled 重启即可 
  $ sudo vim /etc/selinux/config
  
  # SELINUX=enforcing 
  SELINUX=disabled 
  SELINUXTYPE=targeted
```
**请注意，如果文件不存在，则说明 SELinux 未安装。**

SELinux 是一种 Linux 内核安全模块，用于对系统资源和应用程序的访问进行控制。但是，Kubernetes 不支持 SELinux，因为它的工作方式与 SELinux 的安全策略不兼容。为了保证 Kubernetes 的正常运行，通常需要在安装前禁用 SELinux。
如果不禁用 SELinux，可能会出现错误，例如：无法正常运行容器，无法访问存储卷等。因此，如果要安装 Kubernetes，建议禁用 SELinux。

### 4. 容器运行时 Containerd
Docker Engine 没有实现 CRI， 而这是容器运行时在 Kubernetes 中工作所需要的。 为此，必须安装一个额外的服务 cri-dockerd。 cri-dockerd 是一个基于传统的内置 Docker 引擎支持的项目， 它在 1.24 版本从 kubelet 中移除。

运行时和Unix 域套接字
- containerd	unix:///var/run/containerd/containerd.sock
- CRI-O	         unix:///var/run/crio/crio.sock
- Docker Engine（使用 cri-dockerd）	unix:///var/run/cri-dockerd.sock

提供了三种，我们选择 **containerd**

1、下载

```shell
# 不同系统版本需要自己更换
$ wget https://github.com/containerd/containerd/releases/download/v1.6.17/containerd-1.6.17-linux-amd64.tar.gz
```
2、解压并移动

```shell
$ tar -zxvf containerd-1.6.17-linux-amd64.tar.gz
$ sudo cp bin/* /usr/local/bin
```

3、配置文件更改

```shell
$ sudo mkdir /etc/containerd
$ containerd config default | sudo tee /etc/containerd/config.toml
# 文件太长了，不展示了。文件中这两个地方需要更改成下面这样，搜索一下

SystemdCgroup = true
# 此处的pause版本需要注意 1.26.1 使用的是 3.9
sandbox_image = "registry.aliyuncs.com/google_containers/pause:3.9"
```

4、新建 containerd.service

```shell
$ vim /etc/systemd/system/containerd.service
# 文件内容如下：

[Unit]
Description=containerd container runtime
Documentation=https://containerd.io
After=network.target

[Service]
ExecStartPre=-/sbin/modprobe overlay
ExecStart=/usr/local/bin/containerd
Delegate=yes
KillMode=process

# 可以指定一下代理，加速 containerd 拉取镜像，并指定 podSubnet serviceSubnet 的网络不走代理
Environment="HTTP_PROXY=http://127.0.0.1:7890"
Environment="HTTPS_PROXY=http://10.0.0.1:7890"
Environment="NO_PROXY=10.96.0.0/16,127.0.0.1,10.2.0.0/16,localhost"

[Install]
WantedBy=multi-user.target 
```

5、启动 containerd

```shell
# 设置开机自启，并立刻启动
$ sudo systemctl daemon-reload
$ sudo systemctl enable containerd --now 
```

6、runc  安装 
由于采用的是 containerd 作为容器运行时，containerd 目录下没得 runc, **觉得麻烦也可以直接下载docker二进制包，解压后里面也包含了 `runc`  `ctr` 这些文件**
```bash
# docker 下载地址
$ wget https://download.docker.com/linux/static/stable/x86_64/docker-23.0.1.tgz
```

解压后将二进制文件复制到 `/usr/local/sbin` 目录下即可。否则在安装网络插件 `Calico` 的时候会报以下错误
```text
Warning  FailedCreatePodSandBox  4m22s (x86 over 22m)  kubelet  (combined from similar events): Failed to create pod sandbox: rpc error: code = Unknown desc = failed to create containerd task: failed to create shim task: OCI runtime create failed: unable to retrieve OCI runtime error (open /run/containerd/io.containerd.runtime.v2.task/k8s.io/ca01535caf197a9e1da3a2dff60b295f9cba9b3eeb3f8de42c7b64b5015b4d27/log.json: no such file or directory): exec: "runc": executable file not found in $PATH: unknown
```

7、配置 containerd 的 endpoint

安装了containerd 之后，需要配置一下默认的 endpoint 才能正常使用 containerd 的命令，比如 查看镜像 `crictl image`等等

```bash
$ sudo vim /etc/crictl.yaml
```

```yaml
runtime-endpoint: unix:///run/containerd/containerd.sock
image-endpoint: unix:///run/containerd/containerd.sock
timeout: 10
debug: true
```

8、crictl 工具安装
`crictl` 可以用来查看镜像， 查看pod 等等，还可以对k8s的节点进行调试，[官方文档 ](https://kubernetes.io/zh-cn/docs/tasks/debug/debug-cluster/crictl/)
```bash
# 下载指定版本
$ wget https://github.com/kubernetes-sigs/cri-tools/releases/download/v1.26.0/crictl-v1.26.0-linux-amd64.tar.gz
```
下载解压后，放入 `/usr/bin` 目录或者 `/usr/local/bin` 目录即可

### 5. Kubeadm Kubectl Kubelet

采用 Kubeadm 方式安装，更详细内容参考[官方文档](https://kubernetes.io/zh-cn/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#check-required-ports)

**<u>以下操作需要在每台机器都执行！！！</u>**

1、更新apt索引

```shell
$ sudo apt-get update
# 这一步需要执行，镜像站都是https传输的，所以得先安装 `apt-transport-https` 并下载镜像站点的密钥才能下载
$ sudo apt-get install -y apt-transport-https ca-certificates curl
```
2、下载阿里云公开签名密钥

```shell
$ sudo curl -fsSLo /etc/apt/keyrings/kubernetes-archive-keyring.gpg https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg 
```

3、添加 Kubernetes apt 仓库：

```shell
$ echo "deb [signed-by=/etc/apt/keyrings/kubernetes-archive-keyring.gpg] https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list
```
在低于 Debian 12 和 Ubuntu 22.04 的发行版本中，`/etc/apt/keyrings` 默认不存在。 如有需要，你可以创建此目录，并将其设置为对所有人可读，但仅对管理员可写

4、更新 apt 包索引，安装 kubelet、kubeadm 和 kubectl，并锁定其版本：

```shell
$ sudo apt-get update
$ sudo apt-get install -y kubelet kubeadm kubectl
$ sudo apt-mark hold kubelet kubeadm kubectl 
```

5、安装完成后可查看下对应的版本号，是否都一致

```shell
$ kubelet version 
$ kubeadm version 
$ kubectl version
```

6、配置 kubelet 开机自启

```shell
$ sudo systemctl enable kubelet
```
Kubelet 是 Kubernetes 集群中的一个重要组件，它负责管理和监控每个节点上的容器。如果 kubelet 在系统启动时不能正常启动，将导致整个集群不能正常运行。

### 6. 初始化 Master 节点
1、拉取镜像

```bash
$ sudo kubeadm init --image-repository "registry.aliyuncs.com/google_containers"
```

2、导出kubeadm默认配置

```bash
$ sudo kubeadm config print init-defaults > kubeadm.yaml
```
3、更改配置

```yaml
apiVersion: kubeadm.k8s.io/v1beta3
bootstrapTokens:
- groups:
  - system:bootstrappers:kubeadm:default-node-token
  token: abcdef.0123456789abcdef
  ttl: 24h0m0s
  usages:
  - signing
  - authentication
kind: InitConfiguration
localAPIEndpoint:
  advertiseAddress: 10.0.0.50 # api server 地址 可以用 master ip
  bindPort: 6443
nodeRegistration:
  criSocket: unix:///var/run/containerd/containerd.sock
  imagePullPolicy: IfNotPresent
  name: k8s-master # 设置集群master名称
  taints: null
---
apiServer:
  timeoutForControlPlane: 4m0s
apiVersion: kubeadm.k8s.io/v1beta3
certificatesDir: /etc/kubernetes/pki
clusterName: kubernetes
controllerManager: {}
dns: {}
etcd:
  local:
    dataDir: /var/lib/etcd
imageRepository: registry.aliyuncs.com/google_containers # 更改镜像源
kind: ClusterConfiguration
kubernetesVersion: 1.26.1 # 配置安装版本
networking:
  dnsDomain: cluster.local
  podSubnet: 10.2.0.0/16  # 配置网络
  serviceSubnet: 10.96.0.0/12
scheduler: {}
---
apiVersion: kubelet.config.k8s.io/v1beta1
kind: KubeletConfiguration
cgroupDriver: systemd # 设置kubelet的cgroupDriver为systemd
failSwapOn: false
---
apiVersion: kubeproxy.config.k8s.io/v1alpha1
kind: KubeProxyConfiguration
mode: ipvs # 设置kube-proxy代理模式为ipvs
```

4、提前安装 镜像

```shell
# 查看需要哪些镜像
$ sudo kubeadm config images list --config kubeadm.yaml
# 安装
$ sudo kubeadm config images pull --config kubeadm.yaml
```

5、执行初始化

```shell
# 初始化
$ sudo kubeadm init --config kubeadm.yaml
```

初始化失败后可执行重试。注意：这是执行失败后回滚的命令(成功不需要执行)

```bash
$ sudo kubeadm reset
```

**错误处理**：

下面列出的错误不一定会出现，但是我在多次 `kubeadm reset` 之后再重新`init`安装就会出现这个问题

```text
[preflight] Running pre-flight checks
error execution phase preflight: [preflight] Some fatal errors occurred:
        [ERROR FileContent--proc-sys-net-bridge-bridge-nf-call-iptables]: /proc/sys/net/bridge/bridge-nf-call-iptables does not exist
        [ERROR FileContent--proc-sys-net-ipv4-ip_forward]: /proc/sys/net/ipv4/ip_forward contents are not set to 1
[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`
To see the stack trace of this error execute with --v=5 or higher
```
**解决办法**
```shell
$ sudo modprobe br_netfilter && \
  echo 1 | sudo tee /proc/sys/net/bridge/bridge-nf-call-iptables && \
  echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward
```

6、初始化成功后配置普通用户使用 kubectl 权限

```shell
$ mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

7、在其他节点执行加入集群操作

```shell
$ sudo kubeadm join 10.0.0.50:6443 --token abcdef.0123456789abcdef \
        --discovery-token-ca-cert-hash sha256:260fa42751a882bb8eb8d6229df927eee6e6f1ea60bc098644d1b03139bb6177 
```
**如果遗失了以上内容，可在master执行命令重新生成**
```shell
$ kubeadm token create --print-join-command
```

8、查看组件的健康状况

```shell
$ kubectl get cs 

Warning: v1 ComponentStatus is deprecated in v1.19+
NAME                 STATUS    MESSAGE                         ERROR
controller-manager   Healthy   ok
scheduler            Healthy   ok
etcd-0               Healthy   {"health":"true","reason":""}
```

9、查看节点情况

```shell
$  kubectl get nodes
NAME           STATUS     ROLES           AGE   VERSION
k8s-master     NotReady   control-plane   15m   v1.26.1
k8s-worker-1   NotReady   <none>          14m   v1.26.1
k8s-worker-2   NotReady   <none>          11m   v1.26.1 
```
😁状态全部是 NotReady 是因为没装网络组件


### 7. 安装 Helm

Helm 是 Kubernetes 的包管理器

```shell
$ wget https://get.helm.sh/helm-v3.11.1-linux-amd64.tar.gz
```
下载完解压后，将 helm 移动至 `/usr/local/bin` 目录下，验证一下没出错即可
```shell
$ helm list
```

### 8. 安装 Calico
CNI 意为容器网络接口，它是一种标准的设计. Kubernetes 支持多种CNI接口，例如：Flannel、Calico、Canal 和 Weave，这里我安装 Calico。使用Helm来安装

**以下操作只需在 master 节点操作**

先去 [calico 仓库](https://github.com/projectcalico/calico/releases)下载对应版本的 helm chart
```shell
$ wget https://github.com/projectcalico/calico/releases/download/v3.25.0/tigera-operator-v3.25.0.tgz
```

直接安装在 kube-system 命名空间下
```shell
# 安装
$ helm install calico tigera-operator-v3.25.0.tgz -n kube-system
# 查看状态
$ kubectl get pod -n kube-system | grep tigera-operator

# 当所有pod都处于running状态时代表成功了
$ kubectl get pods -n calico-system

NAME                                       READY   STATUS    RESTARTS      AGE
calico-kube-controllers-6b7b9c649d-cffmm   1/1     Running   1 (47m ago)   93m
calico-node-crjkm                          1/1     Running   1 (47m ago)   93m
calico-node-dgghx                          1/1     Running   0             91m
calico-node-kt7rj                          1/1     Running   0             90m
calico-typha-548f96c876-5wkdq              1/1     Running   4 (45m ago)   52m
calico-typha-548f96c876-p744h              1/1     Running   2 (46m ago)   93m
csi-node-driver-bcpvv                      2/2     Running   2 (47m ago)   92m
csi-node-driver-h9sbf                      2/2     Running   0             43m
csi-node-driver-m7lmv                      2/2     Running   0             42m
```
**Calico 的 Pod 名以 calico 打头，检查确认每个 Pod 状态为 Running**

最后再查看所有节点状态
```shell
$ kubectl get nodes

NAME           STATUS   ROLES           AGE   VERSION
k8s-master     Ready    control-plane   97m   v1.26.1
k8s-worker-1   Ready    <none>          92m   v1.26.1
k8s-worker-2   Ready    <none>          94m   v1.26.1
```

### 9. 安装 Ingress-nginx

[Ingress](https://kubernetes.io/zh/docs/concepts/services-networking/ingress/) 是 Kubernetes 集群中用于管理服务外部访问的 API 对象，典型的访问方式是 HTTP 和 HTTPS。Ingress 可以提供七层负载均衡、SSL 终结、基于名称的虚拟主机等。

```bash
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.6.4/deploy/static/provider/cloud/deploy.yaml
```

```bash
$ helm upgrade --install ingress-nginx ingress-nginx \
  --repo https://kubernetes.github.io/ingress-nginx \
   --namespace ingress-nginx --create-namespace
```

#### 错误处理
```text
Error from server (InternalError): error when creating "nginx/run.yaml": Internal error occurred: failed calling webhook "validate.nginx.ingress.kubernetes.io": failed to ca  
ll webhook: Post "https://ingress-nginx-controller-admission.ingress-nginx.svc:443/networking/v1/ingresses?timeout=10s": remote error: tls: internal error
```
- 解决办法
```bash
$ kubectl get ValidatingWebhookConfiguration

$ kubectl delete -A ValidatingWebhookConfiguration ingress-nginx-admission
```
