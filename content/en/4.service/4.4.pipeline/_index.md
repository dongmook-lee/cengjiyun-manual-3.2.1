---
title: "4.4 管道"
excerpt: ""
permalink: /docs/zh/4.4/
redirect_from:
  - /theme-setup/
toc: false
toc_sticky: false
sidebar:
  nav: "zh"
---

---
通过管道功能，可一次性进行映像 Build 作业到工作负载部署作业。

并且，可修改正在部署的工作负载映像版本再重新部署。

### a\) 服务→选择应用程序表→点击管道
![]({{< param imageRootDir >}}/assets/ZH/{{< param version >}}/3.1.5_1.png)![]({{< param imageRootDir >}}/assets/ZH/{{< param version >}}/3.1.5_2.png)

| **管道菜单** | **说明** |
| :---: | :--- |
| 批量运行 | 批量运行管道作业 |
| 运行 | 运行相应管道作业 |

| **映像菜单** | **Build** | **说明** |
| :---: | :--- | :--- |
| 映像标签 | X | 输入注册表标签时，部署相应版本的工作负载 |
| 指定 | ⃝ | 映像版本中部署指定版本的工作负载 |
| 最新 | ⃝ | 映像版本中部署最新版本的工作负载 |
| Build&部署 | ⃝ | 新的 Build 作业后，部署相应映像版本的工作负载 |

### b\) 管道运行

#### 1. 使用通用映像创建工作负载时

输入映像标签后，点击‘运行’或‘批量运行’(只有部署版本和输入版本不一致时可以运行。 但 latest 除外)
![]({{< param imageRootDir >}}/assets/ZH/{{< param version >}}/3.1.5_3.png)

#### 2. 使用 Build 映像创建工作负载时

* **使用指定映像部署**

在管道作业目录右侧点击‘指定’以及选择映像后，点击‘运行’或者‘批量运行’(只有部 署版本和输入版本不一致时可以运行)
![]({{< param imageRootDir >}}/assets/ZH/{{< param version >}}/3.1.5_4.png)

* **使用指定映像部署**

在管道作业目录右侧选择‘Build&部署’后，确认‘运行与否’。之后点击‘运行’或‘批量 运行’(只有确认运行与否时可以运行)
![]({{< param imageRootDir >}}/assets/ZH/{{< param version >}}3.1.5_5.png)

* **使用最新映像部署**

在管道作业目录右侧选择‘最新’后，点击‘运行’或‘批量运行’。(只有部署版本和输入版 本不一致时可以运行)
![]({{< param imageRootDir >}}/assets/ZH/{{< param version >}}/3.1.5_6.png)

* **切换到 Build 编辑画面及日志查看**

点击 Build 映像名称时，切换到 Build 编辑画面。
![]({{< param imageRootDir >}}/assets/ZH/{{< param version >}}/3.1.5_7.png)

点击 Build 标签名称时，可以看到日志。
![]({{< param imageRootDir >}}/assets/ZH/{{< param version >}}/3.1.5_8.png)![]({{< param imageRootDir >}}/assets/ZH/{{< param version >}}/3.1.5_9.png)