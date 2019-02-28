import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/test.css';

class Air extends Component{
    constructor(props){
        super(props);
    }
    render (){
        return(<div>
            飞机票内容
        </div>)
    }
}
module.exports = Air;