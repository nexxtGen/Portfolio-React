import React from 'react';
import { connect } from 'react-redux';
import './home.css';

const Home = (props) => (    
    <div className={"container " + props.appWallpaper}>
        <div className="app-container">
            <div className="div-container1">
                <div className="div1-home">
                    <p className="div1-home-p margin-bottom-p-home">Hello, I'm<span className="div1-home-span-green"> Kamil Sz</span></p>
                    <p className="div1-home-p-border">I'm <span className="div1-home-span"> front-end developer</span></p>
                    <p className="home-welcome-text-journey">I started the adventure as a front-end developer in the middle of 2018. My first step was to create simple static pages. 
                    Every day I got to know new technologies and opportunities offered by web design and programming. It has become my passion and the direction of my development. 
                    I am currently an enthusiast of ReactJS, who wants to grow in the direction of Fullstack JS Developer. I invite you to look at my portfolio.</p>                    
                </div>                    
            </div> 
            <div className="div-container1">
                <div className="div1-home">                                    
                </div>                    
            </div>           
        </div>
    </div>    
);

const mapStateToProps = function (store) {
    return {
        appWallpaper: store.appReducer.appWallpaper,
    };
};

export default connect(mapStateToProps)(Home);