# 荆棘鸟文学社美编参考文档
![GitHub Repo stars](https://img.shields.io/github/stars/szhhwh/jingji_TSreference_vue)![GitHub top language](https://img.shields.io/github/languages/top/szhhwh/jingji_TSreference_vue)![GitHub](https://img.shields.io/github/license/szhhwh/jingji_TSreference_vue)![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/szhhwh/jingji_TSreference_vue)

## 本书目录 Menu

- [ChapterNo1 美编的开始](src/reference/ChapterNo1/README.md)
    - [荆棘鸟文学社刊物规格](src/reference/ChapterNo1/1.1.md)
    - [前期准备](src/reference/ChapterNo1/1.2.md)
- [ChapterNo2 排版的基本知识](src/reference/ChapterNo2/README.md)
    - [文字基本属性](src/reference/ChapterNo2/2.1.md)
    - [文字排版及规范](src/reference/ChapterNo2/2.2.md)
    - [特殊文字效果](src/reference/ChapterNo2/2.3.md)
- [ChapterNo3 InDesign软件](src/reference/ChapterNo3/README.md)
    - [安装和新建文档](src/reference/ChapterNo3/3.1.md)
    - [新建文本框和页面管理](src/reference/ChapterNo3/3.2.md)
    - [图层和参考线的使用](src/reference/ChapterNo3/3.3.md)
    - [其他常用功能](src/reference/ChapterNo3/3.4.md)
- [ChapterNo4 图片处理](src/reference/ChapterNo4/README.md)
    - [搜寻图片素材](src/reference/ChapterNo4/4.1.md)
    - [图片的存储原理和格式转换](src/reference/ChapterNo4/4.2.md)
    - [修缮图片](src/reference/ChapterNo4/4.3.md)
- [ChapterNo5 素材管理](/src/reference/ChapterNo5/README.md)
    - [字体管理](src/reference/ChapterNo5/5.1.md)
    - [素材管理](src/reference/ChapterNo5/5.2.md)
- [ChapterNo6 大功告成](src/reference/ChapterNo6/README.md)
    - [上交排版作品](src/reference/ChapterNo6/6.1.md)
    - [汇总排版](src/reference/ChapterNo6/6.2.md)
    - [出刊的其他注意事项](src/reference/ChapterNo6/6.3.md)

## 开发
### 依赖环境
- [Node.js v16.20.1 < v18*](https://nodejs.org/)

### 安装依赖
```shell
npm i
```

### 本地预览
```shell
npm run docs:dev
```

### 构建静态页面
构建完成的网页会保存在 ``src\.vuepress\dist``
```shell
npm run docs:build
```

## 更新日志 Update log
### v0.3.0 Latest
项目迁移至[jingji_TSreference_vue](https://github.com/szhhwh/jingji_TSreference_vue)

### v0.2.1
New
- 4.1 新增 使用搜索引擎搜寻图片素材
- 4.2 调整 内容顺序；修改部分内容
- 4.3 新增 去除图片背景

### v0.2.0
New
- 更新 6.2 排版汇总
- 更新 6.3 出刊的其他注意事项

Fixed
- 修复carbin块的显示问题
- 许多细节优化

### v0.1.2
Fixed
- 部分链接不能点击的问题
- 添加了分页标题
- 修复carbin块的显示问题

New
- 更新 4.2 图片的存储原理和格式转换
- 更新 3.3 图层和参考线的使用

Other
- 非常多的细节修复
- 放弃使用obsidian作为编辑器

### v0.1.0
- 从gitbook迁移到mdbook

### v0.0.1
- 使用gitbook新建项目