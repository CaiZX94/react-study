import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import DocumentTitle from 'react-document-title';
import SiderCustom from './components/SiderCustom';
import Avatar from './components/HeadAvatar/HeadAvatar';
import Routes from './routes';
import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content, Footer } = Layout;



class App extends Component {

  constructor(props){
    super(props)
    this.state={
      title:'首页'
    }
  }
  

  render() {
    const {title} = this.state;
    return (
      <div className="wrap">
        <DocumentTitle title={title}>
          <Layout>
            <Header style={{color:'#ccc'}}>
              <div className="logo">LOGO</div>
              <Avatar userName='你好，admin'></Avatar>
            </Header>
            <Layout>
              <SiderCustom></SiderCustom>
              <Content className="mainContent">
                <Routes></Routes>
              </Content>
            </Layout>
          </Layout>
        </DocumentTitle>
      </div>
    );
  }
}

export default App;
