import React, { Component } from 'react';
import Clock from './clock';
import FieldOne from './field-one';
import "./left-panel.css";

class LeftPanel extends Component {
    constructor(props) {
        super(props);
    }     

    render() {
        return (
            <div className={this.props.panelShowState ? "leftPanelActive" : "leftPanelHidden" }>
                <Clock/>
                <FieldOne/>
            </div>
        );
    }
}

export default LeftPanel;