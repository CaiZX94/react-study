import React, { Component } from 'react';
import  Header from '../../component/Header/Header';

import Axios from '../../api/index'

require('./detail.scss')

const appkey = '9d1f6ec2fd2463f7'

class Detail extends Component {

  constructor(){
    super()
    this.state={
      detail:{},
    }
  }

  componentDidMount() {
    const {id} = this.props.match.params;
    this.getDetail(id);
  }

  // 获取详情
  getDetail = (id) => {
    Axios
      .jsonp({
        url: `http://api.jisuapi.com/recipe/detail?id=${id}&appkey=${appkey}`
      })
      .then(res => {
        if (res.status === '0') {
          this.setState({
            detail:res.result
          })
          console.log(this.state.detail)
        }
      })
  }

  render() {
    const {foodName} = this.props.location.state
    const detail = this.state.detail
    return (
      <div className="Detail">
        <Header title={foodName}></Header>
        <div className="content">
          <div className="head">
            <img src={detail.pic} alt="" className="pic"/>
            <div className="headInfo">
              <div className="name">
                <span>{detail.name}</span> 
              </div>
              <div className="info peoplenum">用餐人数：{detail.peoplenum}</div>
              <div className="info preparetime">准备时间：{detail.preparetime}</div>
              <div className="info cookingtime">制作时间：{detail.cookingtime}</div>
              <div className="info tag">所属标签：{detail.tag}</div>
            </div>
          </div>
          <div className="contentInfo">
           <div>{detail.content}</div> 
          </div>
          <div className="prepare">
            <h2 className="labelName">#食材准备</h2>
            <ul className="table">
              <li className="tabelHead">
                <p>用料</p>
                <p>用量</p>
                <p>类型</p>
              </li>
              {
                 detail.material&&detail.material.map((item,index)=>{
                  return (
                    <li key={index} className="tabelItem">
                      <p>{item.mname}</p>
                      <p>{item.amount}</p>
                      <p>{item.type==='0'?'辅料':'主料'}</p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="prepare">
            <h2 className="labelName">#烹饪方法</h2>
            <ul className="process">
              {
                detail.process&&detail.process.map((item,index)=>{
                  return (
                    <li key={index}>
                      <img src={item.pic} alt=""/>
                      <div className="processContent">
                        <p className="processNum">{index+1}</p>
                        <p>{item.pcontent}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;