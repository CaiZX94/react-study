import React, { Component } from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom/BreadcrumbCustom';

class Reminds extends Component{
  render(){
    return (
      <div>
        <BreadcrumbCustom first='UI' second='通知提醒框'/>
      </div>
    )
  }
}

export default Reminds