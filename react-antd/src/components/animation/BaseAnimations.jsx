import React, { Component } from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom/BreadcrumbCustom';

class BaseAnimations extends Component{
  render(){
    return (
      <div>
        <BreadcrumbCustom first='动画' second='基础动画'/>
      </div>
    )
  }
}

export default BaseAnimations