import React, { Component, Suspense } from 'react';
import {routerRedux,Route,Switch} from "dva/router";
import LayoutComponent from './components/Layout';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";


const { ConnectedRouter } = routerRedux

function RouterConfig({history}) {
    return (
        <ConnectedRouter history={history}>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <LayoutComponent>
                        <Route path='/' exact component={Home}/>
                        <Route path='/counter' component={Counter}/>
                        <Route path='/fetch-data' component={FetchData}/>
                    </LayoutComponent>
                </Switch>
            </Suspense>
        </ConnectedRouter>
    )
}

export default RouterConfig;
