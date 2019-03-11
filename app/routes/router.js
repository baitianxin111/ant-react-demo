//引入路由
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {IndexRoute , BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {hashHistory, browserHistory, Redirect } from 'react-router'
import Home from '../components/Home';
import Air from '../components/Air';
import Setting from '../components/Setting';
// ReactDOM.render(<Router  history={hashHistory}>
//                 {/* <Switch> */}
//                     <Route  path='/' component={Home} />                        
//                     {/* <Route path="/air" component={Air} /> */}
//                     {/* <Route path="/setting" component={Setting}/>   */}
//                 {/* </Switch> */}
//                 </Router>,
//     document.getElementById("root")
// );
//component 没有这个属性，难道是版本4后语法错误？
class AppRouter extends Component{
    render(){
        return  <Router  history={hashHistory}>
                <Switch>
                    <Route exact path='/' component={Home}> </Route>                       
                    <Route path="/air" component={Air} ></Route>
                    <Route path="/setting" component={Setting}> </Route>
                </Switch>
                </Router>
    }       
} 
module.exports = AppRouter;
