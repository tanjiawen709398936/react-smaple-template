import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// import WaiterLoad from '@components/public/WaiterLoad';  // 加载等待模块
import config from '@configs';
import {RouteWithSubRoutes} from './handleSubRoute';
import Home from '@pages/home';
import NoMatch from '@components/NoMatch';
import {Spin} from 'antd';

export default class MRouter extends React.Component{
    render(){
        return (
            <Suspense fallback={<Spin />}>
                <Switch>
                    <Route path="/main/home" component={Home} />
                    {config.map(r => {
                      return r.subs.map(ele => {
                        return ele.subs.map(key => RouteWithSubRoutes(key))
                      })
                    } )}
                    <Redirect from="/main" to={`/main/home`} />
                    <Route component={NoMatch} />
                </Switch>
            </Suspense>
        )
    }
}