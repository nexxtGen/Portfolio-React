import React, { Component } from 'react';
import FieldPersonal from './field-personal';
import FieldWeather from './field-weather/field-weather';
import ChangeTheme from './change-theme';
import "./right-panel.css";

class RightPanel extends Component {
    constructor(props) {
        super(props);
    }     

    render() {
        return (
            <div className={this.props.panelShowState ? "rightPanelActive" : "rightPanelHidden" }>
                <FieldPersonal/>
                <FieldWeather/>
                <ChangeTheme/>
            </div>
        );
    }
}

export default RightPanel;