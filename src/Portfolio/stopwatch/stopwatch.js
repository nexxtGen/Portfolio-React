import React, { Component } from 'react';
import './stopwatch.css'

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}
class Stopwatch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            running: false,
            resultList: [],
            times : {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            }
        }
    } 

    resetTimer(){
        this.setState({
            times: {
                minutes: 0,
                seconds: 0,
                miliseconds: 0
            } 
        })
    } 
    
    addItem(){
        let newItem = { 
			id: this.state.resultList.length,
			itemInArr: this.format()
		};
        this.setState({ resultList: [...this.state.resultList, newItem]});
    }
    clearList(){       
        this.setState({ resultList: [] }); 
    }

    format() {        
        let {minutes, seconds, miliseconds} = this.state.times; 
       
        return `${pad0(minutes)}:${pad0(seconds)}:${pad0(Math.floor(miliseconds))}`; 
    }    
    
    start() {
        if (!this.state.running) { 
            this.setState({ running: true })
            this.watch = setInterval(() => this.step(), 10)
        }
    }
    
    step() {
        if (!this.state.running) return;
        this.calculate();
    }

    stop() {
        this.setState({running: false});
        clearInterval(this.watch);
    } 
    
    calculate(){
		this.setState({ 
			times: {
				minutes: this.state.times.minutes,
				seconds: this.state.times.seconds,
				miliseconds: this.state.times.miliseconds + 1
			}
		});
		if (this.state.times.miliseconds >= 100) {
			this.setState({
				times: {
					minutes: this.state.times.minutes,
					seconds: this.state.times.seconds + 1,
					miliseconds: 0
				}
			});
		};
		if (this.state.seconds >= 60) {
			this.setState({
				times: {
					minutes: this.state.times.minutes + 1,
					seconds: 0,
					miliseconds: this.state.times.miliseconds
				}
			});
		};
    } 

    render() {

        const arrayItems = this.state.resultList.map(element  => { 
            return <li key={element.id}>{element.itemInArr}</li> 
        });

        return (
            <div className="stopwatch-app-container">
                <div className="stopwatch-app-container-2">
                    <div className="stopwatch-container">
                        <h2 className="stopwatch-title">Stopwatch</h2>
                        <div className="buttons-stopwatch">
                            <nav className="stopwatch-controls">
                                <button className="button-stopwatch" onClick={() => this.start()}>Start</button>
                                <button className="button-stopwatch" onClick={() => this.stop()}>Stop</button>
                                <button className="button-stopwatch" onClick={() => this.addItem()}>Save</button>
                                <button className="button-stopwatch" onClick={() => this.resetTimer()}>Reset</button>
                            </nav>
                        </div>
                        <div className="stopwatch-format">{this.format()}</div>
                    </div>        
                    <div className="stopwatch-list-container">
                        <h3 className="timer-list-stopwatch">Timer list</h3>
                        <button className="button-stopwatch" onClick={() => this.clearList()}>Reset List</button>
                        <div className="item-container-stopwatch">
                            <ol className="results-stopwatch" id="timerList">{arrayItems}</ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stopwatch;
