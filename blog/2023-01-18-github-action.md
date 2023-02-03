---
title: GitHub Action
slug: github-action
---

:::info
GitHub Action 是 GitHub 推出的一个CI\CD服务, 可以实现自动构建与部署
:::
###  使用 GitHub Action
示例：静态博客自动编译并部署
```yaml
# 流水线名称
name: deploy

# main 分支接受到 push请求后触发流水线执行
on:
  push: 
    branches:
      - main

jobs:
  deploy:
    # 可配置流水线运行在什么版本的容器中
    runs-on: ubuntu-latest
    name: Build and Deploy
    
    # 执行步骤
    steps:
      - name: Pull Code
        uses: actions/checkout@v2
        with:
          ref: main

      - name: Use nodejs
        uses: actions/setup-node@v3
        with:
          node-version: '18.x'

      - name: Use Cache
        uses: actions/cache@v2
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-

      - name: Build
        run: |
          npm install
          npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          personal_token: ${{ secrets.ACCESS_TOKEN }}
          publish_dir: ./build
          publish_branch: gh-pages
          full_commit_message: ${{ github.event.head_commit.message }}
```

### 执行步骤
- 拉取指定分支代码
```yaml
name: Pull Code
uses: actions/checkout@v2
with:
    ref: main
```

- 配置依赖版本，此处博客使用的 nodejs
```yaml
name: Use nodejs
uses: actions/setup-node@v3
with:
  node-version: '18.x'
```

- 配置 npm 依赖缓存，可提升编译速度。其他类型缓存参考：[https://github.com/marketplace/actions/cache](https://github.com/marketplace/actions/cache)
```yaml
name: Use Cache
uses: actions/cache@v2
with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node- 
```
例如，使用hashFiles函数可以在依赖关系改变时创建一个新的缓存。


- 执行一些自定义的命令，此处以博客编译成静态文件需要的命令为例
```yaml
name: Build
run: |
  npm install
  npm run build
```

- 部署，这部分是整个核心的地方，编译完成后的项目会生成一个dist目录(nodejs项目), 或者其他设置好的名称
  - 使用 `peaceiris/actions-gh-pages@v3` 将静态页面部署成 **GitHub Pages.**
  - 配置token，有三种(github_token,deploy_token,personal_token), 具体 [参考地址](https://github.com/peaceiris/actions-gh-pages)
    - personal_token 设置：
      - 在 [https://github.com/settings/tokens](https://github.com/settings/tokens) 添加一个token并配置权限 
      - 找到需要用到token的仓库，进入 settings -> Secrets and variables -> Action 把刚刚创建好的token添加到这里，就可以在 ${{ secrets.名称 }} 访问了
  - 指定推送的分支和目录
  - 指定commit信息
```yaml
name: Deploy
uses: peaceiris/actions-gh-pages@v3
with:
  personal_token: ${{ secrets.ACCESS_TOKEN }}
  publish_dir: ./build
  publish_branch: gh-pages
  full_commit_message: ${{ github.event.head_commit.message }}
```
