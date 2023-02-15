---
title: Python3编译安装
---

:::info
编译二进制文件在Linux安装最新版本Python3
:::

二进制文件下载地址：[https://www.python.org/ftp/python](https://www.python.org/ftp/python/)

### 下载
```shell
$ wget https://www.python.org/ftp/python/3.10.0/Python-3.10.0.tgz
# 解压文件
$ tar -zxf Python-3.10.0.tgz
```

### 编译 & 安装
同时安装有2.x和3.x版本配置 需要配置不同路径区分 `/usr/local/python3`, 如果只有一个版本 `prefix=/usr/local/python` 即可
```shell
$ cd Python-3.10.0 && ./configure prefix=/usr/local/python3
$ make && make install
```

### 创建软链
```shell
$ ln -s /usr/local/python3/bin/python3 /usr/bin/python3
$ ln -s /usr/local/python3/bin/pip3 /usr/bin/pip3
```
不创建软链也可以，但是得把 `/usr/local/python3/bin` 目录加入环境变量

### 验证
```shell
$ python3 --version
Python 3.10.0
```
