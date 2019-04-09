import React, { Component } from 'react';
import  Header from '../../component/Header/Header';
import  Footer from '../../component/Footer/Footer';
import  TabBar from '../../component/TabBar/TabBar';
require('./circle.scss')

class Circle extends Component {
  render() {
    return (
      <div className="Circle">
        <Header title="烘焙圈"></Header>
        <div className="content">
          <TabBar>
            <div tab="最新" id="1">最新内容</div>
            <div tab="热门" id="2">热门内容</div>
            <div tab="关注" id="3">关注内容</div>
          </TabBar>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Circle;