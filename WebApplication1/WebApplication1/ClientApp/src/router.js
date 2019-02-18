import React, { Suspense, lazy } from 'react';
import { routerRedux, Route, Switch } from 'dva/router';
import IndexPage from './App';
import Test from  './Test'

// const IndexPage = lazy(() => import('./App'))
// const Test = lazy(() => import('./Test'))

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history }) {
    return (
        <ConnectedRouter history={history}>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/" exact component={IndexPage} />
                    <Route path="/test" component={Test} />
                </Switch>
            </Suspense>
        </ConnectedRouter>
    );
}

export default RouterConfig;
