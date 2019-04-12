import React, { Component } from 'react';
import './NotFound.scss'

class NotFound extends Component{
  render(){
    return (
      <div className="notfind">
        <img src={require('../../assets/images/404.png')} alt=""/>
      </div>
    )
  }
}

export default NotFound