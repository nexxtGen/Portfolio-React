import React, { Component } from 'react';
import { Link } from 'react-router';
import './aa.css';

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }     

    render() {
        return (
            <div className="aaa1">   
                <div className="aaa2">
                <Link to="/portfolio/landing-1">
                    <button>LANDING 1111</button>
                </Link>
                <Link to="/portfolio/landing-2">
                    <button>LANDING 222</button>
                </Link>
                </div>             
            </div>
        );
    }
}

export default Portfolio;