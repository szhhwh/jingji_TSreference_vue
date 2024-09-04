import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/reference/": [
    {
      text: "美编参考文档",
      link: 'README.md',
      icon: "book"
    },
    {
      text: "ChapterNo1 美编的开始",
      prefix: "ChapterNo1",
      children: "structure",
      collapsible: true
    },
    {
      text: "ChapterNo2 排版基础",
      prefix: "ChapterNo2",
      children: "structure",
      collapsible: true
    },
    {
      text: "ChapterNo3 InDesign 软件",
      prefix: "ChapterNo3",
      children: "structure",
      collapsible: true
    },
    {
      text: "ChapterNo4 图片",
      prefix: "ChapterNo4",
      children: "structure",
      collapsible: true
    },
    {
      text: "ChapterNo5 素材管理",
      prefix: "ChapterNo5",
      children: "structure",
      collapsible: true
    },
    {
      text: "ChapterNo6 大功告成",
      prefix: "ChapterNo6",
      children: "structure",
      collapsible: true
    },
    {
      text: "Appendix 附录",
      prefix: "Appendix",
      children: [
        'question.md',
        'vscode.md',
        'resource.md',
        'changelog.md'
      ],
      collapsible: true
    }
  ],
  "/spbook/": [
    {
      text: "高三特刊参考文档",
      link: 'README.md',
      icon: "book"
    },
    {
      text: "ChapterNo1 刊物规格",
      prefix: "Cpt1",
      children: "structure",
      collapsible: true
    },
    {
      text: "ChapterNo2 收集和打稿",
      prefix: "Cpt2",
      children: "structure",
      collapsible: true
    },
    {
      text: "Appendix 附录",
      prefix: "Appendix",
      children: [
        'changelog.md'
      ],
      collapsible: true
    }
  ],
  "/other/": [
    {
      text: "其他参考文档",
      link: 'README.md',
      icon: "book"
    },
    {
      text: "编辑部撰稿及制刊规范",
      link: 'editor.md',
    },
    {
      text: "外交部工作注意事项",
      link: 'foreign.md',

    },
    {
      text: "制刊时间线",
      link: "timeline.md"
    },
    {
      text: "PPT制作小贴士",
      link: "ppt.md"
    }
  ]
});
