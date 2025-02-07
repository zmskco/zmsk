import MarkdownIt from 'markdown-it';


class Stain {

  text: string

  constructor(text: string) {
    this.text = text
  }

  static colors = {
    // #FF79C6 #8BE9FD #50FA7B #FFB86C #FF6633 #BD93F9 #FF5555 #7acd80 #97a2e5
    // 对话 
    speakColor: "#FFB86C",
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
    coreColor: [],
    // 重要人物
    mainColor: [],
    // 次要人物
    secondaryColor: [],
    // 普通人物
    extrasColor: [],
    // 传承，元气道
    inheritColor: [
      "外现", "内现",
      "一色段", "二色段", "三色段", "四色段", "五色段", "六色段", "七色段",
      "红色段", "橙色段", "黄色段", "绿色段", "青色段", "蓝色段", "紫色段",
    ],
    // 星系，地理位置，空间
    galaxyColor: ["周家村", "商家庄", "夏家屯", "花神山", "巴山星语城", "巴山心愿城"],
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



const zmskStainPlugin = (md: MarkdownIt) => {
  const defaultInline = md.renderer.rules.text;

  md.renderer.rules.text = (tokens, idx, options, env, self) => {
    let token = tokens[idx];
    // 替换内容后重新渲染
    let content = new Stain(token.content).onStain()
    return defaultInline ? defaultInline(tokens, idx, options, env, self).replace(token.content, content) : token.content;
  };
};

export { zmskStainPlugin }