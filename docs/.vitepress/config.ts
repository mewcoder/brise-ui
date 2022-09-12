export default {
  title: 'Atomu',
  description: 'Vue3 Component Library',
  appearance: false,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/atom.svg',
    siteTitle: 'Atomu',
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
          items: [
            { text: '🚀 快速开始', link: '/guide/start' },
            { text: '🎨 颜色', link: '/guide/color' }
          ]
        },
        {
          text: '基础组件(4)',
          items: [
            { text: 'Button 按钮', link: '/component/button' },
            { text: 'Icon 图标', link: '/component/icon' },
            { text: '🚧 Tag 标签', link: '/component/tag' },
            { text: '🚧 Layout 布局', link: '/component/layout' }
          ]
        },
        {
          text: '表单组件(8)',
          items: [
            { text: 'Input 输入框', link: '/component/input' },
            { text: 'Radio 单选框', link: '/component/radio' },
            { text: 'Checkbox 多选框', link: '/component/checkbox' },
            { text: '🚧 Select 下拉框 ', link: '/component/select' },
            { text: 'Switch 开关 ', link: '/component/switch' },
            { text: 'Rate 评分', link: '/component/rate' },
            { text: '🚧 DatePicker 日期选择期', link: '/component/datePicker' },
            { text: 'Form 表单 ', link: '/component/form' }
          ]
        },
        {
          text: '数据展示组件(4)',
          items: [
            { text: '🚧 Table 表格 ', link: '/component/table' },
            { text: '🚧 Tree 树 ', link: '/component/tree' },
            { text: '🚧 Carousel 走马灯', link: '/component/carousel' },
            { text: 'Collapse 折叠面板 ', link: '/component/collapse' }
          ]
        },
        {
          text: '导航组件(4)',
          items: [
            { text: '🚧 Menu 菜单 ', link: '/component/menu' },
            { text: 'Breadcrumb 面包屑 ', link: '/component/breadcrumb' },
            { text: '🚧 Tabs 标签页', link: '/component/tabs' },
            { text: '🚧 Backtop 回到顶部 ', link: '/component/backtop' }
          ]
        },
        {
          text: '反馈组件(5)',
          items: [
            { text: 'Alert 提示 ', link: '/component/alert' },
            { text: '🚧 Message 信息 ', link: '/component/message' },
            { text: '🚧 Notification 通知 ', link: '/component/notification' },
            { text: 'Dialog 对话框 ', link: '/component/dialog' },
            { text: '🚧 Drawer 抽屉 ', link: '/component/drawer' }
          ]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/mewcoder/atomu' }]
  }
};
