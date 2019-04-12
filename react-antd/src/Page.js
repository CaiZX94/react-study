import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'

import App from './App';
import Login from './view/login/login';
import NotFound from './view/NotFound/NotFound';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" push />} />        
      <Route path="/app" component={App}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/404" component={NotFound}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </Router>
)