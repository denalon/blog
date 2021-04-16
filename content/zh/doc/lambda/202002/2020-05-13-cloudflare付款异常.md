---
title: "2020 05 13 Cloudflare付款异常"
date: 2020-05-13T19:51:20+08:00
draft: false
url: /web/blog/2020/note/2020051301.html
---

### 在cloudflare付款异常


绑定信用卡时出现多次跳转和404错误，

![页面错误](https://cdn.jsdelivr.net/gh/denalon/ra-gh-2/2020/2020-05-13-cf03.png)

而且最可气的是明明是cloudflare的页面问题，出现多次跳转，cloudflare竟然将访问这的ip地址限制访问。

![页面错误](https://cdn.jsdelivr.net/gh/denalon/ra-gh-2/2020/2020-05-13-cf04.png)


多次尝试出现如下提示

![页面错误](https://cdn.jsdelivr.net/gh/denalon/ra-gh-2/2020/2020-05-13-cf01.png)

确实是cloudflare的付款后台问题，一家大公司居然在付款时掉链子也是奇葩，还有cloudflare居然限制访问者ip地址，着实可恶！


#### 测试cloudflare的workers功能。

测试博客页面http://b.ufs.im 部署在workers上的页面

还可以搭建jsproxy，但是还没心情配置。