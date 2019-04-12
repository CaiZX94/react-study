import React, { Component } from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom/BreadcrumbCustom';

class Echarts extends Component{
  render(){
    return (
      <div>
        <BreadcrumbCustom first='图表' second='echarts'/>
      </div>
    )
  }
}

export default Echarts