import React, { Component } from 'react';
import { connect } from 'react-redux';
import TileContainer from './components/tile-container';
import portfolioData from './portfolio-data.json';
import './portfolio-style.css';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            delay: 300          
        }
    }  
    
    componentDidMount() {
        const data = portfolioData;
        const delay = this.state.delay;
        this.interval = setInterval(() => {
          this.setState(prev => ({ data: prev.data.concat(data.shift()) }));
          if(!data.length) clearInterval(this.interval);
        }, delay);
    }
    
    render() {
        return (
            <div className={"portfolio-container-pf " + this.props.appWallpaper}>   
                <div className="content-container-pf">
                    {  this.state.data.map( portfolioElem => {                        
                        return <TileContainer                                
                                key={portfolioElem.id}
                                title={portfolioElem.title}
                                runEngine={portfolioElem.runEngine}
                                technology={portfolioElem.technology}
                                image={portfolioElem.image}
                                link={portfolioElem.link}
                                repo={portfolioElem.repo}
                        />
                    })}  
                </div>             
            </div>
        );
    }    

    componentWillUnmount() {
        clearInterval(this.interval);
        this.setState({data: []});
    }
}

const mapStateToProps = function (store) {
    return {
        appWallpaper: store.appReducer.appWallpaper,
    };
};

export default connect(mapStateToProps)(Portfolio);
