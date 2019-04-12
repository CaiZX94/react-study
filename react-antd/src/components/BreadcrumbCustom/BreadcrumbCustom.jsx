import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';


class BreadcrumbCustom extends Component{
  render(){
    return (
      <Breadcrumb style={{paddingBottom:'20px'}}>
        <Breadcrumb.Item><Link to="/app/index/index">首页</Link></Breadcrumb.Item>
        <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item>
        <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item>
      </Breadcrumb>
    )
  }
}

export default BreadcrumbCustom