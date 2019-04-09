import React, { Component } from 'react';
require('./Header.scss')

class Header extends Component {

  // 点击搜索图标
  handleSearch(){
    if(this.props.handleSearch){
      this.props.handleSearch({
        show:true
      })
    }
  }

  render() {
    return (
      <div className="Header">
        <i className="left_icon iconfont icon-ic_a-common_search" onClick={this.handleSearch.bind(this)}></i>
        <div className="title">{this.props.title}</div>
        <i className='right_icon iconfont icon-add'></i>
      </div>
    );
  }
}

export default Header;