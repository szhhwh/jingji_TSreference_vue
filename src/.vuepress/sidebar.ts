import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "ChapterNo1 美编的开始",
      prefix: "reference/ChapterNo1",
      link: "reference/ChapterNo1",
      children: "structure",
    },
    {
      text: "ChapterNo2 排版的基本知识",
      prefix: "reference/ChapterNo2",
      link: "reference/ChapterNo2",
      children: "structure",
    },
    {
      text: "ChapterNo3 InDesign 软件",
      prefix: "reference/ChapterNo3",
      link: "reference/ChapterNo3",
      children: "structure",
    },
    {
      text: "ChapterNo4 图片处理",
      prefix: "reference/ChapterNo4",
      link: "reference/ChapterNo4",
      children: "structure",
    },
    {
      text: "ChapterNo5 素材管理",
      prefix: "reference/ChapterNo5",
      link: "reference/ChapterNo5",
      children: "structure",
    },
    {
      text: "ChapterNo6 大功告成",
      prefix: "reference/ChapterNo6",
      link: "reference/ChapterNo6",
      children: "structure",
    },
    {
      text: "Appendix 附录",
      prefix: "reference/Appendix",
      link: "reference/Appendix",
      children: [
        'question.md',
        'vscode.md'
      ],
    }
  ],
});
