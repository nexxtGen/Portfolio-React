import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { leftPanelShow, rightPanelShow } from '../Actions/actions-app';
//Import styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './header.css';
//import Components
import LeftPanel from './left-panel/left-panel';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    switchLeftPanel() {
        this.props.dispatch(leftPanelShow());
        console.log("left Panel Visiblity:", this.props.leftPanelShowState);
    }

    switchRightPanel() {
        this.props.dispatch(rightPanelShow());
        console.log("righ Panel Visiblity:", this.props.leftPanelShowState);
    }    

    render() {
        return (
            <div>
            <nav className="navbar-container">
                <div className="container-fluidd"> 
                    <div className="first-button-container">
                        <button className="first-button" onClick={() => this.switchLeftPanel()}>SHOW/HIDE</button>                 
                    </div>                     
                    <div className="link-container">
                        <ul className="link-list">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/personalData">Personal Data</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>                        
                    </div>  
                    <div className="second-button-container">
                        <button className="second-button" onClick={() => this.switchRightPanel()}>SHOW/HIDE</button>
                    </div>                  
                </div>
                <LeftPanel panelShowState={this.props.leftPanelShowState}/>                    
                
                <div className={this.props.rightPanelShowState ? "rightPanelActive" : "rightPanelHidden" }>
                    <p>Right panel</p>
                </div>
            </nav>
            <div className="container-app">
                {this.props.children}
            </div>
        </div>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        leftPanelShowState: store.appReducer.leftPanelShowState,
        rightPanelShowState: store.appReducer.rightPanelShowState,
    };
};

export default connect(mapStateToProps)(Header);
