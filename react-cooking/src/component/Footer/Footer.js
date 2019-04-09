import React, { Component } from 'react';
import { render } from 'react-dom'
import {BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
require ('./Footer.scss')


class Footer extends Component {
  render() {
    return (
      <div className="Footer"> 
        <ul className="NavBar">
          <li>
            <NavLink to="/" exact>
              <i className='icon iconfont icon-ic_a-comments_ty'></i>
              <div>教程</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/circle">
              <i className='icon iconfont icon-shenpiqingshi-biaoqing'></i>
              <div>烘焙圈</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/mall" >
              <i className='icon iconfont icon-ic_a-px_living'></i>
              <div>商城</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/my">
              <i className='icon iconfont icon-ic_a-px_mine_off'></i>
              <div>我的</div>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Footer;