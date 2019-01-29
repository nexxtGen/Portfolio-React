import React from 'react';
import { Route, IndexRoute } from 'react-router';
//import components
import App from './Containers/App';
import Home from './Components/home';
import Contact from './Components/contact';
import Codewars from './Components/codewars';
import PersonalData from './Containers/personal-data/personal-data';
import NotFound from './Components/not-found';
//Portfolio modules
import Portfolio from './Portfolio/portfolio';
import Landing1 from './Portfolio/landing-page-1/landing-page-1';
import Landing2 from './Portfolio/landing-page-2/landing-page-2';
import ToDo from './Portfolio/to-do-app/to-do-app';
import Stopwatch from './Portfolio/stopwatch/stopwatch';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>   
        <Route path='contact' component={Contact}/> 
        <Route path='personalData' component={PersonalData}/>
        <Route path='codewars' component={Codewars}/> 
        <Route path='portfolio' >  
            <IndexRoute component={Portfolio}/>
            <Route path='landing-1' component={Landing1}/>
            <Route path='landing-2' component={Landing2}/>
            <Route path='toDo' component={ToDo}/>
            <Route path='stopwatch' component={Stopwatch}/>       
        </Route>
        <Route path='*' component={NotFound}/>
    </Route>
);