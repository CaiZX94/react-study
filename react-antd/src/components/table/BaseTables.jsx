import React, { Component } from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom/BreadcrumbCustom';

class BaseTables extends Component{
  render(){
    return (
      <div>
        <BreadcrumbCustom first='表格' second='基础表格'/>
      </div>
    )
  }
}

export default BaseTables