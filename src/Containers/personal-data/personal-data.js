import React, { Component } from 'react';
import { connect } from 'react-redux';
import myPhoto from '../../images/myPhoto.jpg';
import StrongPersonal from './components/strong-personal';
import WeakPersonal from './components/weak-personal';
import Skills from './components/skills';
import Other from './components/other';
import Passions from './components/passions';
import "./personal-data.css";

class PersonalData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            strongWeak: 'strong',
            moreInfo: 'skills'

        }              
    }     

    handlerStrong()  {
        console.log('strongWeak:' , this.state.strongWeak);
        return this.setState({ strongWeak: 'strong'});
    }

    handlerWeak() {        
        return this.setState({ strongWeak: 'weak'});        
    }

    handlerMoreInfo(infoValue) {       
        return this.setState({ moreInfo: infoValue});        
    }            
    
    render() {
        return (
            <div className={"container " + this.props.appWallpaper}>
                <div className="app-container direction-flex-column">
                    <div className="row-personal-data">
                        <div className="welcome-in-my-data">
                            <p className="div1-home-p p-underline-personal">Personal <span className="div1-home-span">data</span></p>                                            
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
                    <div className="row-personal-data">
                        <div className="column-data-30">                            
                            <div className="personal-second-row-first-column">   
                                <div className="strong-weak-handler-container">
                                    <button onClick={() =>this.handlerStrong()} className={ this.state.strongWeak === 'strong' ? "personal-button-active" : '' } >Strong sides</button>
                                    <button onClick={() => this.handlerWeak()} className={ this.state.strongWeak === 'weak' ? "personal-button-active" : '' } >Weak sides</button>
                                </div>
                                { this.state.strongWeak === 'strong' ? <StrongPersonal/> : <WeakPersonal/> }
                            </div>
                        </div>
                        <div className="column-data-70">
                           <div className="personal-second-row-second-column">                                 
                                    <div className="personal-skills-buttons">
                                        <button onClick={() =>this.handlerMoreInfo('skills')} className={ this.state.moreInfo === 'skills' ? "personal-button-active" : '' } >My Skills</button>
                                        <button onClick={() => this.handlerMoreInfo('other')} className={ this.state.moreInfo === 'other' ? "personal-button-active" : '' } >Other skills</button>
                                        <button onClick={() => this.handlerMoreInfo('passions')} className={ this.state.moreInfo === 'passions' ? "personal-button-active" : '' } >Passions</button>
                                    </div>
                                    <div>
                                        { this.state.moreInfo === 'skills' 
                                           ? <Skills /> 
                                           : ( this.state.moreInfo === 'other'
                                            ? <Other/>
                                                : <Passions />
                                            )                                             
                                        }
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