import React from 'react';
import './skills.css';
//import images
import ajax from '../../../images/logo/ajax.png';
import js from '../../../images/logo/js.png';
import css from '../../../images/logo/css.png';
import mern from '../../../images/logo/mern.png';
import express from '../../../images/logo/express.png';
import mongo from '../../../images/logo/mongo.png';
import git from '../../../images/logo/git.png';
import node from '../../../images/logo/nodejs.png';
import html from '../../../images/logo/html.png';
import react from '../../../images/logo/react.png';
import jquery from '../../../images/logo/jquery.png';
import redux from '../../../images/logo/redux.png';


const Skills = () => (    
    <div className="skills-container-sk">
        <div className="skills-images-container">
            <img src ={react} />
            <img src ={redux} />
            <img src ={html} />
            <img src ={css} />
            <img src ={js} />
            <img src ={jquery} />
            <img src ={node} />
            <img src ={express} />
            <img src ={mongo} />
            <img src ={ajax} className="img-ajax" />
            <img src ={git} />
            <img src ={mern} />
        </div>
        <div className="skills-text-container">
            <p>React- create user interfaces</p>
            <p>Redux- control of the application state</p>
            <p>HTML5- create a website structure</p>
            <p>CSS+SASS- application styling</p>
            <p>Javascript ES6 - basic programming language</p>
            <p>AJAX- use + api</p>
            <p>Node.js- coding on the backend side</p>
            <p>Express- use framework</p>
            <p>Work in progress...</p>
        </div>
    </div>                          
);

export default Skills;