---
title: "使用docker运行hugo"
linkTitle: "使用docker运行hugo"
description: "使用docker运行hugo"
author: denalon
date: 2020-09-23T09:01:40+08:00
url: /web/note/2020092313.html
---

### 使用docker运行hugo

docker run --rm -t   -v $(pwd):/src   klakegg/hugo:0.74.3-ext-ubuntu