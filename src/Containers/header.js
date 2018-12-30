import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { leftPanelShow, rightPanelShow } from '../Actions/actions-app';
//Import styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './header.css';
//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserSecret, faAddressCard, faAddressBook, faFileCode, faBars } from '@fortawesome/free-solid-svg-icons';
//Import Components
import LeftPanel from './left-panel/left-panel';
import RightPanel from './right-panel/right-panel';
library.add(faHome, faUserSecret, faAddressCard, faFileCode, faAddressBook, faBars);
//import Components


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
                        <button className="first-button" onClick={() => this.switchLeftPanel()}><FontAwesomeIcon className="header-icon" icon="bars" /></button>                 
                    </div>                     
                    <div className="link-container">
                        <ul className="link-list">
                            <li>
                                <Link to="/">
                                    <div className="single-link-container">
                                        <div className="icon-container">
                                            <FontAwesomeIcon className="header-icon" icon="home" />
                                        </div>
                                        <div className="icon-text">
                                            <p>Home<br/><span className="icon-text-span">page</span></p>                                            
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/personalData">
                                    <div className="single-link-container">
                                        <div className="icon-container">
                                            <FontAwesomeIcon className="header-icon" icon="address-card" />
                                        </div>
                                        <div className="icon-text">
                                            <p>Personal<br/><span className="icon-text-span">Data</span></p>                                            
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/portfolio">
                                    <div className="single-link-container">
                                        <div className="icon-container">
                                            <FontAwesomeIcon className="header-icon" icon="file-code" />
                                        </div>
                                        <div className="icon-text">
                                            <p>Portfolio<br/><span className="icon-text-span">apps</span></p>                                            
                                        </div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                    <div className="single-link-container">
                                        <div className="icon-container">
                                            <FontAwesomeIcon className="header-icon" icon="address-book" />
                                        </div>
                                        <div className="icon-text">
                                            <p>Contact<br/><span className="icon-text-span">Me</span></p>                                            
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </ul>                        
                    </div>  
                    <div className="second-button-container">
                        <button className="second-button" onClick={() => this.switchRightPanel()}><FontAwesomeIcon className="header-icon" icon="bars" /></button>
                    </div>                  
                </div>
                <LeftPanel panelShowState={this.props.leftPanelShowState}/>
                <RightPanel panelShowState={this.props.rightPanelShowState}/> 
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
