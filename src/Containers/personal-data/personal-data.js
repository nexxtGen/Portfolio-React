import React, { Component } from 'react';
import { connect } from 'react-redux';
import myPhoto from '../../images/myPhoto.jpg';
import "./personal-data.css";

class PersonalData extends Component {
    constructor(props) {
        super(props);        
    }     

    render() {
        return (
            <div className={"container " + this.props.appWallpaper}>
                <div className="app-container">
                    <div className="welcome-in-portfolio">
                        <p className="div1-home-p">informaje <span className="div1-home-span">o mnie</span></p>                                            
                        <div className="field-personal-container animation-in">                        
                            <div className="first-module-container">
                                <div>
                                    <img className="my-photo" src={myPhoto}></img>
                                </div>
                                <div className="kamil-data-container">
                                    <div className="kamil-data">
                                        <p>Name: Kamil</p>
                                        <p>Surname: Sz</p>
                                        <p>Profession: Web Developer</p>
                                        <p>Target: Fullstack JS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        appWallpaper: store.appReducer.appWallpaper,
    };
};

export default connect(mapStateToProps)(PersonalData);