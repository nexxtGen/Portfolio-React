import React, { Component } from 'react';
import "./clock.css";

class Clock extends Component{
  constructor(props) {
    super(props);
      this.state = { 
        hour: "00",
        minutes: "00",
        amPm: "am" 
      };
      this.getTime = this.getTime.bind(this);
  }	
  
  componentDidMount () {
  	this.loadInterval = setInterval(
      this.getTime, 1000
    );
  }
  
  getTime() {
  	const 
      takeTwelve = n => n > 12 ?  n  - 12 : n,
         addZero = n => n < 10 ? "0" +  n : n;
       
  	setInterval(() => {
    	let date, hour, minutes, actualHour, actualMinutes, amPm;
      
      date = new Date();
      hour = addZero(takeTwelve(date.getHours())); 
      minutes = addZero(date.getMinutes());       
		  actualHour = `${hour}`;
      actualMinutes = `${minutes}`;
      
      amPm = date.getHours() >= 12 ? "PM" : "AM";
      
      this.setState({
          hour: actualHour,
          minutes: actualMinutes,         
          amPm: amPm
      })
    }, 1000);
  }
  
	render () {
  	return (
      <div className="clock-container">        
          <div className="amPm">
            {this.state.amPm}            
          </div>
          <div className="hour">
            {this.state.hour}            
          </div>
          <div className="minutes">
            {this.state.minutes}            
          </div>
      </div>
    );
  }
};

export default Clock;


