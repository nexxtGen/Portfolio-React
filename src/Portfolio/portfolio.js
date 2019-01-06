import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import './portfolio-style.css';

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }     

    render() {
        return (
            <div className={"portfolio-container-pf " + this.props.appWallpaper}>   
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

const mapStateToProps = function (store) {
    return {
        appWallpaper: store.appReducer.appWallpaper,
    };
};

export default connect(mapStateToProps)(Portfolio);