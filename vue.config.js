module.exports = {
  devServer: {
    port: 8081,
    host: 'http://172.16.4.92',
    open: true, //配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://novel.juhe.im/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
};
