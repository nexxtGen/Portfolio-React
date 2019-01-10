import React from 'react';
import './other.css';
//import images
import studio from '../../../images/logo/studio.png';
import vray from '../../../images/logo/vray.png';
import zbrush from '../../../images/logo/zbrush.png';
import photoshop from '../../../images/logo/photoshop.png';
import ae from '../../../images/logo/ae.png';

const Other = () => (    
    <div className="skills-container-sk">
        <div className="other-images-container">
            <img src ={studio} />
            <img src ={vray} />
            <img src ={zbrush} />
            <img src ={photoshop} /> 
            <img src ={ae} />             
        </div>
        <div className="other-text-container">
            <p>Sorry... Work in progress</p>
        </div>
    </div>                          
);

export default Other;