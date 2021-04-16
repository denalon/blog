---
title: "将hugo页面部署到workers"
linkTitle: "2020 05 14 将hugo页面部署到workers"
date: 2020-05-14T11:01:20+08:00
draft: false
url: /web/deploy/2020/2020051401.html
---



## 使用cloudflare workers

原文官方文档： [workers sites](https://developers.cloudflare.com/workers/sites)

**推送hugo生成的public需要使用Workers KV存储，费用每个月5美元**

#### 将域名交给cloudflare解析

添加记录 名称 b.ufs.im  内容 随便填，后续使用路由这里不会不会生效。 代理状态 已代理 保存


#### 获取编辑workers的api令牌

在菜单-api令牌，生成自己的api令牌，通过选择`编辑 Cloudflare Workers` 权限和账户，生成一个应用api令牌。
这个令牌和脚本代码需要在之后操作中使用。


#### 在本地电脑操作 Wrangler

安装Wrangler

这里的安装命令

```
npm uninstall -g @cloudflare/wrangler && npm install -g @cloudflare/wrangler
```

报错，建议先安装cargo

```
curl https://sh.rustup.rs -sSf | sh
```

cargo安装完毕后，按照提示，将cargo加入path

使用cargo安装wrangler

cargo install wrangler


#### 在hugo项目的根目录配置Wrangler

执行Wrangler初始化
```
 wrangler init --site workers项目名
```

然后将hugo根目录下的文件转移到workers项目名
（这里是否可以直接在hugo根目录下执行wrangler init 还没有测试）

编辑wrangler.toml
```
name = "workers项目名"
type = "webpack"
account_id = "api 账户id"
workers_dev = false
route = "b.ufs.im/*"
zone_id = "api 区域 ID"

[site]
bucket = "./public" # <-- Add your build directory name here!
entry-point = "workers-site"
```

route = "b.ufs.im/*"   此处填写第一步新建的代理的dns解析

填写完毕后，需要执行 `wrangler config`填入自己在第二步里获取的编辑workers的api令牌


#### 发布

通过`wrangler publish`执行发布，将public下文件发布到cloudflare workers。
Wrangler可以自动新建Worker项目和kv命名空间。只需要访问route = "b.ufs.im/*"里的http://b.ufs.im就可以了。