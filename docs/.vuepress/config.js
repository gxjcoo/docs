
module.exports = {

  title: '风轻日暖',
  description: "风轻不寒，日暖不燥。适合coding",
  // base:'/docs/',
  theme: 'reco',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
      // 备案
      record: '浙ICP备‪20004092‬号-1 ',
      recordLink: 'http://www.beian.miit.gov.cn/',
      // cyberSecurityRecord: '公安部备案文案',
      // cyberSecurityLink: '公安部备案指向链接',
    repo: '',
    editLinks: true,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav:require('./nav'),
    sidebar:require('./slide'),
    valineConfig: {
      appId: 'upY3hTBOE9VBANwJiM96MXgo-gzGzoHsz',
      appKey: 'aDlwak6yU1kG1sM24Yt8uT4o' 
    },
    author: '风轻日暖'
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
