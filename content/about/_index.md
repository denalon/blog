---
title: About
linkTitle: 关于
menu:
  main:
    weight: 999
    pre: <i class='fas fa-info-circle'></i>
layout: docs
---

{{% blocks/cover title="关于" height="small" %}}

个人网站，记事本

{{% /blocks/cover %}}

{{% blocks/section type="section" color="primary" %}}

## 使用持续集成的方法

持续集成可以让您在任何时间发布可以部署的软件。从外界来看，这是持续集成最明显的好处，我们可以对改进软件品质和减少风险说起来滔滔不绝，但对于客户来说，可以部署的软件产品是最实际的资产。利用持续集成，您可以经常对源代码进行一些小改动，并将这些改动和其他的代码进行集成。如果出现问题，项目成员马上就会被通知到，问题会第一时间被修复

## 内容使用git管理

Git 是用于 Linux内核开发的版本控制工具。与常用的版本控制工具 CVS, Subversion 等不同，它采用了分布式版本库的方式，不必服务器端软件支持（wingeddevil注：这得分是用什么样的服务端，使用http协议或者git协议等不太一样。并且在push和pull的时候和服务器端还是有交互的。），使源代码的发布和交流极其方便。 Git 的速度很快，这对于诸如 Linux kernel 这样的大项目来说自然很重要。 Git 最为出色的是它的合并跟踪（merge tracing）能力。

## 使用hugo生成

Hugo 是 Go 编写的静态网站生成器，速度快，易用，可配置。Hugo 有一个内容和模板目录，把他们渲染到完全的 HTML 网站。 Hugo 依赖于 Markdown 文件，元数据字体 。用户可以从任意的目录中运行 Hugo，支持共享主机和其他系统。 Hugo 只需要几分之一秒就可以渲染一个经典的中型网站，最好网站的每个部分渲染只需 1 毫秒。 Hugo 非常适合博客，文档等等网站的生成。 Hugo 当前提供 Windows，Linux，FreeBSD，NetBSD 和 OS X (Darwin) 的 x64, i386 和 ARM 架构的二进制预构建包。

{{% /blocks/section %}}

{{% blocks/section type="section" color="orange" %}}
## 主题使用docsy

Docsy是一个文件式的网站，提供了使用者一些样板以及文件指南，能良好的支持技术文件发布。Docsy是由Hugo等开源工具打造而成，结合Google的开源文件创建经验，提供方便的工具，帮助使用者快速建立开源项目文件网站。

Google提到，Docsy的特殊功能包括网站导览以及多语言支持等，Hugo本身就提供了简单的部署功能，Google额外增加了使用说明，包括添加页面、建构文件以及接受社群贡献的方法。目前Kubeflow、Knative和Agones都是用Docsy主题建制的，Google也创建了示范网站，并在其中大量使用Docsy的功能，供使用者浏览复制。

{{% /blocks/section %}}


{{% blocks/lead color="blue" %}}
部分未发布的内容
{{% /blocks/lead %}}



{{< blocks/section color="white" type="features">}}
{{% blocks/feature icon="fa-lightbulb" title="story" url="/story" %}}
未发布的故事集
{{% /blocks/feature %}}


{{% blocks/feature icon="fa fa-book" title="test" url="/develop" %}}
未发布的文章
{{% /blocks/feature %}}


{{% blocks/feature icon="fab fa-twitter" title="页面" url="/pages" %}}
单独页面
{{% /blocks/feature %}}
{{< /blocks/section >}}
<!-- 
{{< blocks/section >}}
<div class="container">
	<div class="row" >
		<div class="col-sm-4 col-12 text-center">
			<img src="/image/alipay.jpg"  alt="打赏" style="max-width: 60%"/>
		</div>
		<div class="col-sm-4 col-12 text-center">
			<img src="/image/wechatpay.jpg"  alt="打赏" style="max-width: 60%"/>
		</div>
		<div class="col-sm-4 col-12 text-center">
			<img src="/image/wechat.jpg"  alt="打赏" style="max-width: 60%"/>
		</div>
	</div>
</div>
{{< /blocks/section >}} -->