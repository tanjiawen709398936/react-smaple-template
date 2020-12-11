import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const App = lazy(()=>import('@components/App'));
export default () => ( 
    <Router>
        <Suspense fallback={null}>
            <Switch>
                <Route path="/main" component={App} />
                <Route component={NoMatch} />
            </Switch>
        </Suspense>
    </Router>
)