import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {}
  }),
  base: "/jingji/book/",

  lang: "zh-CN",
  title: "荆棘鸟文学社",
  description: "荆棘鸟文学社官方参考文档",

  head: [
    [
      'link', { rel: 'icon', href: 'favicon.ico' }
    ]
  ],

  theme,
});
