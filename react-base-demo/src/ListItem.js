import React,{Component} from 'react';

class ListItem extends Component {
    constructor(props){npm 
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount(){
      console.log('child componentWillMount')
    }

    shouldComponentUpdate(){
      console.log('child shouldComponentUpdate')
      return false
    }

    render(){
      console.log('child render')
      return(
        // 父组件传递过来的数据
        <div onClick={this.handleClick}>{this.props.content}</div>
      )
    }

    componentWillUpdate(){
      console.log('child componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('child componentDidUpdate')
    }

    componentDidMount(){
      console.log('child componentDidMount')
    }

    componentWillUnmount(){
      console.log('child componentWillUnmount')
    }
    

    handleClick(e){
      // 调用父组件的方法
      this.props.handleDelete(this.props.index)
    }
}

export default ListItem;