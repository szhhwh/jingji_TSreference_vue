import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://book.jjnwxs.cn/",

  author: {
    name: "荆棘鸟文学社",
    url: "https://github.com/szhhwh/",
  },

  // icon
  iconAssets: "fontawesome",

  logo: "/logo.png",
  logoDark: '/logo-dark.png',

  repo: "szhhwh/jingji_TSreference_vue",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "荆棘鸟文学社美编部",

  displayFooter: true,

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    // All features are enabled for demo, only preserve features you need here
    copyright: true,
    mdEnhance: {
      align: true,
      attrs: true,
      chart: false,
      demo: false,
      echarts: false,
      flowchart: false,
      gfm: false,
      include: true,
      mark: true,
      mermaid: false,
      playground: {
        presets: ["ts", "vue"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      vPre: true,
      vuePlayground: false,
    },
    components: {
      components: ["Badge", "BiliBili"],
    },
    markdownImage: {
      figure: true,
      lazyload: true,
      size: true,
    },
    markdownMath: {
      type: "katex",
    },
    markdownTab: true,
    git: true,
    searchPro: true,
  },
  pageInfo: [
    "Author", "Date", "ReadingTime", "Word"
  ],
  editLink: false,
});