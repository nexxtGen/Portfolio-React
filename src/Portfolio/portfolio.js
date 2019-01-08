import React, { Component } from 'react';
import { connect } from 'react-redux';
import TileContainer from './components/tile-container';
import portfolioData from './portfolio-data.json';
import './portfolio-style.css';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: portfolioData
        }
    }     

    render() {
        return (
            <div className={"portfolio-container-pf " + this.props.appWallpaper}>   
                <div className="content-container-pf">
                    { this.state.data.map( portfolioElem => {
                        return <TileContainer
                                key={portfolioElem.id}
                                image={portfolioElem.image}
                        />
                    })}  
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
/*
                    <Link to="/portfolio/landing-1">
                        <button className="portfolio-button">LANDING 1111</button>
                    </Link>
                    <Link to="/portfolio/landing-2">
                        <button className="portfolio-button">LANDING 222</button>
                    </Link>
                    <Link to="/portfolio/toDo">
                        <button className="portfolio-button">ToDo React</button>
                    </Link>
*/