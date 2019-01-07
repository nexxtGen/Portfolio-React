import React, { Component } from 'react';
import { connect } from 'react-redux';
import myPhoto from '../../images/myPhoto.jpg';
import StrongPersonal from './components/strong-personal';
import WeakPersonal from './components/weak-personal';
import "./personal-data.css";

class PersonalData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strongWeak: 'strong',
        }              
    }     

    handlerStrong()  {
        console.log('strongWeak:' , this.state.strongWeak);
        return this.setState({ strongWeak: 'strong'});
    }
    handlerWeak() {
        console.log('strongWeak:' , this.state.strongWeak);
        return this.setState({ strongWeak: 'weak'});        
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
                        <div className="column-data-30">                            
                            <div className="personal-second-row-first-column">   
                                <div className="strong-weak-handler-container">
                                    <button onClick={() =>this.handlerStrong()}>Silne strony</button>
                                    <button onClick={() => this.handlerWeak()}>Słabe strony</button>
                                </div>
                                { this.state.strongWeak === 'strong' ? <StrongPersonal/> : <WeakPersonal/> }
                            </div>
                        </div>
                        <div className="column-data-70">
                           <div className="personal-second-row-second-column">
                                <div className="personal-second-row-first-column">   
                                    <div className="personal-skills-buttons">
                                        <button onClick={() =>this.handlerStrong()}>Umiejętności</button>
                                        <button onClick={() => this.handlerWeak()}>Pozostałe umiejętnosci</button>
                                        <button onClick={() => this.handlerWeak()}>Zainteresowania</button>
                                    </div>
                                    { this.state.strongWeak === 'strong' ? <StrongPersonal/> : <WeakPersonal/> }
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