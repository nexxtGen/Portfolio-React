import React from 'react';
import { connect } from 'react-redux';
import './contact.css';

const Contact = (props) => (
    <div className={"container " + props.appWallpaper}>
        <div className="app-container">
            <div className="div-container1">
                <div className="div1-home">
                    <p className="div1-home-p">contact <span className="div1-home-span">details:</span></p>
                    <p className="home-welcome-text-journey">E-mail: kszczypior1@gmail.com</p>
                    <p className="home-welcome-text-journey">Phone: +48 511-511-085</p>
                    <p className="home-welcome-text-journey">Phone-2: +48 667-776-675</p>
                    <p className="home-welcome-text-journey">Repository: <a href="https://github.com/nexxtgen" className="contact-link-git">https://github.com/nexxtgen</a></p>                           
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

export default connect(mapStateToProps)(Contact);