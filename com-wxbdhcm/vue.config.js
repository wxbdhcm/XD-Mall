module.exports = {
  publicPath: './',
  runtimeCompiler: true,
  devServer: {
    // 代理
    proxy: {
      '/api': {
        target: 'http://localhost:8000',  
        changeOrigin: true,
        pathRewrite: {
          '^/api':''
        },
      },
        '/page':{
          target: 'http://192.168.0.5:8081/user/findByPage',
          changeOrigin: true,
          pathRewrite: {
          '^/page':''
        }
      } 
    }
  }
}