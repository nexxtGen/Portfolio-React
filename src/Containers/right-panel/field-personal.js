import React, { Component } from 'react';
import myPhoto from '../../images/myPhoto.jpg';
import { Link } from 'react-router';
// Font awesome libary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faUserGraduate} from '@fortawesome/free-solid-svg-icons';
import "./field-personal.css";

class FieldPersonal extends Component {
    constructor(props) {
        super(props);
    }     

    render() {
        return (
            <div className="field-personal-container">
                <div className="first-module-container">
                    <div>
                        <img className="my-photo" src={myPhoto}></img>
                    </div>
                    <div className="kamil-data-container">
                        <div className="kamil-data">
                            <p>Name: Kamil</p>
                            <p>Surname: Sz</p>
                            <p>Profession: WebDev</p>
                        </div>
                    </div>
                </div>
                <div className="fp-icon-container">                
                    <a href="https://github.com/nexxtGen" target="_blank"><FontAwesomeIcon className="fp-icon" icon={faGithubSquare} /></a>
                    <a href="https://www.linkedin.com/in/kamil-s-764777177/" target="_blank"><FontAwesomeIcon className="fp-icon" icon={faLinkedin} /></a>
                    <a href="https://drive.google.com/file/d/1hqacRKmw-EHyId6uPVsmBIhxY5UtOG0J/view" target="_blank"><FontAwesomeIcon className="fp-icon" icon={faUserGraduate} /></a>
                    <Link to="/personalData" className="fp-link-to-personal-data"><button className="fp-button">Personal data</button></Link>
                </div>
                <div className="fp-divided-line">                   
                </div>
            </div>
        );
    }
}

export default FieldPersonal;