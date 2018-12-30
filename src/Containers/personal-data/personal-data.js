import React, { Component } from 'react';
import "./personal-data.css";

class PersonalData extends Component {
    constructor(props) {
        super(props);
    }     

    render() {
        return (
            <div className="container">
                <div className="personal-container">
                    <h3>Test personal data</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
            </div>
        );
    }
}

export default PersonalData;