import React, { Component } from 'react';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
import './login.scss';

class Login extends Component{

  // componentDidUpdate(prevProps){  //React 16.3+弃用componentWillReceiveProps
  //   console.log(prevProps);
  // }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log( values);
        if(values.userName === 'admin'){
          if(values.password === 'admin'){
            console.log('登录成功',this.props)
            this.props.history.push('/app/index/Index');
            localStorage.setItem('user',JSON.stringify(values))
          }
        }
      }
    });
  }

  render(){
      const { getFieldDecorator } = this.props.form;
      return (
        <div className="login">
          <div className="mask"></div>
          <div className="loginFrom">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: '请输入用户名！' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码！' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: false,
                })(
                  <Checkbox>记住我</Checkbox>
                )}
                <a className="login-form-forgot" href="">忘记密码？</a>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
                <a href="">去注册</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      )
  }
}

const LoginFrom = Form.create({ name: 'normal_login' })(Login);


export default LoginFrom