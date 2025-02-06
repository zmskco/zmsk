
class Stain {

  text: string

  constructor(text: string) {
    this.text = text
  }

  static colors = {
    // 对话 #F1FA8C #FF6633 #CCCC00
    speakColor: "#FF79C6",
    // 核心人物
    coreColor: "#8BE9FD",
    // 重要人物
    mainColor: "#50FA7B",
    // 次要人物
    secondaryColor: "#FFB86C",
    // 普通人物
    extrasColor: "#FF6633",
    // 传承
    inheritColor: "#BD93F9",
    // 星系，地理位置，空间
    galaxyColor: "#FF5555",
    // 事件
    storyColor: "#7acd80",
    // 元灵器
    entityColor: "#97a2e5"
  }

  static tags = {
     // 对话
    speakColor: ['“.*?”'],
    // 核心人物
    coreColor: ["千代", "558"],
    // 重要人物
    mainColor: ["夏雨婷", "小小", "子平", "子安"],
    // 次要人物
    secondaryColor: ["老周", "小周", "村长"],
    // 普通人物
    extrasColor: ["老商", "胖妞", "舞蹈老师"],
    // 传承，元气道
    inheritColor: [
      "外现", "内现", 
      "一色段", "二色段", "三色段", "四色段", "五色段", "六色段", "七色段", 
      "红色段", "橙色段", "黄色段", "绿色段", "青色段", "蓝色段", "紫色段", 
    ],
    // 星系，地理位置，空间
    galaxyColor: ["周家村", "商家装", "夏家屯", "花神山", "巴山"],
    // 事件，节日
    storyColor: ["扮花神", "花神节", "原始人", "超人", "太空人", "元气人", "永恒人", "人上人"],
    // 元灵器,物品
    entityColor: ["琥珀手串", "双生花", "白玉手镯"]
  }

  onStain() {
    // 着色时遇到markdown格式中的标题
    // #后面包含需要着色的内容，暂不处理
    // 可以用空格分割一下，如：# 千代 改成 # 千 代
    // 避免vitepress渲染时出现多余标签
    for (let color of Object.keys(Stain.colors)) {
      // logic 关键词着色
      for (let name of Stain.tags[color]) {
        var regex = new RegExp(name, "g");
        this.text = this.text.replace(regex, (match) => {
          return `<span style="color: ${Stain.colors[color]};">${match}</span>`
        })
      }
    }
    return this.text
  }

}

export { Stain }