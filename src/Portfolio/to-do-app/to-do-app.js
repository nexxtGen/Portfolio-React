import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';
import './to-do-app.css';
import Title from './components/Title';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import TodoForm from './components/TodoForm';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                    id: 1,
                    text: 'clean room',   
                    active: false,
                    date: null,
                    bornDate: 'Jan 12 | 11:30'                  
                }, {
                    id: 2,
                    text: 'wash the dishes',
                    active: false,
                    date: null,
                    bornDate: 'may 2 | 12:23'
                }, {
                    id: 3,
                    text: 'feed yourself',
                    active: false,
                    date: null,
                    bornDate: 'Jan 22 | 12:23'  
                },
                {
                    id: 4,
                    text: 'clean room 2',
                    active: false,
                    date: null,
                    bornDate: 'Jan 22 | 12:23'  
                }, {
                    id: 5,
                    text: 'wash car',
                    active: false,
                    date: null,
                    bornDate: 'Jan 22 | 12:23'  
                }
                
            ],            
            filter: '',                             
           
        };     
    }
    //methods
    addTodo(val) {    
        const todo = {
            text: val,
            id: uuid.v4(),
            active: false,
            date: null,
            bornDate: moment().format('MMM DD | HH:mm')             
        }; 
        const data = [...this.state.data, todo];
        this.setState({data});  
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);

        this.setState({data: remainder});
    }

    //Przekreslenie po nacisnieciu na task
    toggleClass(todoId) {       
        const newTodoState = this.state.data.map(todo => {
            return {
                id: todo.id,
                text: todo.text,
                active: todo.id === todoId ? !todo.active : todo.active,
                date: todo.id === todoId ? moment().format('MMM DD | HH:mm') : todo.date,
                bornDate: todo.bornDate
            }
        });   

        this.setState({
            data: newTodoState,
        });  
    };

    // Filtrowanie listy
    onFilterChange(event) {
        const value = event.currentTarget.value;  
        this.setState({ filter: value });        
    }    
    
    filterData(val) {
        const filter = this.state.filter;
        return val.indexOf(filter) > -1;
    }
    
    render() {
        console.log(moment);
        return (
            <div className="ToDoApp-container">
                <div className="ToDoApp-container-2">
                    <div className="TodoApp"> 
                        <Title data={this.state.data}/>                
                        <TodoForm addItemFunc={this.addTodo.bind(this)}/> 
                        <TodoFilter filter={this.state.filter} onFilterChange={this.onFilterChange.bind(this)}/>
                        <TodoList data={this.state.data.filter(item  => {
                                return item.text.indexOf(this.state.filter) > -1;
                            })} remove={this.removeTodo.bind(this)} toggleClass={this.toggleClass.bind(this)}/>
                    </div>
                </div>
            </div>   
        )
    }
}

export default ToDo;
