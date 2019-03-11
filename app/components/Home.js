import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/test.css';
import '../css/home.less';
import 'antd/dist/antd.less';  // or 'antd/dist/antd.less'
import Air from './Air';
import Setting from './Setting';
import MyTrip from './MyTrip';
import Trip from './Trip';
import Order from './Order';
import Gifts from './Gifts';
import Personal from './Personal';
import {Layout, Menu, Breadcrumb, Icon,} from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {createStore} from 'redux';


function reducer(state={},action) {
    return action;
}
let store = createStore(reducer);


const {Header, Content, Footer, Sider,} = Layout;
const SubMenu = Menu.SubMenu;
class Home extends React.Component {
  constructor(props){
    super(props);
    // console.log(props,'show data ')
    this.state = {
      collapsed: false,
      id:'2',
      msg:'您选择了订阅飞机票的操作',
      orderType:'我选择了广州-珠海的产品'
    };
    //利用context的形式
    this.getChildrenContext = () =>{
      // return {
      return  this.orderType = this.state.orderType;
      // }
    }
    this.componentDidUpdate = ()=> {
      console.log('Child_2_1 update', store.getState());
    }
  
    this.componentDidMount = ()=> {
      store.subscribe(() => {
        let state = store.getState();
        if (state.type === 'child_2_1') {
          this.setState({
            msg: state.data
          });
        }
      });
    }
  
    this.onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }
    this.go =  (props)=>{
      console.log("跳转操作的",this.props);
      
    }
    this.reviseSonToParent = (msg)=>{
      console.log(msg)
      this.state.msg = msg;
        //setstate,修改从子组件中传递过来的值,异步更新不会立即改变值
      // return  this.setState({msg:this.state.msg })
      return this.setState({msg})
    }
    this.transSame = (orderType)=>{
      console.log(orderType);
      return this.setState({orderType});
    }
  }
  render() {
    const msg = this.state.msg;
    const orderType = this.state.orderType;
    const id = this.state.id;
    const reviseSonToParent  = this.reviseSonToParent;
    const transSame = this.transSame;
    return (
      <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" className="testthoeme" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <Link to="/" className="menuItemColor"> 周边游 </Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.go}>
              <Icon type="desktop" />
        
               <Link  to = {{
                 pathname:'/air',
                 search: '?sort='+id,
                 state:{msg},
                 callback : {reviseSonToParent}
               }} className="menuItemColor"  > 飞机/飞机票 </Link> 
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>旅拍</span></span>}>
              <Menu.Item key="3"><Link to="/trip/" className="menuItemColor"> 杭州 </Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>我的</span></span>}
            >
              <Menu.Item key="6">
              <Link to = {{
                pathname:'/order',
                state:{orderType},
                callback:{transSame}
              }}
              className="menuItemColor">我的订单</Link></Menu.Item>
              <Menu.Item key="8">
              <Link  to = {{
                  pathname:'/mytrip',
                  state:{orderType},
                  // callback:{transSame}
              }}             
              className="menuItemColor">我的行程</Link></Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub3"
              title={<span><Icon type="crown" /><span>设置</span></span>}
            >
              <Menu.Item key="6">
              <Link  to = {{
                  pathname:'/gifts',
              }}             
              className="menuItemColor">积分礼券</Link>
              </Menu.Item>
              <Menu.Item key="8">
              <Link  to = {{
                  pathname:'/personal',
              }}             
              className="menuItemColor">个人中心</Link>
              
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
                <Link to="/setting/" className="menuItemColor">设置（redux的测试）</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} >标题党 </Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>旅拍</Breadcrumb.Item>
              <Breadcrumb.Item>我的</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
             <Route path="/air/" component={Air} />
             <Route path='/setting/' component={Setting}></Route>
             <Route path='/trip/' component={Trip}></Route>
             <Route path='/mytrip/' component={MyTrip}></Route>
             <Route path='/order/' component={Order}></Route>
             <Route path='/personal/' component={Personal}></Route>
             <Route path='/gifts/' component={Gifts}></Route>
             {this.state.msg}
             {/* <Air msg={msg}></Air> */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by 周边游
          </Footer>
        </Layout>
      </Layout>
      </Router>
    );
  }
}
module.exports = Home;
// ReactDOM.render(<SiderDemo />, mountNode);