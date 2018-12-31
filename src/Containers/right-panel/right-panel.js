import React, { Component } from 'react';
import FieldPersonal from './field-personal';
import "./right-panel.css";

class RightPanel extends Component {
    constructor(props) {
        super(props);
    }     

    render() {
        return (
            <div className={this.props.panelShowState ? "rightPanelActive" : "rightPanelHidden" }>
                <FieldPersonal/>
            </div>
        );
    }
}

export default RightPanel;