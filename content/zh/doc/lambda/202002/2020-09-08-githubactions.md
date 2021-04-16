---
title: "github"
linkTitle: "github"
description: "部署在github actions上的构建计划配置代码"
author: denalon
date: 2020-09-08T09:01:40+08:00
url: /web/note/2020090807.html
---

### github

部署在github上的构建计划配置代码

```
name: Build Hugo
on:
  push:
    branches: [ hugo ]
jobs:
  build:
    name: Build
    runs-on: ubuntu-latest
    steps:
    - name: Check out code
      uses: actions/checkout@master
    - name: upload sub
      run: |
        git submodule init
        git submodule update
    - name: Build Hugo
      uses: lowply/build-hugo@v0.74.1
    - name: Deploy to GitHub Pages
      if: success()
      uses: crazy-max/ghaction-github-pages@v2
      with:
        target_branch: gh-pages
        build_dir: deploy/public
      env:
        GITHUB_TOKEN: ${{ secrets.GH_TOKEN }}
```