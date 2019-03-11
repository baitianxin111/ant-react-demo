import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/test.css';
import { Calendar, Badge } from 'antd';
import eventProxy from '../eventProxy/react-eventproxy-master/src/eventProxy'

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: '杭州.' },
        { type: 'success', content: '丽江.' },
      ]; break;
    case 10:
      listData = [
        { type: 'warning', content: '珠海.' },
        { type: 'success', content: '澳门.' },
        { type: 'error', content: '香港.' },
      ]; break;
    case 15:
      listData = [
        { type: 'warning', content: '垦丁' },
        { type: 'success', content: '稻城' },
        { type: 'error', content: '南海观音' },
        { type: 'error', content: '泰山' },
        { type: 'error', content: '白云山' },
        { type: 'error', content: '伶仃岛' },
      ]; break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {
        listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))
      }
    </ul>
  );
}

function getMonthData(value) {
  if (value.month() === 8) {
    return 1394;
  }
}

function monthCellRender(value) {
  const num = getMonthData(value);
  return num ? (
    <div className="notes-month">
      <section>{num}</section>
      <span>Backlog number</span>
    </div>
  ) : null;
}

 
class MyTrip extends Component{
    constructor(props){
        super(props);
        this.state = {
          orderType:'start'
        }
        // console.log('同级传递',props);
        //用父亲为中介的有一个问题：在各个组件中的 componentDidUpdate 方法均被触发。
        //使用观察者模式(发布订阅的方式) 
        //eventProxy，模块引入 npm i react-eventproxy
        //  有4个方法：on(触发订阅的事件),one(只触发一次订阅的事件),trigger(订阅某一个事件) ,off(解除所有订阅的某个事件的所有函数)
        this.componentDidMount = () =>{
          eventProxy.on('orderType', (orderType) => {
            console.log('proxy',orderType)
            this.setState({
              orderType
            });
          });
        }
        this.componentWillUnmount = () =>{//dom元素从页面中删除之前调用
          eventProxy.off('orderType')//出错，在未加载之前先取消订阅
        }
        this.componentDidUpdate = () => {
          console.log('Child_2 update');
        }
      
    }

    render (){
        return(<div>{this.props.location.state.orderType},{this.state.orderType}</div>)
        // <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />)
    }
}
module.exports = MyTrip;