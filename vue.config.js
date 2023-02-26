module.exports = {
  // 配置项目的静态资源引入时的基础路径。
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/',
  // 是否在开发过程中使用 eslint-loader 执行 lint-on-save。
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '项目模板'
      return args
    })
  },
  devServer: {
    // URL 的配置。
    host: '0.0.0.0',
    // 端口号的配置。
    port: 8080,
    // 自动打开浏览器。
    open: true,
    // 配置请求的代理服务器，解决开发阶段的跨域问题。
    proxy: {
      '/dev-api': {
        // 目标服务器的地址。
        target: 'http://......',
        // 支持 websocket 请求的代理。
        ws: true,
        // 代理服务器转发请求时请求头中的 host 值是否伪装。
        changeOrigin: true,
        // localhost:8080/dev-api/login ==> http://......:8080/login
        pathRewrite: {
          '^/dev-api': ''
        }
      }
    },
    // 在发送请求时，会先在 before 指定的函数中进行处理；如果 before 中没有对应的接口处理逻辑，则会请求服务器的真实接口。
    before: require('./src/mock/index.js')
  }
}
