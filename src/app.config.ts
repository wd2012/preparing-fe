



export default defineAppConfig({
  pages: [
    'pages/dialogue/index',
    'pages/dictionary/index',
    'pages/search/index'
  ],
  tabBar: {
    list: [
      {
        /** 页面路径，必须在 pages 中先定义 */
        pagePath: 'pages/dictionary/index',
        /** tab 上按钮文字 */
        text: '查词'
      },
      {
        /** 页面路径，必须在 pages 中先定义 */
        pagePath: 'pages/dialogue/index',
        /** tab 上按钮文字 */
        text: '对话'
      },
      {
        /** 页面路径，必须在 pages 中先定义 */
        pagePath: 'pages/search/index',
        /** tab 上按钮文字 */
        text: '搜索'
      }
    ]
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
