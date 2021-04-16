---
title: centos 7.x-64x 安装 hugo
author: denalon
date: 2019-09-25T09:14:01+00:00
url: /web/raw/2019092501.html
---


<pre class="wp-block-preformatted">先安装golang
 yum -y install golang
 查看版本,安装成功
 go version
 添加epel repo
 touch /etc/yum.repos.d/hugo.repo
编辑repo
 vim /etc/yum.repos.d/hugo.repo 

[daftaupe-hugo]
name=Copr repo for hugo owned by daftaupe
baseurl=https://copr-be.cloud.fedoraproject.org/results/daftaupe/hugo/epel-7-$basearch/
type=rpm-md
skip_if_unavailable=True
gpgcheck=1
gpgkey=https://copr-be.cloud.fedoraproject.org/results/daftaupe/hugo/pubkey.gpg
repo_gpgcheck=0
enabled=1

 执行安装 hugo
 yum -y install hugo
 查看版本
 hugo version</pre>