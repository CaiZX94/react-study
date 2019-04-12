import React, { Component } from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom/BreadcrumbCustom';

class BaseForms extends Component{
  render(){
    return (
      <div>
        <BreadcrumbCustom first='表单' second='基础表单'/>
      </div>
    )
  }
}

export default BaseForms