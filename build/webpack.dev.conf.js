// 开发环境开启服务监听文件改动实时更新最新内容
const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(baseWebpackConfig,{
    mode:'development',
    output: {
        filename: 'js[name].[hash:16].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'public/index.html',
            inject:'body',
            minify:{
                html5:true

            }
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer:{
        port:'8080',
        contentBase:path.join(__dirname,'../public'),
        compress:true,
        historyApiFallback:true,
        hot:true,
        https:false,
        noInfo:true,
        open:true,
        proxy:{}





    }
})