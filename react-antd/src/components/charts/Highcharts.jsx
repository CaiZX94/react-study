import React, { Component } from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom/BreadcrumbCustom';

class Highcharts extends Component{
  render(){
    return (
      <div>
        <BreadcrumbCustom first='图表' second='highcharts'/>
      </div>
    )
  }
}

export default Highcharts