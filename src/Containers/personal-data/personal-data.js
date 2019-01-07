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
                <div className="app-container direction-flex-column">
                    <div className="row-personal-data">
                        <div className="welcome-in-my-data">
                            <p className="div1-home-p">informaje <span className="div1-home-span">o mnie</span></p>                                            
                            <div className="field-personal-container animation-in">                        
                                <div className="first-module-container">
                                    <div>
                                        <img className="my-photo" src={myPhoto}></img>
                                    </div>
                                    <div className="kamil-data-container">
                                        <div className="kamil-data">
                                            <p>Imię: Kamil</p>
                                            <p>Nazwisko: Sz</p>
                                            <p>Profesja: Web Developer</p>
                                            <p>Cel: Fullstack JS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-personal-data">
                        <div className="column-data-50">                            
                            <div className="personal-second-row-first-column">   
                                <div className="strong-weak-handler-container">
                                    <button>Silne strony</button>
                                    <button>Słabe strony</button>
                                </div>
                                <div className="strong-weak">
                                    <div className="sr-fc-lc">
                                        <p>Silne strony</p>
                                    </div>
                                    <div className="sr-fc-rc">
                                        <p>Kreatywność</p>
                                        <p>Duża samodzielność przy rozwiązywaniu problemów z kodem</p>
                                        <p>Adaptacja</p>
                                        <p>Odpowiedzialnosć za swoje działania</p>
                                        <p>Ugodowość</p>
                                        <p>Otwartość</p>
                                        <p>Umiejętnosć przyznawania się do własnych błędów</p>
                                        <p>Wysoka empatia</p>
                                        <p>Ambicja</p>
                                    </div>
                                </div>                                                             
                            </div>
                        </div>
                        <div className="column-data-50">
                           <div className="personal-second-row-second-column">

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