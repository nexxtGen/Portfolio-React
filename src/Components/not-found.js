import React from 'react';
import { connect } from 'react-redux';
import './not-found.css';

const NotFound = (props) => (
    <div className={"not-found-container " + props.appWallpaper}>
        <div className="not-found-content-container">
            <h1>Error 404... podana strona nie istnieje</h1>
        </div>
    </div>
);

const mapStateToProps = function (store) {
    return {
        appWallpaper: store.appReducer.appWallpaper,
    };
};

export default connect(mapStateToProps)(NotFound);