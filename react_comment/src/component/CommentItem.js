import React,{Component} from 'react';
// import propTypes from 'prop-types'

class CommentItem extends  Component{

  // static propTypes={
  //   index: PropTypes.number
  // }

  constructor(){
    super()
    this.state={
      timeStr:'',
    }
  }

  // 加载
  componentWillMount(){
    this.updateTime()
    setInterval(()=>{ //每个5秒自动更新时间
      this.updateTime()
    },5000)
    
  }

  // 删除
  handleDel(){
    if(this.props.onDelComment){
      this.props.onDelComment(this.props.index) //接收父组件传递过来的index，然后调用父组件的传递过来的函数
    }
  }

  // 自动更新时间
  updateTime(){
    let time = (+Date.now() - this.props.comment.createdTime) / 1000  // 时间间隔 = （当前时间 - 创建时间）/ 1000 , 获得秒 
    this.setState({
      timeStr:time<60?`${Math.round(Math.max(time,1))}秒前`:time<3600?`${Math.round(time/60)}分钟前`:`${Math.round(time/60)}小时前`
    })
  }

  // 渲染
  render(){
    return (
      <div className="itemWrap">
        <span className="name">{this.props.comment.username}</span>：<span className="content">{this.props.comment.content}</span>
        <span className="del" onClick={this.handleDel.bind(this)}>删除</span>
        <span className="time">{this.state.timeStr}</span>  
      </div>
      
    )
  }
}

export default CommentItem