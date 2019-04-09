import React, { Component } from 'react';
require('./Card.scss')

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img src={this.props.pic} alt="" className="facePic"/>
        {/* <img src={require("../../assets/image/user_center_bg.png")} alt="" className="facePic"/> */} {/*引用静态图片时的方式*/}
        {/* <div>{this.props.pic}</div> */}   {/*父组件直接传递一个<img/>元素过来*/}
        <p className="foodName">{this.props.foodName}</p>
        <p className="foodPro">{this.props.foodPro}</p>
      </div>
    );
  }
}

export default Card;