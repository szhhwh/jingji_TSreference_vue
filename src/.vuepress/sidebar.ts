import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/reference/": [
    {
      text: "ChapterNo1 美编的开始",
      prefix: "ChapterNo1",
      children: "structure",
    },
    {
      text: "ChapterNo2 排版的基本知识",
      prefix: "ChapterNo2",
      children: "structure",
    },
    {
      text: "ChapterNo3 InDesign 软件",
      prefix: "ChapterNo3",
      children: "structure",
    },
    {
      text: "ChapterNo4 图片处理",
      prefix: "ChapterNo4",
      children: "structure",
    },
    {
      text: "ChapterNo5 素材管理",
      prefix: "ChapterNo5",
      children: "structure",
    },
    {
      text: "ChapterNo6 大功告成",
      prefix: "ChapterNo6",
      children: "structure",
    },
    {
      text: "Appendix 附录",
      prefix: "Appendix",
      children: [
        'question.md',
        'vscode.md'
      ],
    }
  ],
  "/spbook/": [
    {
      text: "ChapterNo1 刊物规格",
      prefix: "Cpt1",
      children: "structure",
    },
    {
      text: "ChapterNo2 收集和打稿",
      prefix: "Cpt2",
      children: "structure"
    }
  ]
});
