import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "荆棘鸟文学社",
  description: "荆棘鸟文学社官方参考文档",

  head: [
    ["link", { rel: "icon", href: "favicon.ico" }],
    [
      "script",
      {},
      `\
(function() {
  var script = document.createElement('script');
  script.src = "https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.1.0-beta.3/libs/cn/index.js";
  script.onload = function() {
    new CozeWebSDK.WebChatClient({
      config: {
        bot_id: '7352385184374767616',
      },
      componentProps: {
        title: 'Coze',
      },
      auth: {
        type: 'token',
        token: 'pat_Xz8JkNbl5VLdVElhLr81ognIdFkObal62XIpq8TJBin3OEGe5tSUh5wCkUBLLTWP',
        onRefreshToken: function () {
          return 'pat_Xz8JkNbl5VLdVElhLr81ognIdFkObal62XIpq8TJBin3OEGe5tSUh5wCkUBLLTWP';
        }
      }
    });
  };
  document.head.appendChild(script);
})();
      `,
    ],
  ],

  theme,
});
