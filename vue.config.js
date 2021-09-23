const path = require('path');
module.exports = {
  outputDir: 'dist', // build 输出目录
  assetsDir: 'assets', // 输出静态资源目录 (js,css,img)
  lintOnSave: false, // 是否开启 eslint
  devServer: { // 启动服务参数
    open: true, // 是否打开浏览器
    host: "localhost", // 域名
    port: '8080', // 端口
    https: false, // 是否使用 https 协议
    hotOnly: false, // 是否开启日更新
    // proxy: { // 配置代理
    //   '/api': {
    //     target: 'https://test.baituanle.com/?s=/api', // API 服务器的地址 测试版
    //     // target: 'https://test.baituanle.com', // API 服务器的地址 测试版
    //     // target: 'https://btl.baituanle.com/?s=/api', // API 服务器的地址 正式版
    //     // target: 'https://btl.baituanle.com', // API 服务器的地址 正式版
    //     ws: true, // 代理 websokets
    //     changeOrigin: true, // 是否跨域，虚拟站点需要更改 origin
    //     pathRewrite: {
    //       // 重写路径 比如 '/api/aaa/bbb' 重写为 '/aaa/bbb'
    //       '^/api': 'https://test.baituanle.com/?s=/api',
    //     }
    //   },
    // }
  },
  pluginOptions: { // scss
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname,'src/assets/css/scss-common.scss')
      ]
    }
  },
}
