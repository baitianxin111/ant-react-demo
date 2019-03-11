import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/test.css';
import { Button } from 'antd';

class Air extends Component{
    constructor(props){
        super(props);
        console.log("父=》子组建传值",this.props);//副与子组件的测试
        this.state = {
            msg:"我修改了父组件订阅飞机票的操作"
        }
        this.changeCheck =()=>{
            console.log(this.props)
            // this.props.location.state.msg = (this.state.msg);
            this.props.location.callback.reviseSonToParent(this.state.msg);
        }
    }
    render (){
        return(<div>
           {this.props.location.state.msg}  
            <Button type="primary" block onClick={this.changeCheck}>选择飞机票</Button>

        </div>)
    }
}
module.exports = Air;