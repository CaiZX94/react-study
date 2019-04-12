import React, { Component } from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom/BreadcrumbCustom';
import { Card , Icon } from 'antd';

const icon = {
  margin:'15px',
  fontSize:'30px',
}

class Icons extends Component{
  render(){
    return (
      <div>
        <BreadcrumbCustom first='UI' second='图标'/>
        <div>
        <Card title="普通用法" bordered={false} style={{ width: '100%',marginBottom:'20px'}}>
          <Icon type="home" style={icon}/>
          <Icon type="setting" theme="filled" style={icon}/>
          <Icon type="smile" theme="outlined" style={icon}/>
          <Icon type="sync" spin style={icon} style={icon}/>
          <Icon type="smile" rotate={180} style={icon}/>
          <Icon type="loading" style={icon}/>
        </Card>
        <Card title="双色/实心/描线图标" bordered={false} style={{ width: '100%',marginBottom:'20px'}}>
          <Icon type="smile" theme="twoTone" style={icon}/>
          <Icon type="bell" theme="twoTone" twoToneColor="#52c41a" style={icon}/>
          <Icon type="heart" theme="filled" twoToneColor="#eb2f96" style={icon}/>
          <Icon type="check-circle" theme="outlined" twoToneColor="#52c41a" style={icon}/>
        </Card>,
        </div>
      </div>
    )
  }
}

export default Icons