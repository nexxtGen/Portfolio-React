import React from 'react';
import { connect } from 'react-redux';
import './contact.css';

const Contact = (props) => (
    <div className={"contact-container-con " + props.appWallpaper}>
        <div className="content-container-con">
            <h1>
                Ulica: Wrocławska 99
            </h1>            
        </div>
    </div>
);

const mapStateToProps = function (store) {
    return {
        appWallpaper: store.appReducer.appWallpaper,
    };
};

export default connect(mapStateToProps)(Contact);