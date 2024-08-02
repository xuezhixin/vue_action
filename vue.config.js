module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue_action/'
    : '/',
  
  // 输出文件目录
  outputDir: 'dist',
  
  // 静态资源目录
  assetsDir: 'static',
  
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码
  lintOnSave: process.env.NODE_ENV !== 'production',
  
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  
  // 生产环境的 source map
  productionSourceMap: true,
  
  // webpack相关配置
  configureWebpack: {
    // 自定义打包入口
    entry: './src/main.js',
    
    // 扩展 webpack 配置
    plugins: [
      // 添加插件
    ],
  },
  
  // 开发服务器配置
  devServer: {
    // 端口号
    port: 8080,
    
    // 启用 https
    https: false,
    
    // 自动打开浏览器
    open: true,
    
    // 代理配置
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
};
