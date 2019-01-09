import React, { Component } from 'react';
import './field-one.css';

class FieldOne extends Component {
    constructor(props) {
      super(props);
      this.state = {        
        rss: [],
        title: '',   
        link: ''     
      }
            
    }    
    
    fetchDataFromRssFeed() {     
        var cors = "https://cors-anywhere.herokuapp.com/";                   
        const url = cors + "https://feed2json.org/convert?url=https://reactjs.org/feed.xml";        
        fetch(url)            
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ rss: responseJson.items})
            })            
    }       
    
    componentDidMount() {
      this.fetchDataFromRssFeed();   
    }
  
    render(){
        return (
            <div className="field-container">
                <div className="field-rss-title">
                    <h4 className="rss-title-h4">RSS React News feed:</h4>
                </div>
                <div className="rss-articles-container">
                    { this.state.rss.length > 1 ? this.state.rss.map((item) => {
                        return(
                            <div className="rss-article-container" key={item.date_published}>
                                <p>- {item.title}</p>
                                <a href={item.url} target="_blank">article link</a>
                            </div>
                        ) 
                    }) : <p>  Loading data...</p>}
                </div>                
            </div>
        )
    }
  }

export default FieldOne;