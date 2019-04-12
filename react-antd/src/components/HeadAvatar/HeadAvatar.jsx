
import React, { Component } from 'react';
import { Menu, Icon,Avatar, Badge } from 'antd';
import './HeadAvatar.scss'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class HeadAvatar extends Component{

  state = {
    current: 'setting:1',//当前导航
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render(){
    return (
      <div>
        <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        >
          <SubMenu 
            title={
              <span>
                <Avatar src={require("../../assets/images/avatar.jpg")} shape="circle" icon="user" size="large" />
              </span>
            }
          >
            <MenuItemGroup title="用户中心">
              <Menu.Item key="setting:1">个人信息</Menu.Item>
              <Menu.Item key="setting:2">退出登录</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="设置中心">
              <Menu.Item key="setting:3">个人设置</Menu.Item>
              <Menu.Item key="setting:4">系统设置</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="bell">
            <Badge dot>
              <Icon type="bell" style={{color:'#fff'}}/>
            </Badge>
          </Menu.Item>
          <Menu.Item key="userName">
            <span style={{color:'#fff'}}>{this.props.userName}</span>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default HeadAvatar