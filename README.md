# 荆棘鸟文学社参考文档
![GitHub Repo stars](https://img.shields.io/github/stars/szhhwh/jingji_TSreference_vue)![GitHub top language](https://img.shields.io/github/languages/top/szhhwh/jingji_TSreference_vue)![GitHub](https://img.shields.io/github/license/szhhwh/jingji_TSreference_vue)![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/szhhwh/jingji_TSreference_vue)

## 开发
1. 依赖环境
- Node.js v20.17.0
- volta
1. 建议使用 [volta](https://volta.sh/) 安装 [Node.js](https://nodejs.org/)
```sh
volta install node@20.17.0
```
```sh
volta install pnpm
```
2. 安装依赖
```sh
pnpm i
```
3. 本地预览
```sh
pnpm run docs:dev
```
4. 构建静态页面。构建完成的网页会保存在 ``src\.vuepress\dist``
```sh
pnpm run docs:build
```

5. 更新依赖
```sh
pnpx vp-update
```