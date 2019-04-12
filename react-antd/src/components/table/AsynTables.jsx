import React, { Component } from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom/BreadcrumbCustom';

class AsynTables extends Component{
  render(){
    return (
      <div>
        <BreadcrumbCustom first='表格' second='异步表格'/>
      </div>
    )
  }
}

export default AsynTables