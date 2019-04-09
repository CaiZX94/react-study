import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink ,Link} from 'react-router-dom';

import  Header from '../../component/Header/Header';
import  Search from '../../component/Search/Search';
import  Footer from '../../component/Footer/Footer';
import  Card from '../../component/Card/Card';
import  MiddleNav from '../../component/MiddleNav/MiddleNav';

import Axios from '../../api/index'

require('./index.scss')

const appkey = '9d1f6ec2fd2463f7'

class Index extends Component {

  constructor(){
    super()
    this.state={
      cardList:[],
      show:false,
    }
  }

  componentDidMount() {
    this.getMenuList('饼干');
  }

  // 获取首页饼干列表
  getMenuList = (keyword) => {
    const num = 20
    Axios
      .jsonp({
        url: `http://api.jisuapi.com/recipe/search?keyword=${keyword}&num=${num}&appkey=${appkey}`
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

  // 点击头部搜索图标
  showSearch(val){
    if(val.show){
      this.refs.searchBar.refs.search.style.display='block'
    }
  }

  // 获取列表数据并渲染
  getListData(val){
    this.setState({
      cardList: val.list
    })
  }

  render() {
    const show=this.state.show
    return (
      <div className="Index">
        <Header title="教程" handleSearch={this.showSearch.bind(this)}></Header>
        <Search showSearchBar={show} getListData={this.getListData.bind(this)} ref="searchBar"/>
        <div className="content" >
          {/*轮播图 */}
          <img src={require("../../assets/image/user_center_bg.png")} alt="" className="swiperImg"/>
          {/* 菜单导航 */}
          <MiddleNav/>
          {/* 卡片列表 */}
          <div className="cardList">
            {
              this.state.cardList.map((item,index)=>{
                return (
                  <Link to={{pathname:`/detail/${item.id}`,state:{foodName:item.name}}} key={index}>
                    <Card foodName={item.name} pic={item.pic} foodPro={item.content} key={index}/>
                    {/* <Card foodName={item.name} pic={<img src={this.props.pic} alt="" className="facePic"/>} foodPro={item.content} key={index}/> */}   {/*也可直接传递一个<img/>元素给子组件*/}
                  </Link>
                )
              })
            }
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Index;