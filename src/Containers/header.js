import React, { Component } from 'react';
import { Link } from 'react-router';
import DevTools from '../DevTools';
//Import styles
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            <nav className="navbar navbar-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">KamilSz portfolio</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li><Link to="/countries">Personal Data</Link></li>
                            <li><Link to="/continents">Portfolio</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>                    
                    </div>
                </div>
                <div className="leftPanel">
                    <p>Left panel</p>
                </div>
                <div className="rightPanel">
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

export default Header;