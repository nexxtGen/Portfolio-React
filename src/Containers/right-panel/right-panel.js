import React, { Component } from 'react';
import "./right-panel.css";

class RightPanel extends Component {
    constructor(props) {
        super(props);
    }     

    render() {
        return (
            <div className={this.props.panelShowState ? "rightPanelActive" : "rightPanelHidden" }>
                <h3>Test prawy panel</h3>
            </div>
        );
    }
}

export default RightPanel;