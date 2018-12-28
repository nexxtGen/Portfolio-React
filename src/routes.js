import React from 'react';
import { Route, IndexRoute } from 'react-router';
//import components
import Header from './Containers/header';
import Home from './Components/home';
import Contact from './Components/contact';
import NotFound from './Components/not-found';



export default (
    <Route path="/" component={Header}>
        <IndexRoute component={Home}/>   
        <Route path='contact' component={Contact}/>     
        <Route path='*' component={NotFound}/>
    </Route>
);