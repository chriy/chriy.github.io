---
title: Dockerfile
slug: dockerfile
tags: ['docker']
---

:::info
Dockerfile 是镜像的描述文件，用来构建打包一个镜像，官方建议命名是 **Dockerfile** , 使用此命名，docker build 的时候可以省略 -f 指定文件位置，会自动寻找名为 **Dockfile** 的文件
:::

### 如何使用

- 编写一个 Dockerfile 文件
- 书写脚本
- docker build 构建成一个镜像
- docker run  通过镜像运行一个容器


### 构建过程

- 每个指令关键字都必须大写
- 从上往下， 逐行执行
- \# 代表的是注释
- 每一个指令执行都是创建一个新的镜像层

**Dockerfile 文件是面向开发的，发布项目，制作镜像，就需要写这个文件**

### 指令
```shell
FROM             # 基础镜像，一切从这里开始构建
MAINTAINER       # 镜像作者, 姓名 + 邮箱
RUN              # 构建镜像时需要运行的命令
ADD              # 添加内容
WORKDIR          # 工作目录
VOLUME           # 容器内数据卷挂载目录
EXPOSE           # 暴露端口
CMD              # 运行容器时执行, 多个命令, 最后一个生效
ENTRYPOINT       # 运行容器时执行, 多个命令, 最后一个生效
ONBUILD          # 当构建一个被继承 Dockerfile 的时候就会运行
COPY             # 拷贝文件到镜像中
ENV              # 构建的时候设置环境变量
```

### ADD 和 COPY的区别
同样是拷贝和复制操作, 但是ADD会在拷贝的过程中将压缩包进行解压, COPY则不会

### CMD 和 ENTRYPOINT 的区别
```shell
CMD ["ls","-a"]
ENTRYPOINT ["ls","-a"]
```
这两个命令会在容器启动后执行一条命令，大多数情况下，只需要在这二者之间选一个使用即可。大部分Linux发行版的基础镜像里面调用CMD命令, 
指定容器启动后执行/bin/sh或/bin/bash。这样镜像启动默认进入交互式的shell。CMD可以被 docker run xxx ls -l 直接拼接命令覆盖。
如果你希望你的docker镜像只执行一个具体程序, 不希望用户在执行docker run的时候随意覆盖默认程序. 建议用ENTRYPOINT

### 构建自己的镜像
```shell
FROM openjdk:17-jdk-alpine
EXPOSE 8080
ADD app.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
```

### 打包镜像
```shell
docker build -f Dockerfile -t user/test:1 .
# -f 指定 Dockerfile的文件路径
# -t 指定镜像名字和 tag
# .  指定当前目录
```

