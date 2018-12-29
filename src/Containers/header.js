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
            <nav className="navbar navbar-dark">
                <div className="container-fluid">                    
                    <div className="navbar-header">
                        <button onClick={() => this.switchLeftPanel()}>left SHOW/HIDE</button>
                        <Link className="navbar-brand" to="/">KamilSz portfolio</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/personalData">Personal Data</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                        <button onClick={() => this.switchRightPanel()}>Right SHOW/HIDE</button>
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
