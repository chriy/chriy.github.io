---
slug: docker-compose
title: Compose
---

:::info
Compose是一个用于定义和运行多容器Docker应用程序的工具。使用Compose，你可以使用一个YAML文件来配置你的应用程序的服务。然后，只需一条命令，
你就可以创建并启动配置中的所有服务。
:::

> 官方文档：[https://docs.docker.com/compose/](https://docs.docker.com/compose/)

### 使用Compose的三个步骤
1. 使用 Dockerfile 定义应用程序的环境，以便可以在任何地方复制它。
2. 在 docker-compose.yml 中定义构成应用程序的服务，以便它们可以在隔离环境中一起运行。
3. 运行 `docker-compose up` 命令启动并运行您的整个应用程序。

**`docker-compose.yml` 配置文件示例**

```yaml
version: "3.9"  # optional since v1.27.0
services:
  nginx: 
    restart: unless-stopped #重启策略
    image: nginx:latest # 镜像名称
    container_name: nginx #容器名称
    build: .
    ports:
    - "443:443"  # 端口映射，可以配置多个
    volumes:  # 容器内数据卷挂载
    - ./nginx/conf.d:/etc/nginx/conf.d
    - ./nginx/html:/usr/share/nginx/html
    - ./nginx/logs:/var/log/nginx
    - ./nginx/ssl:/ssl:ro
    network_mode: prod  # 网络模式
```

### 常用命令
按照约定格式编写好 compose 配置文件后，可以执行以下命令，批量运行配置的所有容器。`-d` 代表在后台运行
```shell
# 启动所有容器
$ docker-compose up -d

# 启动指定容器
$ docker-compose up -d nginx

# 停止容器
$ docker-compose stop nginx
```

### 更多
```shell
$ docker-compose --help

Commands:
  build       Build or rebuild services
  convert     Converts the compose file to platform's canonical format
  cp          Copy files/folders between a service container and the local filesystem
  create      Creates containers for a service.
  down        Stop and remove containers, networks
  events      Receive real time events from containers.
  exec        Execute a command in a running container.
  images      List images used by the created containers
  kill        Force stop service containers.
  logs        View output from containers
  ls          List running compose projects
  pause       Pause services
  port        Print the public port for a port binding.
  ps          List containers
  pull        Pull service images
  push        Push service images
  restart     Restart containers
  rm          Removes stopped service containers
  run         Run a one-off command on a service.
  start       Start services
  stop        Stop services
  top         Display the running processes
  unpause     Unpause services
  up          Create and start containers
  version     Show the Docker Compose version information
```

