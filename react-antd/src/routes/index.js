import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
// import queryString from 'query-string';
import Config from './config'
import AllComponents from '../components'

class Routes extends Component{
  render(){
    return (
      <Switch>
        {
          Object.keys(Config).map(key =>
            Config[key].map(item => {
              const route = r => {
                const Component = AllComponents[r.component];
                return (
                    <Route
                        key={r.key}
                        exact
                        path={r.key}
                        render={props => {
                            // 重新包装组件
                            const wrappedComponent = (
                                <DocumentTitle title={r.title}>
                                    <Component />
                                </DocumentTitle>
                            )
                            return  wrappedComponent
                            // return (
                            //   <DocumentTitle title={r.title}>
                            //     <Component />
                            //   </DocumentTitle>
                            // )
                        }}
                    />
                )
              }
              return item.component ? route(item) : item.subs.map(item => route(item));
            })  
          )
        }
        {/* <Route render={() => <Redirect to="/404" />} /> */}
      </Switch>
    )
  }
}

export default Routes