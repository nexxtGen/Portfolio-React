import React, { Component } from 'react';
import { Link } from 'react-router';
import './portfolio-style.css';

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }     

    render() {
        return (
            <div className="portfolio-container-pf">   
                <div className="content-container-pf">
                    <Link to="/portfolio/landing-1">
                        <button className="portfolio-button">LANDING 1111</button>
                    </Link>
                    <Link to="/portfolio/landing-2">
                        <button className="portfolio-button">LANDING 222</button>
                    </Link>
                    <Link to="/portfolio/toDo">
                        <button className="portfolio-button">ToDo React</button>
                    </Link>
                </div>             
            </div>
        );
    }
}

export default Portfolio;