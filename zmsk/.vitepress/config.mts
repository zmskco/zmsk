import { defineConfig } from 'vitepress'
import { zmsk导航 } from './导航'
import { zmsk侧边栏合集 } from './侧边栏'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "子沐时空",
  description: "zmsk.co",
  titleTemplate: ':title | zmsk.co',
  lang: 'zh-CN',
  lastUpdated: true,
  appearance: 'dark',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: '子沐时空',
    outlineTitle: '内容导航',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '章节目录',
    darkModeSwitchLabel: '主题模式',
    lastUpdatedText: '更新时间',
    docFooter: {
      prev: '上一章',
      next: '下一章'
    },
    
    nav: zmsk导航,
    sidebar: zmsk侧边栏合集,
    footer: {
      message: 'ICP备案号：<a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备19045526号-4</a>',
      copyright: '版权 © 2024 <a href="https://zmsk.co/" target="_blank">子沐时空</a>'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/holdlg/zmsk' }
    ],
  },

})
