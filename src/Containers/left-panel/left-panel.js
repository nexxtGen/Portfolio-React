import React, { Component } from 'react';
import Clock from './clock';
import "./left-panel.css";

class LeftPanel extends Component {
    constructor(props) {
        super(props);
    }     

    render() {
        return (
            <div className={this.props.panelShowState ? "leftPanelActive" : "leftPanelHidden" }>
                <Clock/>
                <h1>Left Panel Component. Test</h1>
            </div>
        );
    }
}

export default LeftPanel;