import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "http://szhh.hr98.net/",

  author: {
    name: "狮子耗耗",
    url: "https://github.com/szhhwh/",
  },

  iconAssets: "fontawesome-with-brands",

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
    mdEnhance: {
      align: true,
      attrs: true,
      chart: false,
      codetabs: true,
      demo: false,
      echarts: false,
      figure: true,
      flowchart: false,
      gfm: false,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
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
      tabs: true,
      vPre: true,
      vuePlayground: false,
    },
  },
});
