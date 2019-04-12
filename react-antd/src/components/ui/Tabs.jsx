import React, { Component } from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom/BreadcrumbCustom';

class Tabs extends Component{
  render(){
    return (
      <div>
        <BreadcrumbCustom first='UI' second='标签页'/>
      </div>
    )
  }
}

export default Tabs