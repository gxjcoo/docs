module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
   // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
   repo: 'https://github.com/gxjcoo/docs',
   base:'./',
   // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
   // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
   repoLabel: 'GitHub',
   // 以下为可选的编辑链接选项
   // 假如你的文档仓库和项目本身不在一个仓库：
   //docsRepo: 'https://github.com/Mulander-J/Wiki1001Dev',
   // 假如文档不是放在仓库的根目录下：
   //docsDir: 'docs',
   // 假如文档放在一个特定的分支下：
   //docsBranch: 'master',
   // 默认是 false, 设置为 true 来启用
   editLinks: true,
   // 默认为 "Edit this page"
  // editLinkText: '我的github',
   // 文档更新时间：每个文件git最后提交的时间,
   lastUpdated: 'Last Updated' ,
}

}