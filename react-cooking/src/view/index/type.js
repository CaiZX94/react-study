import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink ,Link} from 'react-router-dom';

import  Header from '../../component/Header/Header';
import  Footer from '../../component/Footer/Footer';
import  MiddleNav from '../../component/MiddleNav/MiddleNav';
import  Card from '../../component/Card/Card';

import Axios from '../../api/index'

require('./type.scss')

const appkey = '9d1f6ec2fd2463f7'

class Mall extends Component {

  constructor(){
    super()
    this.state={
      cardList:[],
    }
  }

  // 这里有坑，点击其他tab时，不会列表更新内容。因为在当前页面点击导航是进行路由跳转，但是目前componentDidMount并没有执行

  // 挂载
  componentDidMount() {
    const {typeName} = this.props.match.params;
    this.getMenuList(typeName);
  }

  // 从接口获取菜单列表数据
  getMenuList = (typeName) => {
    const num = 20
    Axios
      .jsonp({
        url: `http://api.jisuapi.com/recipe/search?keyword=${typeName}&num=${num}&appkey=${appkey}`
      })
      .then(res => {
        if (res.status === '0') {
          let cardList = res.result.list
          this.setState({
            cardList: cardList
          })
        }
      })
  }

  render() {
    const {typeName} = this.props.match.params;
    return (
      <div className="Type">
        <Header title={typeName}></Header>
        <div className="middleNav">
          <MiddleNav/>
        </div>
        <div className="cardList">
            {
              this.state.cardList.map((item,index)=>{
                return (
                  <Link to={{pathname:`/detail/${item.classid}`,state:{foodName:item.name}}} key={index}>
                    <Card foodName={item.name} pic={item.pic} foodPro={item.content} key={index}/>
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

export default Mall;