import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import SiderMenu from './SiderMenu';
import { Layout} from 'antd';
import routes from '../routes/config';

const { Sider } = Layout;

class SiderCustom extends Component{

  state = {
    mode: 'inline',
    openKey: '',
    selectedKey: '',
    firstHide: true, // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
  };

  menuClick = e => {
    this.setState({
        selectedKey: e.key
    });
    const { popoverHide } = this.props; // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
    popoverHide && popoverHide();
  };

  openMenu = v => {
      this.setState({
          openKey: v[v.length - 1],
          firstHide: false,
      })
  };

  render(){
    const { selectedKey, openKey, firstHide, collapsed } = this.state;
    return (
      <Sider>
        <SiderMenu 
          menus={routes.menus} 
          onClick={this.menuClick}
          mode="inline"
          selectedKeys={[selectedKey]}
          openKeys={firstHide ? null : [openKey]}
          onOpenChange={this.openMenu}
        />
      </Sider>
    )
  }
}

export default SiderCustom