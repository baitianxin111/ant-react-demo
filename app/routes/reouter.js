//引入路由
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home.jsx';
class AppRouter extends Component{
    render (){
        return  <Router>
                    <Switch>
                        <Route exact path='/' component={Home}> </Route>                       
                    </Switch>
                </Router>
    }
} 
module.exports = AppRouter;
 