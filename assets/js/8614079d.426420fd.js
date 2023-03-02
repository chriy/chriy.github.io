"use strict";(self.webpackChunkchriy_github_io=self.webpackChunkchriy_github_io||[]).push([[1037],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,m=c["".concat(i,".").concat(d)]||c[d]||k[d]||l;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={title:"Kubernetes\u5b89\u88c5",slug:"kubernetes-install"},o=void 0,s={unversionedId:"docker/kubernetes-install",id:"docker/kubernetes-install",title:"Kubernetes\u5b89\u88c5",description:"\u865a\u62df\u673a\u5b89\u88c5 Kubernetes \u96c6\u7fa4",source:"@site/docs/docker/kubernetes-install.md",sourceDirName:"docker",slug:"/docker/kubernetes-install",permalink:"/docs/docker/kubernetes-install",draft:!1,editUrl:"https://github.com/chriy/chriy.github.io/docs/docker/kubernetes-install.md",tags:[],version:"current",frontMatter:{title:"Kubernetes\u5b89\u88c5",slug:"kubernetes-install"},sidebar:"tutorialSidebar",previous:{title:"Dockerfile",permalink:"/docs/docker/dockerfile"},next:{title:"WebSocket",permalink:"/docs/reading/websocket"}},i={},u=[{value:"1. \u7248\u672c\u4fe1\u606f",id:"1-\u7248\u672c\u4fe1\u606f",level:3},{value:"2. \u51c6\u5907\u5de5\u4f5c",id:"2-\u51c6\u5907\u5de5\u4f5c",level:3},{value:"3. \u4fee\u6539\u7cfb\u7edf\u914d\u7f6e",id:"3-\u4fee\u6539\u7cfb\u7edf\u914d\u7f6e",level:3},{value:"4. \u5bb9\u5668\u8fd0\u884c\u65f6 Containerd",id:"4-\u5bb9\u5668\u8fd0\u884c\u65f6-containerd",level:3},{value:"5. Kubeadm Kubectl Kubelet",id:"5-kubeadm-kubectl-kubelet",level:3},{value:"6. \u521d\u59cb\u5316 Master \u8282\u70b9",id:"6-\u521d\u59cb\u5316-master-\u8282\u70b9",level:3},{value:"7. \u5b89\u88c5 Helm",id:"7-\u5b89\u88c5-helm",level:3},{value:"8. \u5b89\u88c5 Calico",id:"8-\u5b89\u88c5-calico",level:3},{value:"9. \u5b89\u88c5 Ingress-nginx",id:"9-\u5b89\u88c5-ingress-nginx",level:3},{value:"\u9519\u8bef\u5904\u7406",id:"\u9519\u8bef\u5904\u7406",level:4}],p={toc:u},c="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u865a\u62df\u673a\u5b89\u88c5 Kubernetes \u96c6\u7fa4")),(0,r.kt)("img",{src:"https://img.shields.io/badge/version-1.26-orange.svg"}),(0,r.kt)("h3",{id:"1-\u7248\u672c\u4fe1\u606f"},"1. \u7248\u672c\u4fe1\u606f"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7ec4\u4ef6"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/kubernetes/kubernetes"},"kubernetes"))),(0,r.kt)("td",{parentName:"tr",align:null},"1.26.1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/containerd/containerd"},"containerd"))),(0,r.kt)("td",{parentName:"tr",align:null},"1.6.17")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/kubernetes/kubeadm"},"kubeadm"))),(0,r.kt)("td",{parentName:"tr",align:null},"1.26.1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/kubernetes/kubelet"},"kubelet"))),(0,r.kt)("td",{parentName:"tr",align:null},"1.26.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/kubernetes/kubectl"},"kubectl"))),(0,r.kt)("td",{parentName:"tr",align:null},"1.26.1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/projectcalico/calico"},"calico"))),(0,r.kt)("td",{parentName:"tr",align:null},"3.25.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/helm/helm"},"helm"))),(0,r.kt)("td",{parentName:"tr",align:null},"3.11.1"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("a",{parentName:"strong",href:"https://kubernetes.github.io/ingress-nginx/"},"ingress-nginx"))),(0,r.kt)("td",{parentName:"tr",align:null},"4.5.0")))),(0,r.kt)("h3",{id:"2-\u51c6\u5907\u5de5\u4f5c"},"2. \u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u96c6\u7fa4\u6309\u7167\u7528\u9014\u53ef\u5206\u4e3a\u4e24\u79cd\u89d2\u8272\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"master \u8282\u70b9\uff0c\u8d1f\u8d23\u96c6\u7fa4\u7684\u7ba1\u7406\u548c\u521d\u59cb\u5316\uff0c\u914d\u7f6e\u4e0d\u4f4e\u4e8e 2C4G "),(0,r.kt)("li",{parentName:"ul"},"worker \u8282\u70b9\uff0c\u53ef\u914d\u7f6e\u591a\u53f0\uff0c\u914d\u7f6e\u4e0d\u4f4e\u4e8e 2C4G")),(0,r.kt)("p",null,"\u8282\u70b9\u914d\u7f6e\u53ca\u5b89\u88c5\u7a0b\u5e8f\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"hostname")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"IP")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"version")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"CPU")),(0,r.kt)("th",{parentName:"tr",align:"center"},(0,r.kt)("strong",{parentName:"th"},"Mem")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\u5b89\u88c5\u7ec4\u4ef6")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"k8s-master"),(0,r.kt)("td",{parentName:"tr",align:"center"},"10.0.0.50"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Ubuntu 22.04"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2\u6838"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4G"),(0,r.kt)("td",{parentName:"tr",align:null},"kubeadm, etcd, kubectl, kubelet, kube-controll-manager, kube-proxy, api-server, helm3, calico")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"k8s-worker-1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"10.0.0.51"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Ubuntu 22.04"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2\u6838"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4G"),(0,r.kt)("td",{parentName:"tr",align:null},"kubeadm, kubelet, kubectl, kube-proxy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"k8s-worker-2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"10.0.0.52"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Ubuntu 22.04"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2\u6838"),(0,r.kt)("td",{parentName:"tr",align:"center"},"4G"),(0,r.kt)("td",{parentName:"tr",align:null},"kubeadm, kubelet, kubectl, kube-proxy")))),(0,r.kt)("p",null,"\u5b98\u65b9\u5efa\u8bae ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh-cn/docs/setup/production-environment/tools/kubeadm/install-kubeadm/"},"\u914d\u7f6e")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u53f0\u517c\u5bb9\u7684 Linux \u4e3b\u673a\u3002Kubernetes \u9879\u76ee\u4e3a\u57fa\u4e8e Debian \u548c Red Hat \u7684 Linux \u53d1\u884c\u7248\u4ee5\u53ca\u4e00\u4e9b\u4e0d\u63d0\u4f9b\u5305\u7ba1\u7406\u5668\u7684\u53d1\u884c\u7248\u63d0\u4f9b\u901a\u7528\u7684\u6307\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u53f0\u673a\u5668 2 GB \u6216\u66f4\u591a\u7684 RAM\uff08\u5982\u679c\u5c11\u4e8e\u8fd9\u4e2a\u6570\u5b57\u5c06\u4f1a\u5f71\u54cd\u4f60\u5e94\u7528\u7684\u8fd0\u884c\u5185\u5b58\uff09"),(0,r.kt)("li",{parentName:"ul"},"CPU 2 \u6838\u5fc3\u53ca\u4ee5\u4e0a"),(0,r.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u4e2d\u7684\u6240\u6709\u673a\u5668\u7684\u7f51\u7edc\u5f7c\u6b64\u5747\u80fd\u76f8\u4e92\u8fde\u63a5\uff08\u516c\u7f51\u548c\u5185\u7f51\u90fd\u53ef\u4ee5"),(0,r.kt)("li",{parentName:"ul"},"\u8282\u70b9\u4e4b\u4e2d\u4e0d\u53ef\u4ee5\u6709\u91cd\u590d\u7684\u4e3b\u673a\u540d\u3001MAC \u5730\u5740\u6216 product_uuid"),(0,r.kt)("li",{parentName:"ul"},"\u5f00\u542f\u673a\u5668\u4e0a\u7684\u67d0\u4e9b\u7aef\u53e3 \u6bd4\u5982 6443"),(0,r.kt)("li",{parentName:"ul"},"\u7981\u7528\u4ea4\u6362\u5206\u533a\u3002\u4e3a\u4e86\u4fdd\u8bc1 kubelet \u6b63\u5e38\u5de5\u4f5c\uff0c\u4f60\u5fc5\u987b\u7981\u7528\u4ea4\u6362\u5206\u533a\u3002")),(0,r.kt)("p",null,"1\u3001\u51c6\u5907\u4e09\u53f0\u865a\u62df\u673a, \u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"https://releases.ubuntu.com/22.04/ubuntu-22.04.1-live-server-amd64.iso"},"Ubuntu 22.04 LTS")," \u7cfb\u7edf\u4e3a\u4f8b\u3002\u4e0b\u8f7d\u670d\u52a1\u5668\u7248\u672c\uff0c\u7136\u540e\u6700\u5c0f\u5316\u5b89\u88c5(\u4e0d\u5b89\u88c5\u5176\u4ed6\u7a0b\u5e8f\u548c\u66f4\u65b0) \uff0c \u8fd9\u91cc\u53ef\u4ee5\u7701\u53bb\u4e00\u4e9b\u9ebb\u70e6\uff0c\u6bd4\u5982 selinux \u76f4\u63a5\u6ca1\u88c5\uff0c\u4e0d\u7528\u624b\u52a8\u5173\u4e86\u3002\u4f46\u662f\u6700\u5c0f\u5316\u5b89\u88c5\u540e\u53ef\u80fd\u90e8\u5206\u5de5\u5177\u9700\u8981\u81ea\u5df1\u88c5\uff0c\u6bd4\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"iptables"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ping")," \u7b49\u7b49"),(0,r.kt)("p",null,"2\u3001\u4e3a\u6bcf\u4e00\u53f0\u865a\u62df\u673a\u90fd\u914d\u7f6e\u9759\u6001IP\uff0c\u65b9\u4fbf\u540e\u7eed\u8bbf\u95ee\uff0c\u8282\u70b9\u914d\u7f6e\u89c4\u5212\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ vim /etc/netplan/00-installer-config.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# This is the network config written by 'subiquity'\nnetwork:\n  ethernets:\n    ens33:\n      dhcp4: false # close dhcp (set true is open)\n      addresses:\n        - 10.0.0.50/24 # set static ip\n      routes:\n        - to: default\n          via: 10.0.0.1 # set gateway\n      nameservers:\n        addresses: [8.8.8.8] # dns\u670d\u52a1\u5668\u5730\u5740\n  version: 2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u91cd\u542f\u7f51\u7edc\n$ systemctl netplan apply\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a\u9759\u6001IP\u914d\u7f6e\u4e2d\uff0cDNS\u7684\u5730\u5740\u4e0d\u80fd\u914d\u591a\u4e86\uff0cKubelet\u5728\u914d\u7f6eDNS\u65f6\uff0c\u53d1\u73b0DNS\u670d\u52a1\u5668\u6570\u91cf\u5df2\u7ecf\u8d85\u51fa\u4e86\u9650\u5236\u540e\u4f1a\u62a5\u9519")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'kubelet[45206]: E0213 15:13:42.770960   45206 dns.go:156] "Nameserver limits exceeded" err="Nameserver limits were exceeded, some nameservers have been omitted, the applied nameserver line is: 8.8.8.8 8.8.4.4 114.114.114.114"\n')),(0,r.kt)("p",null,"3\u3001\u8bbe\u7f6e hostname"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e3a\u6bcf\u53f0\u673a\u5668\u914d\u7f6ehostname, \u65b9\u4fbf\u8fa8\u8ba4\u662f\u54ea\u53f0\u673a\u5668\n$ sudo hostnamectl set-hostname k8s-master\n...\n")),(0,r.kt)("p",null,"4\u3001\u53ef\u80fd\u6709\u7684\u673a\u5668\u65f6\u533a\u4f1a\u4e0d\u5bf9\uff0c\u4fee\u6539\u4e0b\u65f6\u533a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo timedatectl set-timezone Asia/Shanghai\n")),(0,r.kt)("h3",{id:"3-\u4fee\u6539\u7cfb\u7edf\u914d\u7f6e"},"3. \u4fee\u6539\u7cfb\u7edf\u914d\u7f6e"),(0,r.kt)("p",null,"1\u3001\u5173\u95ed swap \u4ea4\u6362\u5206\u533a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e34\u65f6\u5173\u95ed\n$ swapoff -a\n\n# \u6c38\u4e45\u5173\u95ed\n$ vim /etc/fstab\n\n# \u76f4\u63a5\u6ce8\u91ca\u6389\u6700\u540e\u4e00\u884c\n# /swap.img     none    swap    sw      0       0 \n")),(0,r.kt)("p",null,"Kubernetes \u5efa\u8bae\u7981\u7528\u4ea4\u6362\u5206\u533a\uff08swap\uff09\uff0c\u56e0\u4e3a\u5728 Kubernetes \u4e2d\uff0c\u8d44\u6e90\u7684\u5206\u914d\u548c\u4f7f\u7528\u662f\u7531\u8c03\u5ea6\u7a0b\u5e8f\u63a7\u5236\u7684\u3002\u5982\u679c\u64cd\u4f5c\u7cfb\u7edf\u5728\u8fd0\u884c\u7f3a\u5c11\u5185\u5b58\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\u4ea4\u6362\u5206\u533a\uff0c\u5219\u53ef\u80fd\u5bfc\u81f4\u8c03\u5ea6\u7a0b\u5e8f\u65e0\u6cd5\u6b63\u786e\u5206\u914d\u548c\u4f7f\u7528\u5185\u5b58\u8d44\u6e90\u3002\n\u5728 Kubernetes \u4e2d\uff0c\u5f53 Pod \u5728\u8282\u70b9\u4e0a\u5206\u914d\u4e86\u66f4\u591a\u5185\u5b58\u8d44\u6e90\uff0c\u8c03\u5ea6\u7a0b\u5e8f\u5c06\u8bd5\u56fe\u5c06\u5176\u4ece\u5176\u4ed6\u8282\u70b9\u4e0a\u79fb\u52a8\uff0c\u4ee5\u786e\u4fdd\u6bcf\u4e2a\u8282\u70b9\u7684\u5185\u5b58\u4f7f\u7528\u60c5\u51b5\u5408\u7406\u3002\u5982\u679c\u4ea4\u6362\u5206\u533a\u88ab\u542f\u7528\uff0c\u5219\u53ef\u80fd\u5bfc\u81f4\u8bef\u5224\uff0c\u5e76\u5bfc\u81f4\u8c03\u5ea6\u7a0b\u5e8f\u5c06 Pod \u5206\u914d\u5230\u4e0d\u9002\u5f53\u7684\u8282\u70b9\u3002"),(0,r.kt)("p",null,"2\u3001\u914d\u7f6eiptables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo iptables -P FORWARD ACCEPT\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"iptables -P FORWARD ACCEPT")," \u662f Linux \u4e2d iptables \u547d\u4ee4\u7684\u4e00\u6761\u6307\u4ee4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"iptables: \u662f\u4e00\u4e2a\u9632\u706b\u5899\u547d\u4ee4\uff0c\u7528\u4e8e\u7ba1\u7406 Linux \u5185\u6838\u7684 Netfilter\uff08\u7f51\u7edc\u8fc7\u6ee4\uff09\u673a\u5236\u3002"),(0,r.kt)("li",{parentName:"ul"},"-P : \u53c2\u6570\u8868\u793a\u8bbe\u7f6e\u9ed8\u8ba4\u7b56\u7565\uff0c\u5373\u6240\u6709\u7684\u89c4\u5219\u90fd\u6709\u4e00\u4e2a\u9ed8\u8ba4\u7684\u7b56\u7565\uff0c\u5982\u679c\u6240\u6709\u7684\u89c4\u5219\u90fd\u4e0d\u5339\u914d\uff0c\u5219\u5c06\u91c7\u7528\u9ed8\u8ba4\u7b56\u7565\u3002"),(0,r.kt)("li",{parentName:"ul"},"FORWARD:  \u8868\u793a\u5339\u914d\u63a5\u4e0b\u6765\u4f20\u9012\u7ed9\u5176\u4ed6\u8bbe\u5907\u7684\u6570\u636e\u5305\u3002"),(0,r.kt)("li",{parentName:"ul"},"ACCEPT: \u8868\u793a\u63a5\u53d7\u8fd9\u4e9b\u6570\u636e\u5305\uff0c\u5e76\u7ee7\u7eed\u4f20\u9012\u7ed9\u5176\u4ed6\u8bbe\u5907\u3002")),(0,r.kt)("p",null,"\u56e0\u6b64\uff0c\u8fd9\u6761\u6307\u4ee4\u7684\u610f\u601d\u662f\uff1a",(0,r.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u9ed8\u8ba4\u7b56\u7565\u4e3a\u63a5\u53d7\u6240\u6709\u8981\u88ab\u8f6c\u53d1\u7ed9\u5176\u4ed6\u8bbe\u5907\u7684\u6570\u636e\u5305"),"\u3002"),(0,r.kt)("p",null,"3\u3001\u7981\u7528 SELinux"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"  # \u5c06\u4ee5\u4e0b\u6587\u4ef6\u4e2d\u7684 enforcing \u6539\u4e3a disabled \u91cd\u542f\u5373\u53ef \n  $ sudo vim /etc/selinux/config\n  \n  # SELINUX=enforcing \n  SELINUX=disabled \n  SELINUXTYPE=targeted\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u6587\u4ef6\u4e0d\u5b58\u5728\uff0c\u5219\u8bf4\u660e SELinux \u672a\u5b89\u88c5\u3002")),(0,r.kt)("p",null,"SELinux \u662f\u4e00\u79cd Linux \u5185\u6838\u5b89\u5168\u6a21\u5757\uff0c\u7528\u4e8e\u5bf9\u7cfb\u7edf\u8d44\u6e90\u548c\u5e94\u7528\u7a0b\u5e8f\u7684\u8bbf\u95ee\u8fdb\u884c\u63a7\u5236\u3002\u4f46\u662f\uff0cKubernetes \u4e0d\u652f\u6301 SELinux\uff0c\u56e0\u4e3a\u5b83\u7684\u5de5\u4f5c\u65b9\u5f0f\u4e0e SELinux \u7684\u5b89\u5168\u7b56\u7565\u4e0d\u517c\u5bb9\u3002\u4e3a\u4e86\u4fdd\u8bc1 Kubernetes \u7684\u6b63\u5e38\u8fd0\u884c\uff0c\u901a\u5e38\u9700\u8981\u5728\u5b89\u88c5\u524d\u7981\u7528 SELinux\u3002\n\u5982\u679c\u4e0d\u7981\u7528 SELinux\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u9519\u8bef\uff0c\u4f8b\u5982\uff1a\u65e0\u6cd5\u6b63\u5e38\u8fd0\u884c\u5bb9\u5668\uff0c\u65e0\u6cd5\u8bbf\u95ee\u5b58\u50a8\u5377\u7b49\u3002\u56e0\u6b64\uff0c\u5982\u679c\u8981\u5b89\u88c5 Kubernetes\uff0c\u5efa\u8bae\u7981\u7528 SELinux\u3002"),(0,r.kt)("h3",{id:"4-\u5bb9\u5668\u8fd0\u884c\u65f6-containerd"},"4. \u5bb9\u5668\u8fd0\u884c\u65f6 Containerd"),(0,r.kt)("p",null,"Docker Engine \u6ca1\u6709\u5b9e\u73b0 CRI\uff0c \u800c\u8fd9\u662f\u5bb9\u5668\u8fd0\u884c\u65f6\u5728 Kubernetes \u4e2d\u5de5\u4f5c\u6240\u9700\u8981\u7684\u3002 \u4e3a\u6b64\uff0c\u5fc5\u987b\u5b89\u88c5\u4e00\u4e2a\u989d\u5916\u7684\u670d\u52a1 cri-dockerd\u3002 cri-dockerd \u662f\u4e00\u4e2a\u57fa\u4e8e\u4f20\u7edf\u7684\u5185\u7f6e Docker \u5f15\u64ce\u652f\u6301\u7684\u9879\u76ee\uff0c \u5b83\u5728 1.24 \u7248\u672c\u4ece kubelet \u4e2d\u79fb\u9664\u3002"),(0,r.kt)("p",null,"\u8fd0\u884c\u65f6\u548cUnix \u57df\u5957\u63a5\u5b57"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"containerd\tunix:///var/run/containerd/containerd.sock"),(0,r.kt)("li",{parentName:"ul"},"CRI-O\t         unix:///var/run/crio/crio.sock"),(0,r.kt)("li",{parentName:"ul"},"Docker Engine\uff08\u4f7f\u7528 cri-dockerd\uff09\tunix:///var/run/cri-dockerd.sock")),(0,r.kt)("p",null,"\u63d0\u4f9b\u4e86\u4e09\u79cd\uff0c\u6211\u4eec\u9009\u62e9 ",(0,r.kt)("strong",{parentName:"p"},"containerd")),(0,r.kt)("p",null,"1\u3001\u4e0b\u8f7d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4e0d\u540c\u7cfb\u7edf\u7248\u672c\u9700\u8981\u81ea\u5df1\u66f4\u6362\n$ wget https://github.com/containerd/containerd/releases/download/v1.6.17/containerd-1.6.17-linux-amd64.tar.gz\n")),(0,r.kt)("p",null,"2\u3001\u89e3\u538b\u5e76\u79fb\u52a8"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ tar -zxvf containerd-1.6.17-linux-amd64.tar.gz\n$ sudo cp bin/* /usr/local/bin\n")),(0,r.kt)("p",null,"3\u3001\u914d\u7f6e\u6587\u4ef6\u66f4\u6539"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ sudo mkdir /etc/containerd\n$ containerd config default | sudo tee /etc/containerd/config.toml\n# \u6587\u4ef6\u592a\u957f\u4e86\uff0c\u4e0d\u5c55\u793a\u4e86\u3002\u6587\u4ef6\u4e2d\u8fd9\u4e24\u4e2a\u5730\u65b9\u9700\u8981\u66f4\u6539\u6210\u4e0b\u9762\u8fd9\u6837\uff0c\u641c\u7d22\u4e00\u4e0b\n\nSystemdCgroup = true\n# \u6b64\u5904\u7684pause\u7248\u672c\u9700\u8981\u6ce8\u610f 1.26.1 \u4f7f\u7528\u7684\u662f 3.9\nsandbox_image = "registry.aliyuncs.com/google_containers/pause:3.9"\n')),(0,r.kt)("p",null,"4\u3001\u65b0\u5efa containerd.service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ vim /etc/systemd/system/containerd.service\n# \u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a\n\n[Unit]\nDescription=containerd container runtime\nDocumentation=https://containerd.io\nAfter=network.target\n\n[Service]\nExecStartPre=-/sbin/modprobe overlay\nExecStart=/usr/local/bin/containerd\nDelegate=yes\nKillMode=process\n\n[Install]\nWantedBy=multi-user.target \n")),(0,r.kt)("p",null,"5\u3001\u542f\u52a8 containerd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8bbe\u7f6e\u5f00\u673a\u81ea\u542f\uff0c\u5e76\u7acb\u523b\u542f\u52a8\n$ sudo systemctl daemon-reload\n$ sudo systemctl enable containerd --now \n")),(0,r.kt)("p",null,"6\u3001runc  \u5b89\u88c5\n\u7531\u4e8e\u91c7\u7528\u7684\u662f containerd \u4f5c\u4e3a\u5bb9\u5668\u8fd0\u884c\u65f6\uff0ccontainerd \u76ee\u5f55\u4e0b\u6ca1\u5f97 runc, ",(0,r.kt)("strong",{parentName:"p"},"\u89c9\u5f97\u9ebb\u70e6\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7ddocker\u4e8c\u8fdb\u5236\u5305\uff0c\u89e3\u538b\u540e\u91cc\u9762\u4e5f\u5305\u542b\u4e86 ",(0,r.kt)("inlineCode",{parentName:"strong"},"runc"),"  ",(0,r.kt)("inlineCode",{parentName:"strong"},"ctr")," \u8fd9\u4e9b\u6587\u4ef6")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# docker \u4e0b\u8f7d\u5730\u5740\n$ wget https://download.docker.com/linux/static/stable/x86_64/docker-23.0.1.tgz\n")),(0,r.kt)("p",null,"\u89e3\u538b\u540e\u5c06\u4e8c\u8fdb\u5236\u6587\u4ef6\u590d\u5236\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/sbin")," \u76ee\u5f55\u4e0b\u5373\u53ef\u3002\u5426\u5219\u5728\u5b89\u88c5\u7f51\u7edc\u63d2\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"Calico")," \u7684\u65f6\u5019\u4f1a\u62a5\u4ee5\u4e0b\u9519\u8bef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Warning  FailedCreatePodSandBox  4m22s (x86 over 22m)  kubelet  (combined from similar events): Failed to create pod sandbox: rpc error: code = Unknown desc = failed to create containerd task: failed to create shim task: OCI runtime create failed: unable to retrieve OCI runtime error (open /run/containerd/io.containerd.runtime.v2.task/k8s.io/ca01535caf197a9e1da3a2dff60b295f9cba9b3eeb3f8de42c7b64b5015b4d27/log.json: no such file or directory): exec: "runc": executable file not found in $PATH: unknown\n')),(0,r.kt)("p",null,"7\u3001\u914d\u7f6e containerd \u7684 endpoint"),(0,r.kt)("p",null,"\u5b89\u88c5\u4e86containerd \u4e4b\u540e\uff0c\u9700\u8981\u914d\u7f6e\u4e00\u4e0b\u9ed8\u8ba4\u7684 endpoint \u624d\u80fd\u6b63\u5e38\u4f7f\u7528 containerd \u7684\u547d\u4ee4\uff0c\u6bd4\u5982 \u67e5\u770b\u955c\u50cf ",(0,r.kt)("inlineCode",{parentName:"p"},"crictl image"),"\u7b49\u7b49"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo vim /etc/crictl.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"runtime-endpoint: unix:///run/containerd/containerd.sock\nimage-endpoint: unix:///run/containerd/containerd.sock\ntimeout: 10\ndebug: true\n")),(0,r.kt)("p",null,"8\u3001crictl \u5de5\u5177\u5b89\u88c5\n",(0,r.kt)("inlineCode",{parentName:"p"},"crictl")," \u53ef\u4ee5\u7528\u6765\u67e5\u770b\u955c\u50cf\uff0c \u67e5\u770bpod \u7b49\u7b49\uff0c\u8fd8\u53ef\u4ee5\u5bf9k8s\u7684\u8282\u70b9\u8fdb\u884c\u8c03\u8bd5\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh-cn/docs/tasks/debug/debug-cluster/crictl/"},"\u5b98\u65b9\u6587\u6863 ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u4e0b\u8f7d\u6307\u5b9a\u7248\u672c\n$ wget https://github.com/kubernetes-sigs/cri-tools/releases/download/v1.26.0/crictl-v1.26.0-linux-amd64.tar.gz\n")),(0,r.kt)("p",null,"\u4e0b\u8f7d\u89e3\u538b\u540e\uff0c\u653e\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/bin")," \u76ee\u5f55\u6216\u8005 ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," \u76ee\u5f55\u5373\u53ef"),(0,r.kt)("h3",{id:"5-kubeadm-kubectl-kubelet"},"5. Kubeadm Kubectl Kubelet"),(0,r.kt)("p",null,"\u91c7\u7528 Kubeadm \u65b9\u5f0f\u5b89\u88c5\uff0c\u66f4\u8be6\u7ec6\u5185\u5bb9\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh-cn/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#check-required-ports"},"\u5b98\u65b9\u6587\u6863")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null,"\u4ee5\u4e0b\u64cd\u4f5c\u9700\u8981\u5728\u6bcf\u53f0\u673a\u5668\u90fd\u6267\u884c\uff01\uff01\uff01"))),(0,r.kt)("p",null,"1\u3001\u66f4\u65b0apt\u7d22\u5f15"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt-get update\n# \u8fd9\u4e00\u6b65\u9700\u8981\u6267\u884c\uff0c\u955c\u50cf\u7ad9\u90fd\u662fhttps\u4f20\u8f93\u7684\uff0c\u6240\u4ee5\u5f97\u5148\u5b89\u88c5 `apt-transport-https` \u5e76\u4e0b\u8f7d\u955c\u50cf\u7ad9\u70b9\u7684\u5bc6\u94a5\u624d\u80fd\u4e0b\u8f7d\n$ sudo apt-get install -y apt-transport-https ca-certificates curl\n")),(0,r.kt)("p",null,"2\u3001\u4e0b\u8f7d\u963f\u91cc\u4e91\u516c\u5f00\u7b7e\u540d\u5bc6\u94a5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo curl -fsSLo /etc/apt/keyrings/kubernetes-archive-keyring.gpg https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg \n")),(0,r.kt)("p",null,"3\u3001\u6dfb\u52a0 Kubernetes apt \u4ed3\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ echo "deb [signed-by=/etc/apt/keyrings/kubernetes-archive-keyring.gpg] https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list\n')),(0,r.kt)("p",null,"\u5728\u4f4e\u4e8e Debian 12 \u548c Ubuntu 22.04 \u7684\u53d1\u884c\u7248\u672c\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/apt/keyrings")," \u9ed8\u8ba4\u4e0d\u5b58\u5728\u3002 \u5982\u6709\u9700\u8981\uff0c\u4f60\u53ef\u4ee5\u521b\u5efa\u6b64\u76ee\u5f55\uff0c\u5e76\u5c06\u5176\u8bbe\u7f6e\u4e3a\u5bf9\u6240\u6709\u4eba\u53ef\u8bfb\uff0c\u4f46\u4ec5\u5bf9\u7ba1\u7406\u5458\u53ef\u5199"),(0,r.kt)("p",null,"4\u3001\u66f4\u65b0 apt \u5305\u7d22\u5f15\uff0c\u5b89\u88c5 kubelet\u3001kubeadm \u548c kubectl\uff0c\u5e76\u9501\u5b9a\u5176\u7248\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo apt-get update\n$ sudo apt-get install -y kubelet kubeadm kubectl\n$ sudo apt-mark hold kubelet kubeadm kubectl \n")),(0,r.kt)("p",null,"5\u3001\u5b89\u88c5\u5b8c\u6210\u540e\u53ef\u67e5\u770b\u4e0b\u5bf9\u5e94\u7684\u7248\u672c\u53f7\uff0c\u662f\u5426\u90fd\u4e00\u81f4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubelet version \n$ kubeadm version \n$ kubectl version\n")),(0,r.kt)("p",null,"6\u3001\u914d\u7f6e kubelet \u5f00\u673a\u81ea\u542f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl enable kubelet\n")),(0,r.kt)("p",null,"Kubelet \u662f Kubernetes \u96c6\u7fa4\u4e2d\u7684\u4e00\u4e2a\u91cd\u8981\u7ec4\u4ef6\uff0c\u5b83\u8d1f\u8d23\u7ba1\u7406\u548c\u76d1\u63a7\u6bcf\u4e2a\u8282\u70b9\u4e0a\u7684\u5bb9\u5668\u3002\u5982\u679c kubelet \u5728\u7cfb\u7edf\u542f\u52a8\u65f6\u4e0d\u80fd\u6b63\u5e38\u542f\u52a8\uff0c\u5c06\u5bfc\u81f4\u6574\u4e2a\u96c6\u7fa4\u4e0d\u80fd\u6b63\u5e38\u8fd0\u884c\u3002"),(0,r.kt)("h3",{id:"6-\u521d\u59cb\u5316-master-\u8282\u70b9"},"6. \u521d\u59cb\u5316 Master \u8282\u70b9"),(0,r.kt)("p",null,"1\u3001\u62c9\u53d6\u955c\u50cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ sudo kubeadm init --image-repository "registry.aliyuncs.com/google_containers"\n')),(0,r.kt)("p",null,"2\u3001\u5bfc\u51fakubeadm\u9ed8\u8ba4\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo kubeadm config print init-defaults > kubeadm.yaml\n")),(0,r.kt)("p",null,"3\u3001\u66f4\u6539\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: kubeadm.k8s.io/v1beta3\nbootstrapTokens:\n- groups:\n  - system:bootstrappers:kubeadm:default-node-token\n  token: abcdef.0123456789abcdef\n  ttl: 24h0m0s\n  usages:\n  - signing\n  - authentication\nkind: InitConfiguration\nlocalAPIEndpoint:\n  advertiseAddress: 10.0.0.50 # api server \u5730\u5740 \u53ef\u4ee5\u7528 master ip\n  bindPort: 6443\nnodeRegistration:\n  criSocket: unix:///var/run/containerd/containerd.sock\n  imagePullPolicy: IfNotPresent\n  name: k8s-master # \u8bbe\u7f6e\u96c6\u7fa4master\u540d\u79f0\n  taints: null\n---\napiServer:\n  timeoutForControlPlane: 4m0s\napiVersion: kubeadm.k8s.io/v1beta3\ncertificatesDir: /etc/kubernetes/pki\nclusterName: kubernetes\ncontrollerManager: {}\ndns: {}\netcd:\n  local:\n    dataDir: /var/lib/etcd\nimageRepository: registry.aliyuncs.com/google_containers # \u66f4\u6539\u955c\u50cf\u6e90\nkind: ClusterConfiguration\nkubernetesVersion: 1.26.1 # \u914d\u7f6e\u5b89\u88c5\u7248\u672c\nnetworking:\n  dnsDomain: cluster.local\n  podSubnet: 10.2.0.0/16  # \u914d\u7f6e\u7f51\u7edc\n  serviceSubnet: 10.96.0.0/12\nscheduler: {}\n---\napiVersion: kubelet.config.k8s.io/v1beta1\nkind: KubeletConfiguration\ncgroupDriver: systemd # \u8bbe\u7f6ekubelet\u7684cgroupDriver\u4e3asystemd\nfailSwapOn: false\n---\napiVersion: kubeproxy.config.k8s.io/v1alpha1\nkind: KubeProxyConfiguration\nmode: ipvs # \u8bbe\u7f6ekube-proxy\u4ee3\u7406\u6a21\u5f0f\u4e3aipvs\n")),(0,r.kt)("p",null,"4\u3001\u63d0\u524d\u5b89\u88c5 \u955c\u50cf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770b\u9700\u8981\u54ea\u4e9b\u955c\u50cf\n$ sudo kubeadm config images list --config kubeadm.yaml\n# \u5b89\u88c5\n$ sudo kubeadm config images pull --config kubeadm.yaml\n")),(0,r.kt)("p",null,"5\u3001\u6267\u884c\u521d\u59cb\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u521d\u59cb\u5316\n$ sudo kubeadm init --config kubeadm.yaml\n")),(0,r.kt)("p",null,"\u521d\u59cb\u5316\u5931\u8d25\u540e\u53ef\u6267\u884c\u91cd\u8bd5\u3002\u6ce8\u610f\uff1a\u8fd9\u662f\u6267\u884c\u5931\u8d25\u540e\u56de\u6eda\u7684\u547d\u4ee4(\u6210\u529f\u4e0d\u9700\u8981\u6267\u884c)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo kubeadm reset\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9519\u8bef\u5904\u7406"),"\uff1a"),(0,r.kt)("p",null,"\u4e0b\u9762\u5217\u51fa\u7684\u9519\u8bef\u4e0d\u4e00\u5b9a\u4f1a\u51fa\u73b0\uff0c\u4f46\u662f\u6211\u5728\u591a\u6b21 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubeadm reset")," \u4e4b\u540e\u518d\u91cd\u65b0",(0,r.kt)("inlineCode",{parentName:"p"},"init"),"\u5b89\u88c5\u5c31\u4f1a\u51fa\u73b0\u8fd9\u4e2a\u95ee\u9898"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"[preflight] Running pre-flight checks\nerror execution phase preflight: [preflight] Some fatal errors occurred:\n        [ERROR FileContent--proc-sys-net-bridge-bridge-nf-call-iptables]: /proc/sys/net/bridge/bridge-nf-call-iptables does not exist\n        [ERROR FileContent--proc-sys-net-ipv4-ip_forward]: /proc/sys/net/ipv4/ip_forward contents are not set to 1\n[preflight] If you know what you are doing, you can make a check non-fatal with `--ignore-preflight-errors=...`\nTo see the stack trace of this error execute with --v=5 or higher\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u89e3\u51b3\u529e\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo modprobe br_netfilter && \\\n  echo 1 | sudo tee /proc/sys/net/bridge/bridge-nf-call-iptables && \\\n  echo 1 | sudo tee /proc/sys/net/ipv4/ip_forward\n")),(0,r.kt)("p",null,"6\u3001\u521d\u59cb\u5316\u6210\u529f\u540e\u914d\u7f6e\u666e\u901a\u7528\u6237\u4f7f\u7528 kubectl \u6743\u9650"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir -p $HOME/.kube\n  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\n  sudo chown $(id -u):$(id -g) $HOME/.kube/config\n")),(0,r.kt)("p",null,"7\u3001\u5728\u5176\u4ed6\u8282\u70b9\u6267\u884c\u52a0\u5165\u96c6\u7fa4\u64cd\u4f5c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo kubeadm join 10.0.0.50:6443 --token abcdef.0123456789abcdef \\\n        --discovery-token-ca-cert-hash sha256:260fa42751a882bb8eb8d6229df927eee6e6f1ea60bc098644d1b03139bb6177 \n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5982\u679c\u9057\u5931\u4e86\u4ee5\u4e0a\u5185\u5bb9\uff0c\u53ef\u5728master\u6267\u884c\u547d\u4ee4\u91cd\u65b0\u751f\u6210")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubeadm token create --print-join-command\n")),(0,r.kt)("p",null,"8\u3001\u67e5\u770b\u7ec4\u4ef6\u7684\u5065\u5eb7\u72b6\u51b5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ kubectl get cs \n\nWarning: v1 ComponentStatus is deprecated in v1.19+\nNAME                 STATUS    MESSAGE                         ERROR\ncontroller-manager   Healthy   ok\nscheduler            Healthy   ok\netcd-0               Healthy   {"health":"true","reason":""}\n')),(0,r.kt)("p",null,"9\u3001\u67e5\u770b\u8282\u70b9\u60c5\u51b5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$  kubectl get nodes\nNAME           STATUS     ROLES           AGE   VERSION\nk8s-master     NotReady   control-plane   15m   v1.26.1\nk8s-worker-1   NotReady   <none>          14m   v1.26.1\nk8s-worker-2   NotReady   <none>          11m   v1.26.1 \n")),(0,r.kt)("p",null,"\ud83d\ude01\u72b6\u6001\u5168\u90e8\u662f NotReady \u662f\u56e0\u4e3a\u6ca1\u88c5\u7f51\u7edc\u7ec4\u4ef6"),(0,r.kt)("h3",{id:"7-\u5b89\u88c5-helm"},"7. \u5b89\u88c5 Helm"),(0,r.kt)("p",null,"Helm \u662f Kubernetes \u7684\u5305\u7ba1\u7406\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ wget https://get.helm.sh/helm-v3.11.1-linux-amd64.tar.gz\n")),(0,r.kt)("p",null,"\u4e0b\u8f7d\u5b8c\u89e3\u538b\u540e\uff0c\u5c06 helm \u79fb\u52a8\u81f3 ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," \u76ee\u5f55\u4e0b\uff0c\u9a8c\u8bc1\u4e00\u4e0b\u6ca1\u51fa\u9519\u5373\u53ef"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ helm list\n")),(0,r.kt)("h3",{id:"8-\u5b89\u88c5-calico"},"8. \u5b89\u88c5 Calico"),(0,r.kt)("p",null,"CNI \u610f\u4e3a\u5bb9\u5668\u7f51\u7edc\u63a5\u53e3\uff0c\u5b83\u662f\u4e00\u79cd\u6807\u51c6\u7684\u8bbe\u8ba1. Kubernetes \u652f\u6301\u591a\u79cdCNI\u63a5\u53e3\uff0c\u4f8b\u5982\uff1aFlannel\u3001Calico\u3001Canal \u548c Weave\uff0c\u8fd9\u91cc\u6211\u5b89\u88c5 Calico\u3002\u4f7f\u7528Helm\u6765\u5b89\u88c5"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4ee5\u4e0b\u64cd\u4f5c\u53ea\u9700\u5728 master \u8282\u70b9\u64cd\u4f5c")),(0,r.kt)("p",null,"\u5148\u53bb ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/projectcalico/calico/releases"},"calico \u4ed3\u5e93"),"\u4e0b\u8f7d\u5bf9\u5e94\u7248\u672c\u7684 helm chart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ wget https://github.com/projectcalico/calico/releases/download/v3.25.0/tigera-operator-v3.25.0.tgz\n")),(0,r.kt)("p",null,"\u76f4\u63a5\u5b89\u88c5\u5728 kube-system \u547d\u540d\u7a7a\u95f4\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5b89\u88c5\n$ helm install calico tigera-operator-v3.25.0.tgz -n kube-system\n# \u67e5\u770b\u72b6\u6001\n$ kubectl get pod -n kube-system | grep tigera-operator\n\n# \u5f53\u6240\u6709pod\u90fd\u5904\u4e8erunning\u72b6\u6001\u65f6\u4ee3\u8868\u6210\u529f\u4e86\n$ kubectl get pods -n calico-system\n\nNAME                                       READY   STATUS    RESTARTS      AGE\ncalico-kube-controllers-6b7b9c649d-cffmm   1/1     Running   1 (47m ago)   93m\ncalico-node-crjkm                          1/1     Running   1 (47m ago)   93m\ncalico-node-dgghx                          1/1     Running   0             91m\ncalico-node-kt7rj                          1/1     Running   0             90m\ncalico-typha-548f96c876-5wkdq              1/1     Running   4 (45m ago)   52m\ncalico-typha-548f96c876-p744h              1/1     Running   2 (46m ago)   93m\ncsi-node-driver-bcpvv                      2/2     Running   2 (47m ago)   92m\ncsi-node-driver-h9sbf                      2/2     Running   0             43m\ncsi-node-driver-m7lmv                      2/2     Running   0             42m\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Calico \u7684 Pod \u540d\u4ee5 calico \u6253\u5934\uff0c\u68c0\u67e5\u786e\u8ba4\u6bcf\u4e2a Pod \u72b6\u6001\u4e3a Running")),(0,r.kt)("p",null,"\u6700\u540e\u518d\u67e5\u770b\u6240\u6709\u8282\u70b9\u72b6\u6001"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get nodes\n\nNAME           STATUS   ROLES           AGE   VERSION\nk8s-master     Ready    control-plane   97m   v1.26.1\nk8s-worker-1   Ready    <none>          92m   v1.26.1\nk8s-worker-2   Ready    <none>          94m   v1.26.1\n")),(0,r.kt)("h3",{id:"9-\u5b89\u88c5-ingress-nginx"},"9. \u5b89\u88c5 Ingress-nginx"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/services-networking/ingress/"},"Ingress")," \u662f Kubernetes \u96c6\u7fa4\u4e2d\u7528\u4e8e\u7ba1\u7406\u670d\u52a1\u5916\u90e8\u8bbf\u95ee\u7684 API \u5bf9\u8c61\uff0c\u5178\u578b\u7684\u8bbf\u95ee\u65b9\u5f0f\u662f HTTP \u548c HTTPS\u3002Ingress \u53ef\u4ee5\u63d0\u4f9b\u4e03\u5c42\u8d1f\u8f7d\u5747\u8861\u3001SSL \u7ec8\u7ed3\u3001\u57fa\u4e8e\u540d\u79f0\u7684\u865a\u62df\u4e3b\u673a\u7b49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.6.4/deploy/static/provider/cloud/deploy.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm upgrade --install ingress-nginx ingress-nginx \\\n  --repo https://kubernetes.github.io/ingress-nginx \\\n   --namespace ingress-nginx --create-namespace\n")),(0,r.kt)("h4",{id:"\u9519\u8bef\u5904\u7406"},"\u9519\u8bef\u5904\u7406"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'Error from server (InternalError): error when creating "nginx/run.yaml": Internal error occurred: failed calling webhook "validate.nginx.ingress.kubernetes.io": failed to ca  \nll webhook: Post "https://ingress-nginx-controller-admission.ingress-nginx.svc:443/networking/v1/ingresses?timeout=10s": remote error: tls: internal error\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u89e3\u51b3\u529e\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get ValidatingWebhookConfiguration\n\n$ kubectl delete -A ValidatingWebhookConfiguration ingress-nginx-admission\n")))}k.isMDXComponent=!0}}]);