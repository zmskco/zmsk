import { defineConfig } from 'vitepress'
import { zmskStainPlugin } from './plugin/zmskStain';
import { zmskNavigation } from './navigation'
import { zmskSidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "子沐时空",
  description: "zmsk.co",
  titleTemplate: ':title | zmsk.co',
  lang: 'zh-CN',
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { href: 'https://cdnjs.sgcd.net/lxgw-wenkai-screen-webfont/lxgwwenkaigbscreen.css', rel: 'stylesheet' } ]
  ],
  // appearance: 'dark', // dark

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

    nav: zmskNavigation,
    sidebar: zmskSidebar,

    footer: {
      message: '<a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41031102000596" target="_blank">豫公网安备41031102000596号</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备19045526号-4</a>',
      copyright: '版权 © 2024-2025 <a href="https://zmsk.co/" target="_blank">子沐时空</a>'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zmskco/zmsk' }
    ],
  },

  markdown: {
    config: (md) => {
      md.use(zmskStainPlugin);
    },
  },
})
