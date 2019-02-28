import React, { Component } from 'react';
import Home from '../app/components/Home'
import ReactDOM from 'react-dom';
import './css/test.css';
class App extends Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
        <div>
          <Home /> 
           {/* <h1 className="sss">hello, world，就想测试实时a!</h1>, */}
        </div>
        );
    }
}
module.exports = App;