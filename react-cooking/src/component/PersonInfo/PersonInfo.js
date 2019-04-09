import React, { Component } from 'react';
require ('./PersonInfo.scss')

class PersonInfo extends Component {
  render() {
    return (
      <div className="PersonInfo">
        <div className="header">
          <img src={require('../../assets/image/user_center_bg.png')} className="headPic" alt=""/>
          <div className='info'>
            <p className='nickName'>{this.props.nickName}</p>
            <p className='label'>{this.props.label}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonInfo;