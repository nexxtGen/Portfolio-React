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
            <p>Creating photorealistic 3D visualizations, 3D modeling, advanced V-ray rendering, sculpting, character modeling, 3D animation.</p>
            <a href="https://vimeo.com/125328994" target="_blank" className="demo-reel">My Character Modeling Reel on vimeo</a>
        </div>
    </div>                          
);

export default Other;