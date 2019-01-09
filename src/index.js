import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './Store';
import routes from './routes';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-132218599-1');
ReactGA.pageview('/');

render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}/>        
    </Provider>,
    document.getElementById('root')
);