# ant-react-demo
基于webpack4.x 从零开始搭建react框架，包括ant,router,redux

## Features

- React+es6 🚀
- CSS Modules 🚀
- Webpack 4.x 🚀
- Webpack ant样式框架 🚀
- Webpack router,redux🚀

## Build the app

- npm install
- npm run dev
- npm run build
## problems
- babel babel-loader 版本必须一致，否则会出错
- webpack-dev-server 不是命令：删除node-modules 重新npm install
- 引入ant 类的属性方法加在controctor 里面写，否则会报错
- 使用定制主题报错less 版本要降到2.7.3
- 路由传递,路由跳转的已实现
- 组建通信,数据传递的方式有以下5中
- 1.（父组件）向（子组件）传递信息：父到子组件的通信(state,props)
-   2.（父组件）向更深层的（子组件） 进行传递信息  >>利用（context，组件间通用的变量）
-   3.（子组件）向（父组件）传递信息 ：子到父组件传递方法(state,callback)
-   4.没有任何嵌套关系的组件之间传值（比如：兄弟组件之间传值）：同级组件传递方式:利用父组件多次传递;发布订阅方式;context的方式，已实现
-   5.利用react-redux进行组件之间的状态信息共享
- redux 的数据存储方式 完善中,一般你想不到用这个的时候，就是不用它
- 提交暂存更改后记得去推送数据即Push
- 重新编译 先删除dist 文件，再重新生成

## License

- MIT

## 演示地址
- https://baitianxin111.github.io/ant-react-demo/dist/index.html
- 欢迎star

