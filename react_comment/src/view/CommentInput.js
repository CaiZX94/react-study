import React,{Component} from 'react';

class CommentInput extends  Component{
  
  constructor(){
    super()
    this.state={
      username:'',
      content:'',
    }
  }

  // 加载
  componentWillMount(){
    if(localStorage.getItem('username')){
      let username = JSON.parse(localStorage.getItem('username'));
      this.setState({username:username})
    }
  }

  // 获取输入框数据
  handleInputChange(e){
    this.setState({
      username:e.target.value,
    })
  }

  // 获取文本域数据
  handleTextChange(e){
    this.setState({
      content:e.target.value,
    })
  }

  // 提交
  handleSubmit(){
    if(!this.state.username) return alert('用户名不能为空')
    if(!this.state.content) return alert('评论内容不能为空')
    if(this.props.onSubmit){
      // const {username,content,createdTime} = this.state;
      this.props.onSubmit({
        username:this.state.username,
        content:this.state.content,
        createdTime:+new Date()   // +new.Date()  === new.Date.getTime() ，省略写法
      }) //子组件如何向父组件传递数据？ 父组件可以通过props给子组件传入一个回调函数onSubmit，当handleSubmit被触发时，子组件调用props中的回调函数，并将state传入给该函数
    }
    this.setState({ content:''})
    localStorage.setItem('username',JSON.stringify(this.state.username))
  }

  // 渲染
  render(){
    return (
      <div>
        <div className="inputWrap">
          <div>
            <span className="label">用户名：</span>
            <input type="text" className="input" value={this.state.username} onChange={this.handleInputChange.bind(this)}/>
          </div>
          <div>
            <span className="label">评论内容：</span>
            <textarea className="textarea" value={this.state.content} onChange={this.handleTextChange.bind(this)}></textarea>
          </div>
          <div className="add" onClick={this.handleSubmit.bind(this)}>发表</div>
        </div>
      </div>
      
    
    )
  }
}

export default CommentInput