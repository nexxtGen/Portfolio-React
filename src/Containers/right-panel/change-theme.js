import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeAppTheme } from '../../Actions/actions-app';
import bg1_min from '../../images/bg1_min.jpg';
import bg2_min from '../../images/bg2_min.jpg';
import bg3_min from '../../images/bg3_min.jpg';
import bg4_min from '../../images/bg4_min.jpg';
import "./change-theme.css";

class ChangeTheme extends Component {
    constructor(props) {
        super(props);
        this.handleChangeTheme = this.handleChangeTheme.bind(this);
    }     

    handleChangeTheme(theme, wallpaper) {
        this.props.dispatch(changeAppTheme(theme, wallpaper));
        console.log("Theme has changed to:", theme, wallpaper);
    }
    render() {
        return (
            <div className="field-personal-container-theme">
                <div className="first-module-container-theme">                    
                    <div>
                        <p>Change Wallpaper</p>
                    </div>
                    <div className="theme-data-container">
                        <div className="theme-data">    
                            <img src={bg1_min} onClick={() => this.handleChangeTheme("first_theme_app", "background_1_app")} /> 
                            <img src={bg2_min} onClick={() => this.handleChangeTheme("second_theme_app", "background_2_app")} />
                            <img src={bg3_min} onClick={() => this.handleChangeTheme("third_theme_app", "background_3_app")} />
                            <img src={bg4_min} onClick={() => this.handleChangeTheme("four_theme_app", "background_4_app")} />                                
                                           
                        </div>
                    </div>
                </div>
                <div className="theme-divided-line">                   
                </div>
            </div>
        );
    }
}

export default connect(null)(ChangeTheme);

