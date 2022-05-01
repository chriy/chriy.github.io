---
slug: install
title: 二进制安装Docker
---

:::info
基于 Ubuntu 20.04，采用二进制文件方式安装Docker
:::

### 1. 下载与安装
下载地址：[https://download.docker.com/](https://download.docker.com/)

```bash
# 下载
$ wget https://download.docker.com/linux/static/stable/x86_64/docker-20.10.14.tgz

# 添加可执行权限
$ chmod +x docker/*

# 移动到 /usr/bin 目录
$ mv docker/* /usr/bin
```

### 2. 新建docker.service文件

```bash
$ vim /etc/systemd/system/docker.service
```

```shell
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
#BindsTo=containerd.service
#After=network-online.target firewalld.service containerd.service
#Wants=network-online.target

[Service]
Type=notify
# the default is not to use systemd for cgroups because the delegate issues still
# exists and systemd currently does not support the cgroup feature set required
# for containers run by docker
ExecStart=/usr/bin/dockerd -H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock
ExecReload=/bin/kill -s HUP $MAINPID
TimeoutSec=0
RestartSec=2
Restart=always

# Note that StartLimit* options were moved from "Service" to "Unit" in systemd 229.
# Both the old, and new location are accepted by systemd 229 and up, so using the old location
# to make them work for either version of systemd.
StartLimitBurst=3

# Note that StartLimitInterval was renamed to StartLimitIntervalSec in systemd 230.
# Both the old, and new name are accepted by systemd 230 and up, so using the old name to make
# this option work for either version of systemd.
StartLimitInterval=60s

# Having non-zero Limit*s causes performance problems due to accounting overhead
# in the kernel. We recommend using cgroups to do container-local accounting.
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity

# Comment TasksMax if your systemd version does not support it.
# Only systemd 226 and above support this option.
TasksMax=infinity

# set delegate yes so that systemd does not reset the cgroups of docker containers
Delegate=yes

# kill only the docker process, not all processes in the cgroup
KillMode=process

[Install]
WantedBy=multi-user.target
```

## 3. 给普通用户加入root组

```bash
# 加入root组
$ sudo usermod -g root chriy

# 显示当前用户所在群组
$ id chriy
chriy@ubuntu:/var/run$ id chriy
uid=1000(chriy) gid=0(root) groups=0(root),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),116(lxd)
```

## 4. 启动docker

```bash
# 启动的时候可能会报 /var/run/docker.sock没有权限  给其他用户加上即可
$ chmod a+rw /var/run/docker.sock

$ systemctl daemon-reload
$ systemctl start docker
# 开机启动
$ systemctl enable docker

# 开放2375端口，远程连接docker
$ firewall-cmd --zone=public --add-port=2375/tcp --permanent && systemctl restart firewalld
```
