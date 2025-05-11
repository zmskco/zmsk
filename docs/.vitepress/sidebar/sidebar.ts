
interface SidebarI {
  title: string
  baseLink: string
  collapsible: boolean
  collapsed: boolean
  docs: Array<string>
}

class SidebarGenerate {
  sidebarArgs: Array<SidebarI> = []

  constructor(sidebarArgs: Array<SidebarI>) {
    this.sidebarArgs = sidebarArgs
  }

  setSidebar = () => {
    let sidebarResult: Array<{}> = []
    for (let sidebar of this.sidebarArgs) {
      let items: Array<{}> = []
      for (let doc of sidebar.docs) {
        items.push({ text: doc, link: sidebar.baseLink + doc })
      }
      sidebarResult.push({ text: sidebar.title, collapsible: sidebar.collapsible, collapsed: sidebar.collapsed, items: items })
    }
    return sidebarResult
  }

}

export { SidebarGenerate, SidebarI }