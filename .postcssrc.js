// PostCSS 的配置文件。
// PostCSS 是基于 Node.js 运行的一个处理 CSS 的工具。
module.exports = {
  plugins: {
    // 把 px 转为 rem。
    'postcss-pxtorem': {
      // 转换的根元素的基准值。
      // 750 的设计稿：750 / 10 = 75。
      // 375 的设计稿：375 / 10 = 37.5。
      // VantUI 的设计稿是 375 的。
      rootValue({ file }) {
        return file.indexOf('vant') === -1 ? 75 : 37.5
      },
      // 需要转换单位 (px -> rem) 的 CSS 的属性。
      propList: ['*']
    }
  }
}
