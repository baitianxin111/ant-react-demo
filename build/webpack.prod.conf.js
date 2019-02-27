const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
// HtmlWebpackPlugin 还是会默认在DIS下生成 index.html 文件（压缩的）。
// 这就是说，它会用新生成的 index.html 文件，把我们的原来的替换。
// 官方默认babel-loader | babel 对应的版本需要一致: 要不回全部退到7版本，要不全部更新到最新版本
//管理插件输出压缩的
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = merge(baseWebpackConfig, {
    mode: 'production' ,//development,production 4.x版本的回是这样的
    output:{
        filename:"js/[name].[chunkhash:16].js"
    },
    plugins:[
       new HtmlWebpackPlugin({
            template:'public/index.html',
            inject:'body',
            minify:{
                removeComments:true,
                collapseWhitespace:true,
                removeAttributeQuotes:true,
            }
       }) ,
       new CleanWebpackPlugin(['../dist'], { allowExternal: true })
    ] ,
    optimization: {
        splitChunks: {
            chunks: "all",
            minChunks: 1,
            minSize: 0,
            cacheGroups: {
                framework: {
                    test: "framework",//抽离出入口名字相同的文件
                    name: "framework",//抽离后生成的文件
                    enforce: true
                }
            }
        }
    }

   
});
