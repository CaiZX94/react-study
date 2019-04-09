import React, { Component } from 'react';
import Axios from '../../api/index'

require('./Search.scss')

const appkey = '9d1f6ec2fd2463f7'

class Search extends Component {

  constructor(props){
    super();
    this.state={
      inputVal:'',
    }
  }

  // 搜索
  handleSearch(keyword){
    const num = 20
    Axios
      .jsonp({
        url: `http://api.jisuapi.com/recipe/search?keyword=${keyword}&num=${num}&appkey=${appkey}`
      })
      .then(res => {
        if (res.status === '0') {
          this.refs.search.style.display='none'
          this.setState({
            inputVal:''
          })
          if(this.props.getListData){ //子组件传值给父组件
            this.props.getListData({
              list:res.result.list
            })
          }
        }
      })
  }

  // 遮罩层
  handleMask(){
    if(!this.props.showSearchBar){
      this.refs.search.style.display='none'
    }
  }

  // 获取文本框的值
  handleChange(e){
    this.setState({
      inputVal: e.target.value
    })
  }

  render() {
    return (
      <div className="Search" ref="search">
          <div className="mask" onClick={this.handleMask.bind(this)}></div>
          <div className="searchBar">
            <input type="text" placeholder="搜索" value={this.state.inputVal} onChange={this.handleChange.bind(this)}/>
            <i className="searchIcon iconfont icon-ic_a-common_search" onClick={this.handleSearch.bind(this,this.state.inputVal)}></i>
          </div>
      </div>
    );
  }
}

export default Search;