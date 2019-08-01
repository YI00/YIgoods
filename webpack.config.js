var path = require('path')
const {VueLoaderPlugin}=require('vue-loader')
//在内存中根据指定的模板页面，生成一份内存中的页面，同时把自动打包好的bundle注入到页面底部
//如果要配置插件，需要在导出的对象中挂载一个plugin节点
var htmlWebpackPlugin = require('html-webpack-plugin')

// 当以命令行运行 webpack 或 webpack-dev-server 的时候，
// 工具会发现我们并没有提供要打包的文件的入口和出口文件
// 此时，它会检查项目根目录中的配置文件，并读取这个文件
// 就拿到了导出的这个配置对象，进行打包构建
module.exports = {
  entry:path.join(__dirname,'./src/main.js'),
  output:{
    path:path.join(__dirname,'./dist'),//输出路径
    filename:'bundle.js' //指定输出文件的名称
  },
  plugins:[//所有webpack 插件的配置节点
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),//指定模板文件路径
      filename:'index.html'//设置生成的内存页面名称
  }),
  new VueLoaderPlugin()
  ],
  module:{
    //配置所有第三方loader模块的
    rules:[
        //第三方模块的匹配规则
        {test:/\.css$/,use:['style-loader','css-loader']},//处理css文件的loader
        {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//配置less
        {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//配置sass
        // {test:/\.jpg|png|gif|bmp|jpeg$/,use:'url-loader'}下面多了一个括号是为了看着更清楚
        {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=15962&name=[hash:8]-[name].[ext]'},//处理图片路径的loader
        //limit是限制图片大小，单位是byte，如果我们引用的图片大于或等于limit值，就不会被转为base64格式，
        //如果图片小于给定的值，则会被转为base64的字符串,[name].[ext]表示原来在文件中叫什么，页面中审查元素时也叫什么
        // [hash:8],表示哈希值，因为哈希值共32位，取了前8位
        {test:/\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader'},//处理字体文件的loader
       // {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//配置babel来转换高级的ES语法，因为不需要转换node_modules中的语法，所以要排除node_modules文件夹
       {test:/\.vue$/,use:'vue-loader'}
    ]
    },
    resolve:{
      // alias:{//修改 vue 被导入时的包的路径
      //   "vue$":"vue/dist/vue.js"
      // }
    }
}