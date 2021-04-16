---
title: "hexo自动部署"
linkTitle: "hexo自动部署"
description: "hexo自动部署"
author: denalon
date: 2020-09-14T09:01:40+08:00
url: /web/note/2020091431.html
---

测试 hexo自动部署代码

```
name: github pages

on:
  push:
    branches:
      - master  # Set a branch to deploy

jobs:
  deploy:
    runs-on: ubuntu-18.04
    steps:
      - uses: actions/checkout@v2
        with:
          submodules: recursive  # Fetch the Docsy theme
          fetch-depth: 0         # Fetch all history for .GitInfo and .Lastmod


      - name: Setup Node
        uses: actions/setup-node@v1
        with:
          node-version: '12.x'

      - name: Cache dependencies
        uses: actions/cache@v1
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - run: npm ci
      - run: hexo g

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_branch: gh-pages  # default: gh-pages
```
