import React from 'react';
import { Link } from 'react-router';
import './tile-container.css';

const TileContainer = (props) => (
    <div className="project-tile-container-pf">
        <div className="tile-section-1-pf">
            <p>test</p>
        </div>
        <div className="tile-section-2-pf">
            <img src={window.location.origin + props.image} alt="portfolio_image"/>
        </div>
        <div className="tile-section-3-pf">

        </div>
    </div>
);

export default TileContainer;