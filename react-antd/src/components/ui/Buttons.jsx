import React, { Component } from 'react';
import BreadcrumbCustom from '../BreadcrumbCustom/BreadcrumbCustom';
import { Button } from 'antd';

const block ={
  display:'inline-block',
  margin:'30px',
  padding:'30px',
  width:'40%',
  boxSizing:'border-box',
  background:'#fff'
}

const button = {
  margin:'5px',
}

class Buttons extends Component{

  state = {
    loading: false,
    iconLoading: false,
  }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }

  render(){
    return (
      <div style={{width:'100%'}}>
        <BreadcrumbCustom first='UI' second='按钮'/>
        <div>
          <div style={block}>
            <Button type="primary" style={button}>Primary</Button>
            <Button style={button}>Default</Button>
            <Button type="dashed" style={button}>Dashed</Button>
            <Button type="danger" style={button}>Danger</Button>
          </div>
          <div style={block}>
            <Button type="primary" shape="circle" icon="search"  style={button}/>
            <Button type="primary" icon="search"  style={button}>Search</Button>
            <Button shape="circle" icon="search"  style={button}/>
            <Button icon="search"  style={button}>Search</Button>
            <br />
            <Button shape="circle" icon="search"  style={button}/>
            <Button icon="search"  style={button}>Search</Button>
            <Button type="dashed" shape="circle" icon="search"  style={button}/>
            <Button type="dashed" icon="search"  style={button}>Search</Button>
          </div>
          <div style={block}>
            <Button type="primary" block style={button}>Primary</Button>
            <Button block style={button}>Default</Button>
            <Button type="dashed" block style={button}>Dashed</Button>
            <Button type="danger" block style={button}>Danger</Button>
          </div>
          <div style={block}>
            <Button type="primary" loading style={button}>
              Loading
            </Button>
            <Button type="primary" size="small" loading style={button}>
              Loading
            </Button>
            <br />
            <Button type="primary" loading={this.state.loading} onClick={this.enterLoading} style={button}>
              Click me!
            </Button>
            <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading} style={button}>
              Click me!
            </Button>
            <br />
            <Button shape="circle" loading style={button}/>
            <Button type="primary" shape="circle" loading style={button}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Buttons