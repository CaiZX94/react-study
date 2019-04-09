import React, { Component } from 'react';
import {BrowserRouter as NavLink,Link} from 'react-router-dom';
import  Header from '../../component/Header/Header';
import  Footer from '../../component/Footer/Footer';
import  PersonInfo from '../../component/PersonInfo/PersonInfo';
import  MyItem from '../../component/MyItem/MyItem';

class My extends Component {

  constructor(){
    super();
    this.state={
      itemData:[
        {name:'我的订单',icon:'iconfont icon-ic_a-px_task_off',path:'/myOrder'},
        {name:'购物车',icon:'iconfont icon-ic_a-px_living',path:'/gwc'},
        {name:'收货地址',icon:'iconfont icon-shenpiqingshi-dingwei',path:'/address'},
        {name:'我的活动',icon:'iconfont icon-ic_common_score_off',path:'/myActivity'},
        {name:'会员俱乐部',icon:'iconfont icon-shenpiqingshi-biaoqing',path:'/club'},
        {name:'设置',icon:'iconfont icon-icon_a-common_edit',path:'/setting'},
      ]
    }
  }
  

  render() {
    return (
      <div className="My">
        <Header title="我的"></Header>
        <div className="content">
          <PersonInfo nickName={'星空物语'} label={'2019 努力前行'}/>
          {
            this.state.itemData.map((item,index)=>{
              return (
                <Link to={item.path} key={index}>
                  <MyItem itemName={item.name} icon={item.icon} key={index}/>
                </Link>
              )
            })
          }
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default My;