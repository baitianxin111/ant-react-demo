import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/test.css';
import {createStore} from 'redux';


function reducer(state={},action) {
    return action;
}
let store = createStore(reducer);

class Personal extends Component{
    constructor(props){
        super(props);
//在试一下这个redux的例子，不行，就看gulp文件批量处理了，然后是基本的原理
// 在redux中的官方文档上看的文档解析地址：https://github.com/reduxjs/redux/blob/master/docs/basics/Actions.md
// 南山问题没有问题后，明天看gulp的文档资料
this.componentDidMount = () =>{
           setTimeout(() => {
               store.dispatch({
                   type:'child_2',
                   data:'hello child_1 data'
               })
           }, 3000);
            setTimeout(() => {
                store.dispatch({
                    type:'child_2_1',
                    data:'bye bye'
                })
            }, 4000);
       } 
    }
    
    render (){
        return(<div>
            个人中心的的内容
        </div>)
    }
}
module.exports = Personal;