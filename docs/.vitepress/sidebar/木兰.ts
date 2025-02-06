

import { SidebarI, SidebarGenerate } from "./sidebar"

const zmsk木兰概览: Array<SidebarI> = [
  {
    title: '概览',
    baseLink: '/木兰/概览/',
    collapsible: true,
    collapsed: false,
    docs: [
      '地理空间',
      '人物简集',
      '科普纪实',
      '木兰五族',
      '时间轴线',
      '故事背景',
    ]
  }
]

const zmsk木兰温仁千代: Array<SidebarI> = [
  {
    title: '温仁千代',
    baseLink: '/木兰/温仁千代/',
    collapsible: true,
    collapsed: false,
    docs: [
      '序言',
      '第1章 复活',
      '第2章 周家村',
    ]
  }
]

const zmsk木兰巴山夜雨: Array<SidebarI> = [
  {
    title: '巴山夜雨',
    baseLink: '/木兰/巴山夜雨/',
    collapsible: true,
    collapsed: false,
    docs: [
      '序言',
      '第1章 山崖之上',
      '第2章 生命之地',
      '第3章 求援',
      '第4章 重逢与离别',
    ]
  }
]

const zmsk木兰子与沐: Array<SidebarI> = [
  {
    title: '子与沐•木兰',
    baseLink: '/木兰/子与沐/',
    collapsible: true,
    collapsed: false,
    docs: [
      '序言',
      '第1章 王子来了',
      '第2章 王子走了',
    ]
  }
]



const zmsk木兰概览侧边栏 = new SidebarGenerate(zmsk木兰概览).setSidebar()
const zmsk木兰子与沐侧边栏 = new SidebarGenerate(zmsk木兰子与沐).setSidebar()
const zmsk木兰温仁千代侧边栏 = new SidebarGenerate(zmsk木兰温仁千代).setSidebar()
const zmsk木兰巴山夜雨侧边栏 = new SidebarGenerate(zmsk木兰巴山夜雨).setSidebar()



export {
  zmsk木兰概览侧边栏,
  zmsk木兰子与沐侧边栏,
  zmsk木兰温仁千代侧边栏,
  zmsk木兰巴山夜雨侧边栏,
}