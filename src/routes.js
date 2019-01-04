import React from 'react';
import { Route, IndexRoute } from 'react-router';
//import components
import Header from './Containers/header';
import Home from './Components/home';
import Contact from './Components/contact';
import PersonalData from './Containers/personal-data/personal-data';
import NotFound from './Components/not-found';
//Portfolio modules
import Portfolio from './Portfolio/portfolio';
import Landing1 from './Portfolio/landing-page-1/landing-page-1';
import Landing2 from './Portfolio/landing-page-2/landing-page-2';
import ToDo from './Portfolio/to-do-app/to-do-app';

export default (
    <Route path="/" component={Header}>
        <IndexRoute component={Home}/>   
        <Route path='contact' component={Contact}/> 
        <Route path='personalData' component={PersonalData}/> 
        <Route path='portfolio' >  
            <IndexRoute component={Portfolio}/>
            <Route path='landing-1' component={Landing1}/>
            <Route path='landing-2' component={Landing2}/>
            <Route path='toDo' component={ToDo}/>       
        </Route>
        <Route path='*' component={NotFound}/>
    </Route>
);