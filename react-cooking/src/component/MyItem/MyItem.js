import React, { Component } from 'react';
require ('./MyItem.scss')

const icon={
  fontSize: '25px',
  color: 'rgba(255, 166, 166,1)',
  verticalAlign: 'middle',
}

class MyItem extends Component {
  render() {
    return (
      <div className="MyItem">
        <div className='item' >
          <i className={this.props.icon} style={icon}></i>
          <p className='itemName'>{this.props.itemName}</p>
          <i className='rightArrow iconfont icon-icon-a-common_arrow-'></i>
        </div>
      </div>
    );
  }
}

export default MyItem;