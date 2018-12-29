import React, { Component } from 'react';
import "./clock.css";
import moment from 'moment';

class Clock extends Component{
  constructor(props) {
    super(props);
      this.state = { 
        hour: "00",
        minutes: "00",
        amPm: "am",
        day: "Monday",
        month: "January" 
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
    	let date, hour, minutes, actualHour, actualMinutes, amPm, day, month;
      
      date = new Date();
      hour = addZero(takeTwelve(date.getHours())); 
      minutes = addZero(date.getMinutes());       
		  actualHour = `${hour}`;
      actualMinutes = `${minutes}`;
      
      amPm = date.getHours() >= 12 ? "PM" : "AM";
      
      day = moment().format('dddd');
      month = moment().format('MMMM .DD');
      this.setState({
          hour: actualHour,
          minutes: actualMinutes,         
          amPm: amPm,
          day,
          month
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
          <div className="dateContainer">
            <div className="day">
              {this.state.day}            
            </div>
            <div className="month">
              {this.state.month}            
            </div>
          </div>
          <div className="line"></div>
      </div>
    );
  }
};

export default Clock;


