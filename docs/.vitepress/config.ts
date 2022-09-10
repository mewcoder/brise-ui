export default {
  title: 'atomu',
  description: 'Vue3 Component Library',
  appearance: false,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/atom.svg',
    siteTitle: 'atomu',
    docsDir: 'docs',
    outlineTitle: '#',
    repo: 'https://github.com/mewcoder/atomu',
    footer: {
      copyright: 'Copyright © 2022 mewcoder'
    },
    sidebar: {
      '/': [
        {
          text: '指南',
          items: [{ text: '🚀 快速开始', link: '/guide/start' }]
        },
        {
          text: '基础组件',
          items: [
            { text: 'Icon 图标', link: '/component/icon' },
            { text: 'Button 按钮', link: '/component/button' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Input 输入框', link: '/component/input' },
            { text: 'Radio 单选框', link: '/component/radio' },
            { text: 'Checkbox 多选框', link: '/component/checkbox' },
            { text: '🚧 Select 下拉框 ', link: '/component/select' },
            { text: 'Switch 开关 ', link: '/component/switch' },
            { text: 'Rate 评分', link: '/component/rate' },
            { text: 'Form 表单 ', link: '/component/form' }
          ]
        },
        {
          text: '数据展示组件',
          items: [
            { text: '🚧 Table 表格 ', link: '/component/table' },
            { text: '🚧 Tree 树 ', link: '/component/tree' },
            { text: '🚧 Carousel 走马灯', link: '/component/carousel' },
            { text: '🚧 Collapse 折叠面板 ', link: '/component/collapse' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: '🚧 Message 信息 ', link: '/component/message' },
            { text: 'Dialog 对话框 ', link: '/component/dialog' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/mewcoder/atomu' }]
  }
};
