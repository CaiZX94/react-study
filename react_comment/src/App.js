import React, { Component } from 'react';
import CommenInput from './view/CommentInput'
import CommenList from './view/CommentList'
import app from './app.css'

class App extends Component {

  constructor(){
    super()
    this.state={
      comments:[],
    }
  }

  // 加载
  componentWillMount(){
    if(localStorage.getItem('comments')){
      let com = JSON.parse(localStorage.getItem('comments'));
      this.setState({comments:com})
    }
  }

  // 提交
  handleSubmitComment(val){
    this.state.comments.push(val)
    this.setState({comments:this.state.comments})
    localStorage.setItem('comments',JSON.stringify(this.state.comments))
  }

  // 删除
  handleDelComment(index){
    this.state.comments.splice(index,1)
    this.setState({
      comments:this.state.comments
    })
    localStorage.setItem('comments',JSON.stringify(this.state.comments))
  }

  // 渲染
  render() {
    return (
      <div className="App">
        <CommenInput onSubmit={this.handleSubmitComment.bind(this)}/> {/*父组件如何接受子组件传过来的数据? 父组件通过传递一个方法onSubmit给子组件，子组件接收到父组件传递过去的props为onSubmit的方法后，处理好数据并通过onSubmit返回给父组件 */}
        <CommenList comments={this.state.comments} onDel={this.handleDelComment.bind(this)}/>
      </div>
    );
  }
}

export default App;
