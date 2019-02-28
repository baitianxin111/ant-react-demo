import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/test.css';
import Air from './Air';
import Setting from './Setting';
import 'antd/dist/antd.less';  // or 'antd/dist/antd.less'
import {Layout, Menu, Breadcrumb, Icon,} from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const {Header, Content, Footer, Sider,} = Layout;
const SubMenu = Menu.SubMenu;
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
    };
    this.onCollapse = (collapsed) => {
      console.log(collapsed);
      this.setState({ collapsed });
    }
  }
  render() {
    return (
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
              <span>周边游</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>飞机票/火车票</span>
              {/* <Link to="/air">飞机票/火车票</Link> */}
              {/* <Route path="/air/" component={Air} ></Route> */}
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>旅拍</span></span>}
            >
              <Menu.Item key="3">北京</Menu.Item>
              <Menu.Item key="4">上海</Menu.Item>
              <Menu.Item key="5">广州</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>我的</span></span>}
            >
              <Menu.Item key="6">我的订单</Menu.Item>
              <Menu.Item key="8">我的旅拍</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>设置</span>
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
             这是内容页面
             {/* <Route path="/air/" component={Air} /> */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by 周边游
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
module.exports = Home;
// ReactDOM.render(<SiderDemo />, mountNode);