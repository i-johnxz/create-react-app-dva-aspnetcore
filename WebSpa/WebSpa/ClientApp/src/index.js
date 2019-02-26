import React from 'react';
import * as serviceWorker from './serviceWorker';
import dva from 'dva';
import createHistory from 'history/createBrowserHistory'

import router from './router'

const app = dva({
    history: createHistory({
        basename: '/'
    })
});


app.router(router);

app.start('#root')

serviceWorker.unregister();


/*
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>,
  rootElement);

registerServiceWorker();
*/
