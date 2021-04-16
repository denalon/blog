---
title: "从零搭建Spring Boot的Hello World"
linkTitle: "从零搭建Spring Boot的Hello World"
description: "从零搭建Spring Boot的Hello World"
author: denalon
date: 2020-09-18T09:01:40+08:00
url: /web/note/2020091801.html
---

# 从零搭建Spring Boot的Hello World

## 安装Java开发环境

1.  下载并安装JDK8，下载地址参见[Java SE 8u261](https://www.oracle.com/java/technologies/javase-downloads.html?spm=a2c6h.13858378.0.0.68727178huCoQh) 。

2.  配置Java环境变量。

    a.  打开命令窗口，执行以下命令。

说明：执行命令前，请修改JAVA_HOME参数C:\Program Files\Java\jdk1.8.0_211为您的JDK安装目录。

    ```
    setx JAVA_HOME "C:\Program Files\Java\jdk1.8.0_211"
    setx path "%path%;%JAVA_HOME%\bin"

    ```
    b.执行以下命令，验证环境变量配置是否成功。

    ```
    java -version
    ```

## 安装并配置IntelliJ IDEA


此步骤主要介绍使用IntelliJ IDEA安装Spring Assistant插件。

1.  下载并安装IntelliJ IDEA，下载地址参见 [IntelliJ IDEA](https://www.jetbrains.com/idea/download/?spm=a2c6h.13858378.0.0.68727178huCoQh) 。

2.  双击运行IntelliJ IDEA。

3.  在IntelliJ IDEA启动界面，依次单击 Configure > Settings 。

![](https://base.oribos.city//images/2020/09/TB1XKXUO1L2gK0jSZFmXXc7iXXa-999-901.png)

4.  单击 Plugins，然后在搜索栏输入spring Assistant。最后单击 Install 安装插件。

![](https://base.oribos.city//images/2020/09/TB1Kx4JOYr1gK0jSZFDXXb9yVXa-1249-880.png)

5.  单击 Restart IDE。

![](https://base.oribos.city//images/2020/09/TB1zjFHOVT7gK0jSZFpXXaTkpXa-1241-872.png)

## 创建Spring Boot项目

本步骤主要介绍使用Spring Assistant插件来搭建简单的Spring Boot项目。

1.  在IntelliJ IDEA启动界面，单击 Create New Project。

2.  在左侧单击 Spring Assistant，然后单击 Next。

![](https://base.oribos.city//images/2020/09/TB1ncFTO8r0gK0jSZFnXXbRRXXa-1086-832.png)

3.  如下图所示，依次配置Group Id、Artifact Id、Packaging等，然后单击 Next。

![](https://base.oribos.city//images/2020/09/TB10M0AOVY7gK0jSZKzXXaikpXa-1085-833.png)

4.  在左侧单击 Web，然后勾选 Spring Web，最后单击Next。

![](https://base.oribos.city//images/2020/09/TB1IWmafGNj0u4jSZFyXXXgMVXa-1087-831.png)

5.  单击 Finish，等待项目初始化。

完整的目录结构如下。

![](https://base.oribos.city//images/2020/09/TB144Cnasieb18jSZFvXXaI3FXa-469-705.png)

6.  初始化完成之后，在 com.example.demo 目录下创建 HelloAliyunController.java 文件。

![](https://base.oribos.city//images/2020/09/TB1PZFIOVT7gK0jSZFpXXaTkpXa-610-323.png)


7.  在 HelloAliyunController.java 文件中，添加以下代码。

```
package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloAliyunController {

    @RequestMapping("/")
    public String helloAliyun(){

        return "Hello Aliyun!!!";
    }
}

```

打包并上传项目到ECS服务器
1.  打包项目。

    a.  单击IDEA右上角Maven。

![](https://base.oribos.city//images/2020/09/TB1coVAOVY7gK0jSZKzXXaikpXa-421-400.png)

    b.  依次双击 demo>Lifecycle>package，开始打包。

![](https://base.oribos.city//images/2020/09/TB187pTO8r0gK0jSZFnXXbRRXXa-251-375.png)

    执行结果如下，图中标记位置为打包后jar包的路径。


![](https://base.oribos.city//images/2020/09/TB1770IOVT7gK0jSZFpXXaTkpXa-980-633.png)


2.  打开终端工具。

Windows：打开命令窗口。
MAC：打开命令行终端Terminal。
Windows用户请检查系统中是否安装有SSH工具。检查方法：

    a.  在终端中输入命令ssh -V。
```
ssh -V
```
如果显示SSH版本则表示已安装，如下图所示。

![](https://base.oribos.city//images/2020/09/TB1Am16g639YK4jSZPcXXXrUFXa-306-34.png)

 b.  如果未安装，请下载安装OpenSSH工具。

3.  上传jar包到ECS服务器。

    a.  在命令行中执行以下命令。

scp C:\Users\Administrator\IdeaProjects\demo\target\demo-0.0.1-SNAPSHOT.jar root@47.xx.xx.xx:/root
说明: 在执行命令前，请先替换以下参数。

C:\Users\Administrator\IdeaProjects\demo\target\demo-0.0.1-SNAPSHOT.jar为jar包存放路径。
47.xx.xx.xx为ECS实例公网IP。
执行结果如下。

![](https://base.oribos.city//images/2020/09/TB1mBKKPEz1gK0jSZLeXXb9kVXa-1006-43.png)


    b.  输入已创建的ECS云服务器的登录密码。

    c.  上传成功后，会显示如下信息。

![](https://base.oribos.city//images/2020/09/TB1N1XKO7L0gK0jSZFAXXcA9pXa-1010-66.png)


## 运行ECS上的Java项目

1.  执行以下命令，安装Java运行环境。

```
yum -y install java-1.8.0*
```

2.  执行以下命令，运行Java项目。

```
java -jar demo-0.0.1-SNAPSHOT.jar
```
执行结果如下。

![](https://base.oribos.city//images/2020/09/TB1BKpAO7L0gK0jSZFtXXXQCXXa-1402-380.png)