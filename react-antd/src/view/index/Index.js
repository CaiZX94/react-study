import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';


const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;

class Index extends Component {

  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1'],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (
      <Layout className="layout">
        <Header style={{color:'#ccc'}}>
          <div className="logo">LOGO</div>
          {/* <Menu mode="horizontal" theme="dark" style={{lineHeight:'64px'}} defaultSelectedKeys={['1']}>
            <Menu.Item key="1">nav1</Menu.Item>
            <Menu.Item key="2">nav2</Menu.Item>
            <Menu.Item key="3">nav3</Menu.Item>
          </Menu> */}
        </Header>
        <Layout>
          {/* 侧边栏导航 */}
          <Sider style={{background:'#fff'}}>
            <Menu mode="inline" style={{width:'256'}} defaultSelectedKeys={['1']} openKeys={this.state.openKeys} onOpenChange={this.onOpenChange}>
              <SubMenu key="sub0" title={<span><Icon type="mail" />首页</span>}></SubMenu>
              <SubMenu key="sub1" title={<span><Icon type="mail" />UI</span>}>
                <Menu.Item key="1">按钮</Menu.Item>
                <Menu.Item key="2">图标</Menu.Item>
                <Menu.Item key="3">加载中</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="appstore" />动画</span>}>
                <Menu.Item key="4">基础动画</Menu.Item>
                <Menu.Item key="5">动画案例</Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" title={<span><Icon type="setting" />表格</span>}>
                <Menu.Item key="8">基础表格</Menu.Item>
                <Menu.Item key="9">高级表格</Menu.Item>
                <Menu.Item key="10">异步表格</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>

          {/* 内容 */}
          <Content style={{ padding: '0 30px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
          </Content>
        </Layout>

        <Footer style={{ textAlign: 'center' }}>
           @2019 Created by caizexin
        </Footer>

      </Layout>
    );
  }
}

export default Index;
