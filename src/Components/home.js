import React from 'react';
import { connect } from 'react-redux';
import './home.css';

const Home = (props) => (    
    <div className={"container " + props.appWallpaper}>
        <div className="app-container">
            <div className="div-container1">
                <div className="div1-home">
                    <p className="div1-home-p">witaj <span className="div1-home-span">nieznajomy/a</span></p>
                    <p className="home-welcome-text-journey">Przygodę jako web developer rozpocząłem dokładnie w połowie roku 2018. Pierwszy krok zrobiłem w kierunku tworzenia prostych stron statycznych by z czasem iść coraz głębiej i głębiej. Obecnie jestem entuzjastą ReactJS, ktory chce się rozwijać się w kierunku Fullstack JS Developer. Zapraszam do zapoznania się z moją osobą jak i moimi projektami w sekcji portfolio. </p>                    
                </div>                    
            </div>            
        </div>
    </div>    
);

const mapStateToProps = function (store) {
    return {
        appWallpaper: store.appReducer.appWallpaper,
    };
};

export default connect(mapStateToProps)(Home);