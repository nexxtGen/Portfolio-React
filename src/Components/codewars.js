import React from 'react';
import { connect } from 'react-redux';
import './contact.css';

const Codewars = (props) => (
    <div className={"container " + props.appWallpaper}>
        <div className="app-container">
            <div className="div-container1">
                <div className="div1-homee">
                    <p className="div1-home-p">JS methods <span className="div1-home-span">to remember:</span></p>
                    <p className="home-welcome-text-journey">
                        Array.prototype.splice(), Array.prototype.slice() , Array.prototype.indexOf() , Array.prototype.lastIndexOf() 
                    </p>
                    <p className="home-welcome-text-journey">
                        
                    </p>
                    <p><a href="https://www.nickang.com/javascript-find-smallest-number-in-array/" target="_blank">Find the smallest number in an array with JavaScript(first)</a></p>                                       
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

export default connect(mapStateToProps)(Codewars);