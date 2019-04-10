import React,{Component} from 'react';
import CommentItem from '../component/CommentItem';

class CommentList extends  Component{
  // 加上 defaultProps 防止 comments 不传入的情况：
  static defaultProps = {
    comments :[],
  }

  // 删除
  handleDelComment(index){
    if(this.props.onDel){
      this.props.onDel(index)   //把index传递给父组件
    }
  }

  // 渲染
  render(){
    return (
      <div>
        {
          this.props.comments.map((item,index)=>
            <CommentItem comment={item} key={index} index={index} onDelComment={this.handleDelComment.bind(this)}/>
          )
        }
      </div>
    )
  }
}

export default CommentList