import React from 'react';
import { Link } from 'react-router';
import './tile-container.css';

const TileContainer = (props) => (
    <div className="project-tile-container-pf">        
        <div className="tile-section-1-pf">
            <div className="arrow-left-pf"></div>            
            <p className="tile-section-1-pf-green">{props.title}</p>
            <p className="tile-section-1-pf-white">{props.technology}</p>             
        </div>
        <div className="tile-section-2-pf">
            <img src={window.location.origin + props.image} alt="portfolio_image"/>
        </div>
        <div className="tile-section-3-pf">
            { props.runEngine === "true" ? 
                <Link to={props.link}>
                    <button className="running-button-pf">{"-> Run Here <-"}</button>
                </Link> : 
                <a href={props.link} target="_blank">
                    <button className="running-button-pf">{"-> Run in GitHub Pages <-"}</button>
                </a>
            }                  
        </div>
        <div className="tile-section-4-pf">
            <button className="tile-section-4-pf-button">Git Repository</button>
        </div>
    </div>
);

export default TileContainer;