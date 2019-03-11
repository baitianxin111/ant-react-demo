import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/test.css';
import {createStore} from 'redux';


function reducer(state={},action) {
    return action;
}
let store = createStore(reducer);

class Gifts extends Component{
    constructor(props){
        super(props);
        this.state = {
            msg:'test redux start'
        }
        this.componentDidUpdate = () =>{
            console.log('update gifts',store.getState());
        }
        this.componentDidMount = () =>{
            store.subscribe(()=>{//回调函数
                let state = store.getState();
                if(state.type == 'child_2'){
                    this.setState({
                        msg:state.data
                    })
                }

            })
        }
    }
    render (){
        return(<div>
            礼券中心 {this.state.msg}
        </div>)
    }
}
module.exports = Gifts;