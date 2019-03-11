import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/test.css';
import { Button } from 'antd';
import eventProxy from '../eventProxy/react-eventproxy-master/src/eventProxy'

class Order extends Component{
    constructor(props){
        super(props);
        this.state = {
            orderType:"我想换为广州-澳门的这一款产品"
        }
        this.changeType = ()=>{
            this.props.location.callback.transSame(this.state.orderType);
        }
        this.componentDidMount= ()=> {//生命周期函数
            setTimeout(() => { //发布事件 （兄弟组件的测试）
                eventProxy.trigger('orderType', this.state.orderType);//方法二
                // this.changeType();
            //   this.props.location.callback.transSame(this.state.orderType);//方法一
            }, 3000);
          }
          this.componentDidUpdate = () => {
            console.log('Child_1 update');
          }
    }
    render (){
        return(<div>
             {this.props.location.state.orderType},
             <Button type="primary" block onClick={this.changeType}>换产品</Button>
        </div>)
    }
}
module.exports =Order;