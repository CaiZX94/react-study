import React,{Component,Fragment} from 'react';
import ListItem from './ListItem';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state={
            inputValue:'',
            list:[],
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitBtn = this.submitBtn.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true
    }

    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    render(){
        console.log('parent render')
        return (
            // 1、Fragment:占位符  页面不会显示该标签； 2、最外层需要包一层标签  3、this指向  使用bind(this) 修改函数作用域
            <Fragment>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
                <button onClick={this.submitBtn}>提交</button>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <div>
                                    {/* 父组件向子组件传递数据，通过属性的方式 ，既可以传递数据，也可以传递方法。子组件调用父组件的方法，要给该方法绑定this，让其指向父组件，否则在子组件中调用会报错，因为子组件中是没有改方法*/}
                                    <ListItem content={item} index={index} handleDelete={this.handleDelete}/>
                                    {/*<li key={index} onClick={this.handleDelete.bind(this,index)}>{item}</li>*/}
                                </div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    handleInputChange(e){
        this.setState({ //setState()  修改state里面的数据
            inputValue:e.target.value,
        })
    }

    submitBtn(){
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue:''
        })
    }

    handleDelete(e,index){
        const list = [...this.state.list];
        list.splice(index,1)
        this.setState({
            list:list,
        })
    }
}

export default TodoList;