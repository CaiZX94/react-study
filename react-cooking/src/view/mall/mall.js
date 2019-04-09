import React, { Component } from 'react';
import  Header from '../../component/Header/Header';
import  Footer from '../../component/Footer/Footer';

class Mall extends Component {
  render() {
    return (
      <div className="Mall">
        <Header title="商城"></Header>
        <div className="content">Mall</div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Mall;