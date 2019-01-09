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
            <div className="div-container1">
                <div className="div1-home">
                    <p className="div1-home-p"><span className="div1-home-span">uwagi do strony</span></p>
                    <p className="home-welcome-text-journey">2019.01.09 godz. 21:36- W ciągu najblizszych 16h sekcja "Personal data" zostanie ukończona. Będzie to oznaczało wersję 1.0 aplikacji.</p>
                    <p className="home-welcome-text-journey">Najlepsza szerokość ekranu dla aplikacji to 1050px w górę. Jeśli panele boczne przysłaniają widok to jest możliwość ich ukrycia ( na czarnym pasku nawigacji u góry)</p>
                    <p className="home-welcome-text-journey">W przeciągu najbliższych kilku dni strona będzie udoskonalana. Jest kilka zmian które chcę tu wprowadzić. W wolnym czasie zaplanowanie stworzenie w Reactie gry "Sudoku" i dodanie do portfolio. Niewykluczone również "przepisanie" Kanbana na React i możliwość uruchomienia z poziomu aplikacji. Dziękuję za uwagę:)</p>                     
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