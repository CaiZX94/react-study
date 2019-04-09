import React, { Component } from 'react';
require('./TabBar.scss')

const bar={
  display: 'flex',
}

const barItem={
  position: 'relative',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  height: '52px',
  borderBottom: '1px solid #f1f1f1',
  background:'#fff'
}

// const barContent={
//   display:'inline-block',
//   width:'33%',
//   height:'300px',
//   background:'#f3f3f3',
// }

const showContent={
  display:'inline-block',
  width:'33%',
  height:'300px',
  background:'#fff',
  display:'inline-block'
}

const hideContent={
  display:'inline-block',
  width:'33%',
  height:'300px',
  background:'#fff',
  display:'none'
}

class TabBar extends Component {

  constructor(){
    super()
    this.state={
      currentIndex: 0
    }
  }

  getTitleItemCssClasses(index){
    return index === this.state.currentIndex ? "barItem barActive" : "barItem";
  }

  getContentItemCssClasses(index){
    return index === this.state.currentIndex ? "showContent" : "hideContent";
  }

  render(){
    let that = this;
    let {baseWidth} = this.props;
    let childrenLength = this.props.children.length;
    return (
      <div style={{overflow:'hidden'}}>
        <nav className="tabBar" style={bar}>
          {React.Children.map(this.props.children, (ele, index) => {
            return (<div onClick={() => {this.setState({currentIndex: index})}} style={barItem} className={that.getTitleItemCssClasses(index)}>{ele.props.tab}</div>)
          })}
        </nav>
        <div className="tabContent" style={{width:100*childrenLength + 100 + '%'}}>
          {React.Children.map(this.props.children, (ele, index) => {
            return (<div className='barContent'>{ele}</div>)
          })}  
        </div>
      </div>
    )
  }
}

export default TabBar;