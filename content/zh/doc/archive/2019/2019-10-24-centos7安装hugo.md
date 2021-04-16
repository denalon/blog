---
title: "centos 7.x-64x 安装 hugo"
date: 2019-10-24T15:44:45+08:00
draft: flase
url: /web/raw/2019102406.html
---

# centos 7.x-64x 安装 hugo

先安装golang
```
yum -y install golang
```
查看版本,安装成功
```
go version
```

添加epel repo
```            
/etc/yum.repos.d/hugo.repo
```

```
 vim /etc/yum.repos.d/hugo.repo 
```
 
```
[daftaupe-hugo]

name=Copr repo for hugo owned by daftaupe

baseurl=https://copr-be.cloud.fedoraproject.org/results/daftaupe/hugo/epel-7-$basearch/

type=rpm-md

skip_if_unavailable=True

gpgcheck=1

gpgkey=https://copr-be.cloud.fedoraproject.org/results/daftaupe/hugo/pubkey.gpg

repo_gpgcheck=0

enabled=1
```




执行安装 hugo
```
yum -y install hugo
```
查看版本
```
hugo version
```