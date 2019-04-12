import React ,{ Component} from 'react';
import "antd/dist/antd.css";
import {Input,Button,List} from 'antd';
import store from './store'



class TodoList2 extends Component{

    constructor(props){
        super(props);
        this.state = store.getState(); //getState获取store里面存放的数据
        console.log(this.state)
    }

    // 增加一行注释
    render(){
        return(
            <div style={{margin:10}}>
                <div>
                    <Input placeholder='text info' value={this.state.value} style={{width:300,marginRight:10}}/>
                    <Button type='primary'>提交</Button>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                        style={{marginTop:5,width:300}}
                        />
                </div>
            </div>
        )
    }

}

export default TodoList2;