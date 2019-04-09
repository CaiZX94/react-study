import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Index from './view/index/index.js'
import Circle from './view/circle/circle.js'
import Mall from './view/mall/mall.js'
import My from './view/my/my.js'

import Type from './view/index/type.js'
import Detail from './view/detail/detail.js'

import MyOrder from './view/my/myOrder/myOrder.js'
import Gwc from './view/my/gwc/gwc.js'
import Address from './view/my/address/address.js'
import MyActivity from './view/my/myActivity/myActivity.js'
import Club from './view/my/club/club.js'
import Setting from './view/my/setting/setting.js'


require ('./style/style.scss')
require ('./assets/font/iconfont.css')

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Index}></Route>
        <Route path="/circle" component={Circle}></Route>
        <Route path="/mall" component={Mall}></Route>
        <Route path="/my" component={My}></Route>
        <Route path="/type/:typeName" component={Type}></Route>
        <Route path="/detail/:id" component={Detail}></Route>
        <Route path="/myOrder" component={MyOrder}></Route>
        <Route path="/gwc" component={Gwc}></Route>
        <Route path="/address" component={Address}></Route>
        <Route path="/myActivity" component={MyActivity}></Route>
        <Route path="/club" component={Club}></Route>
        <Route path="/setting" component={Setting}></Route>
      </Router>
    );
  }
}

export default App;
