

import { SidebarI, SidebarGenerate } from "./sidebar"

const zmsk木兰概览: Array<SidebarI> = [
  {
    title: '概览',
    baseLink: '/木兰/概览/',
    collapsible: true,
    collapsed: false,
    docs: [
      '故事背景',
      '地理空间',
      '人物简集',
      '科普纪实',
      '木兰五族',
      '时间轴线',
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
      '第1章 代号558',
      '第2章 名字',
      '第3章 过年',
      '第4章 谈婚论嫁',
      '第5章 家丑',
      '第6章 元气外现',
      '第7章 还钱',
      '第8章 扮花神',
      '第9章 二色段',
      '第10章 四色段',
      '第11章 花神山',
      '第12章 花神降临',
      '第13章 怪病',
      '第14章 双生花',
      '第15章 十年',
      '第16章 琥珀手串',
      '第17章 巴山星语城',
      '第18章 生命科学站',
      '第19章 千代的过去',
      '第20章 蓝色段',
      '第21章 元气五色段',
      '第22章 狼族小雨',
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
      '第5章 花神千代',
      '第6章 雨燕系统',
      '第7章 王者风范',
      '第8章 低低低配版',
      '第9章 阿夜工坊',
      '第10章 重回赤羽峰',
      '第11章 成与不成',
      '第12章 终局之战',
      '第13章 脉冲声呐',
    ]
  }
]

const zmsk木兰良义无双: Array<SidebarI> = [
  {
    title: '良义无双',
    baseLink: '/木兰/良义无双/',
    collapsible: true,
    collapsed: false,
    docs: [
      '序言',
      
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
const zmsk木兰良义无双侧边栏 = new SidebarGenerate(zmsk木兰良义无双).setSidebar()



export {
  zmsk木兰概览侧边栏,
  zmsk木兰子与沐侧边栏,
  zmsk木兰温仁千代侧边栏,
  zmsk木兰巴山夜雨侧边栏,
  zmsk木兰良义无双侧边栏,
}