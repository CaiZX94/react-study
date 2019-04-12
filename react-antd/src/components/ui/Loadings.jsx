import React, { Component } from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom/BreadcrumbCustom';
import { Card,Spin,Icon ,Switch } from 'antd';

class Loadings extends Component{

  state = { loading: false }

  toggle = (value) => {
    this.setState({ loading: value });
  }

  render(){
    return (
      <div>
        <BreadcrumbCustom first='UI' second='加载中'/>
        <div>
          <Card title="普通用法" bordered={false} style={{ width: '100%',marginBottom:'20px'}}>
            <Spin size='large'></Spin>
          </Card>
          <Card title="自定义加载图标" bordered={false} style={{ width: '100%',marginBottom:'20px'}}>
            <Icon type="loading" style={{ fontSize: 24 }} spin />
          </Card>
          <Card title="自定义文案描述" bordered={false} style={{ width: '100%',marginBottom:'20px'}}>
            <Spin tip="正在加载中..."></Spin>
          </Card>
          <Card title="开关式加载" bordered={false} style={{ width: '100%',marginBottom:'20px'}}>
            <div>点击开关可显示加载loading</div>
            <Spin spinning={this.state.loading}></Spin>
            <div style={{ marginTop: 16 }}>
              Loading state：<Switch checked={this.state.loading} onChange={this.toggle} />
            </div>
          </Card>
          
        </div>
      </div>
    )
  }
}

export default Loadings