import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import dva from 'dva';
import createHistory from 'history/createBrowserHistory'

import router from './router'

// 1. Initialize
const app = dva({
    history: createHistory({
        basename: '/'
    })
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(router);

// 5. Start
app.start('#root');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
