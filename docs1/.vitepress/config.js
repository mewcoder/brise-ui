import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "前端百题斩",
  description: "精选前端面试题",
  themeConfig: {
    nav: [
      {
        text: "基础",
        items: [
          { text: "JavaScript", link: "/one/js" },
          { text: "CSS", link: "/one/css" },
          { text: "浏览器", link: "/one/browser" },
        ],
      },
      {
        text: "综合",
        items: [
          { text: "vue", link: "/two/vue" },
          { text: "webpack", link: "/two/webpack" },
          { text: "其他", link: "/two/other" },
        ],
      },
    ],
    // sidebar: {
    //   "/one/": [
    //     {
    //       title: "引导",
    //       collapsible: false,
    //       items: [
    //         { text: "JavaScript", link: "/one/js" },
    //         { text: "CSS", link: "/one/css" },
    //         { text: "浏览器", link: "/one/browser" },
    //       ],
    //     },
    //   ],
    //   "/two/": [
    //     {
    //       title: "配置",
    //       collapsible: false,
    //       items: [
    //         { text: "JavaScript", link: "/one/js" },
    //         { text: "CSS", link: "/one/css" },
    //         { text: "浏览器", link: "/one/browser" },
    //       ],
    //     },
    //   ],
    // },
  },
  appearance: true,
});
