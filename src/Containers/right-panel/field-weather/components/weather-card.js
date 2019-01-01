import React, { Component } from "react";
import "./weather-card.css";
import "./weather-icons.css";

class WeatherCard extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { city, weather, country, temp } = this.props.weatherData;
    const celcius = Math.round(temp - 273.15);
      
    return (
      <div className="weather-card">        
        <div className="weather-card-icon-container">
          <i className={`wi wi-owm-${weather[0].id} weather-card-icon`} />          
        </div>
        <div className="weather-data-container">
          <h4 className="weather-card-degrees">{celcius}° {weather[0].main}</h4>          
          <p>
            {city}, {country}
          </p>              
        </div>          
      </div>
    );
  }
}

export default WeatherCard;
