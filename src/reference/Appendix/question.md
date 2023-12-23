---
title: 常见问题
index: false
category:
  - 附录
---

## 图片的清晰度

在排版时我们经常会有这样的疑问：”这张图片到底清不清晰，印刷出来会不会糊呢？”这些问题看似并不复杂，但实际上能够影响一张图片输出质量的因素非常多。我们必须注意每个可能影响图片质量的环节，以避免印刷后出现糊图图的情况。

### 可能影响图片清晰度的环节
一定会影响图片清晰度：
- 原始图片分辨率：原始素材的**有效分辨率**不足（详见：[4.2 图片的基本属性](../ChapterNo4/4.2.md#图片的基本属性)）
- 图片格式转换：将图片转换为**有损**图片格式（详见：[4.2 图片格式转换](../ChapterNo4/4.2.md#图片格式转换)）
- 图片编辑软件导出图片：导出时设置的分辨率**低于原图分辨率**或使用了**有损**图片格式
- 使用 QQ 直接传输图片：图片不以**文件**的形式发送时，QQ 会隐式地将需要传输的图片转为 `jpg` 格式
- InDesign 导出 PDF：以默认设置导出 PDF 会压缩图片分辨率（详见：[3.4 导出 PDF](../ChapterNo3/3.4.md#导出)）

不会影响图片清晰度：
- InDesign 中预览状态下图片不清晰

### 超分辨率
利用 AI 技术，我们可以通过算法增加图片的清晰度。

::: warning
如果不是真的找不到合适的图片作为素材，**非常不建议**使用超分辨率技术提升图片分辨率（尤其是实拍的照片）。
:::

使用超分辨率技术大致有两种途径：
- 在线网站：能满足一般需求，但存在诸如*图片大小*、*每日转换张数*等限制
- 本地转换：几乎不存在限制。对电脑配置有较高的要求，一些软件也可以在低配置电脑上运行，但运行时间会很长

#### 在线网站
免费的 AI 图片超分辨率网站：
- [iloveimg](https://www.iloveimg.com/zh-cn/upscale-image)：免费 AI 图像提升工具
- [bigjpg](https://bigjpg.com/zh)：AI人工智能图片放大
- [Aiseesoft](https://zh-cn.aiseesoft.com/image-upscaler/)：全功能 AI 图像放大器，一键提高图像分辨率
- [waifu2x](https://waifu2x.udp.jp/index.zh-CN.html)：使用卷积神经网络对动漫风格的图片进行放大操作

#### 本地工具
免费的 AI 图片超分辨率工具：
- [Upscayl](https://upscayl.org/)（推荐）：免费且开源的 AI 图片超分辨率工具。超分辨率效果好且对硬件要求低
    - ![GitHub all releases](https://img.shields.io/github/downloads/upscayl/upscayl/total)![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/upscayl/upscayl)

- [waifu2x-coffee](https://github.com/lltcggie/waifu2x-caffe)：waifu2x 的本地图形化版本
    - ![GitHub all releases](https://img.shields.io/github/downloads/lltcggie/waifu2x-caffe/total)![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/lltcggie/waifu2x-caffe)

- [Waifu2x-Extension-GUI](https://github.com/AaronFeng753/Waifu2x-Extension-GUI)（主要功能免费）：利用深度卷积神经网络实现图像、GIF 和视频超分辨率以及视频帧插帧
    - ![GitHub all releases](https://img.shields.io/github/downloads/AaronFeng753/Waifu2x-Extension-GUI/total)![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/AaronFeng753/Waifu2x-Extension-GUI)

付费的 AI 图片超分辨率工具：
- [Topaz Photo AI](https://www.topazlabs.com/topaz-photo-ai)

## 使用 QQ 传输文件

QQ 是我们经常会用来传输图片和文件的软件之一，但是很多时候我们会遇到诸如*传到电脑上的图片找不到了*、*图片传过来变糊了*等情况。

### 电脑端接收的文件保存位置
> 星号 * 为通配符，表示任意数字
- 传统 QQ 版本（版本号<=9.7.* ）：文件默认保存在 `C:\Users\你的用户名\Documents\Tencent Files\QQ号\FileRecv` 内
- NT 架构 QQ（版本号>=9.9）：文件默认保存在 `C:\Users\你的用户名\Downloads` 内

::: tip 更改保存位置
在 QQ 的设置中可以更改接收文件的保存位置
:::

### 图片传输
- 从*电脑*发送到*手机*：所有图片默认以**文件**的形式发送
- 从*手机*发送到*电脑*：在图库中选择的图片默认以**图片**形式发送
    - 以直接发送图片时，QQ 会将图片转换为 `jpg` 格式。勾选**原图**选项后 QQ 才会发送原图
    - 以**文件**形式发送图片时，图片质量不受影响
- 使用**我的手机**功能传输的图片会以**文件**形式发送，图片质量不受影响

::: warning 隐式转换
未勾选**原图**选项的图片，QQ 会将其转换为 `jpg` 格式后发送
:::

## Indesign 无法正常启动或启动速度慢
目前已知在 Windows 11 系统下，未连接网络时无法正常打开 Indesign 2021 (17.4)。该问题目前无法复现，有待后续排查具体原因。
::: tip 解决方案
连接网络后再打开 Indesign 即可
:::
