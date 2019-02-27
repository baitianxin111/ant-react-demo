const webpack = require('webpack');
const path = require('path');
const DIST_PATH = path.resolve(__dirname, '../dist');
const APP_PATH = path.resolve(__dirname, '../app');
module.exports = { //基本配置
        entry: {
            app: './app/index.js',
            framework:['react','react-dom']//抽离框架代码
        },
        output: {
            filename: "js/bundle.js",
            path: DIST_PATH
        },
        module:{
            rules :[
                {
                    test: /\.js?$/,
                    use: "babel-loader",//转义
                    include: APP_PATH
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                        loader: "style-loader" //在html中插入<style>标签
                        },
                        {
                            loader: "css-loader",//获取引用资源，如@import,url()
                        },
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins:[
                                    require('autoprefixer')({
                                    browsers:['last 5 version']
                                    })
                                ]
                            }
                        }
                    ]
                },
                {
                    test:/\.less$/,
                    use: [
                            {  loader: "style-loader"  },
                            {  loader: "css-loader" },
                            {
                                loader: "postcss-loader",//自动加前缀
                                options: {
                                    plugins:[
                                        require('autoprefixer')({
                                            browsers:['last 5 version']
                                        })
                                    ]
                                }
                            },
                            {  loader: "less-loader" }
                        ]
                },
                {
                    test:/\.scss$/,
                    use:[
                            {  loader: "style-loader"  },
                            {
                                loader: "css-loader",
                            },
                            {  loader: "sass-loader" },
                            {
                            loader: "postcss-loader",
                            options: {
                                plugins:[
                                    require('autoprefixer')({
                                    browsers:['last 5 version']
                                    })
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|gif|woff|svg|eot|woff2|tff)$/,
                    use: 'url-loader?limit=8129', 
                    //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
                    exclude: /node_modules/
                }

            ]
        },               
};
