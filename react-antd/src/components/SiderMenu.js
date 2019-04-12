import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Menu, Icon } from 'antd';

// 只有一级菜单
const menuItem = item => (  // item.route 菜单单独跳转的路由
  <Menu.Item key={item.key}>
    <Link to={item.key}>
      {item.icon && <Icon type={item.icon} />}
      <span>{item.title}</span>
    </Link>
  </Menu.Item>
)

// 包含二级菜单的菜单
const subMenu = item =>(
  <Menu.SubMenu key={item.key}
    title={
      <span>
        {item.icon && <Icon type={item.icon} />}
        <span>{item.title}</span>
      </span>
    }
  >
    {item.subs.map( item => menuItem(item))}
  </Menu.SubMenu>
)


export default ({ menus, ...props }) => (
  <Menu {...props}>
      {menus && menus.map(item => 
          item.subs ? subMenu(item) : menuItem(item)
      )}
  </Menu>
);