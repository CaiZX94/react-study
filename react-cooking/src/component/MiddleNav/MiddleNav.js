import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink,Link} from 'react-router-dom';

require('./MiddleNav.scss')

class MiddleNav extends Component {
  render() {
    return (
      <div className="MiddleNav">
        <ul className="NavList">
            <li>
              <Link to='/type/饼干'>
                <span className="navIcon bg"></span>
                <p>饼干</p>
              </Link>
            </li>
            <li>
              <Link to='/type/面包'>
                <span className="navIcon mb"></span>
                <p>面包</p>
              </Link>
            </li>
            <li>
              <Link to='/type/茶点'>
                <span className="navIcon cd"></span>
                <p>茶点</p>
              </Link>
            </li>
            <li>
              <Link to='/type/蛋糕'>
                <span className="navIcon dg"></span>
                <p>蛋糕</p>
              </Link>
            </li>
          </ul>
      </div>
    );
  }
}

export default MiddleNav;