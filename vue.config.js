module.exports = {
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: {
      "/api": {
        target: "http://mall-pre.springboot.cn",
        changeOrigin: true,
        pathRewrite: {
          "/api": "",
        },
      },
    },
  },
  // 自定义二级目录名称 如果不在根目录 就需要加这个
  // publicPath:'/app',
  // 打包文件夹输出名称
  // outputDir:'dist',
  // 指定输出首页名称
  // indexPath:'index2.html',
  // eslint 检查开启关闭 
  lintOnSave: false,
  // 打包压缩
  // productionSourceMap: true,
  // 把预加载得js文件删除 然后在点击请求的时候 再请求
  chainWebpack: (config) => {
    config.plugins.delete("prefetch");
  },
};
