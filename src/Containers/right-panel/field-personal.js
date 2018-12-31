import React, { Component } from 'react';
import myPhoto from '../../images/myPhoto.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
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
                    <div className="git-icon-container">
                        <div className="kamil-data">
                            <p>Name: Kamil</p>
                            <p>Surname: Sz</p>
                            <p>Profession: WebDev</p>
                        </div>
                        <div>
                            <FontAwesomeIcon className="github-icon" icon={faGithubSquare} /><span className="git-repo">Github Repo</span><FontAwesomeIcon/>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default FieldPersonal;