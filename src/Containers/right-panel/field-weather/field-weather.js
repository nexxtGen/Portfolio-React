import React, { Component } from "react";
import "./field-weather.css";
import SearchBar from "./components/search-bar";
import WeatherCard from "./components/weather-card";
import API_KEY from "./config.js";

class FieldWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {
        weather: "",
        city: "London",
        country: "",
        temp: 0
      },
      searchDone: false, 
      errorMessage: ""
    };

    this.callWeatherData = this.callWeatherData.bind(this);    
  }
  componentDidMount() {
    this.callWeatherData('Wrocław');
  }
  
  callWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`;
    fetch(url)
      .then(handleErrors)
      .then(resp => resp.json())
      .then(data => {
        const weatherObj = {
          weather: data.weather,
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp
        };
        this.setState({
          weatherData: weatherObj,
          searchDone: true,
          errorMessage: ""
        });
      })
      .catch(error => {
        // If an error is catch, it's sent to SearchBar as props
        this.setState({ errorMessage: error.message });
      });

    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    }
  }  

  render() {
    const {
      searchDone,
      weatherData,
      errorMessage
    } = this.state;
    
    return (
        <div>
            <div className="field-weather">       
                {searchDone && (
                <WeatherCard
                    weatherData={weatherData} 
                />
                )}   
                <SearchBar
                callBackFromParent={this.callWeatherData}
                error={errorMessage}
                />     
            </div> 
            <div className="fw-divide-line">
            </div>           
        </div>
    );
  }
}

export default FieldWeather;
