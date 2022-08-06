export default {
  title: "atoms-ui",
  description: "vue components",
  themeConfig: {
    logo: '/atom.svg',
    lastUpdated: "最后更新时间",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "编辑此网站",
    repo: "https://github.com/mewcoder",
    footer: {
      message: "MIT License.",
      copyright: "Copyright © 2022-present atoms",
    },
    nav: [
      { text: "指南", link: "/guide/installation", activeMatch: "/guide/" },
      { text: "组件", link: "/component/icon", activeMatch: "/component/" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [
            { text: "安装", link: "/guide/installation" },
            { text: "快速开始", link: "/guide/quieStart" },
          ],
        },
      ],
      "/component/": [
        {
          text: "基础组件",
          items: [
            { text: "Button 按钮", link: "/component/button" },
            { text: "Icon 图标", link: "/component/icon" },
          ],
        },
      ],
    },
  },
};
