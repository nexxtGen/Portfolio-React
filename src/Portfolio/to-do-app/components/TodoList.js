import React from 'react';
import Todo from './Todo';
import './TodoList.css'

const TodoList = props => {
    
    return (
        <ul className="TodoList-toDoApp">            
            {props.data.map((item) => { 
                return (                        
                    <Todo key={item.id} item={item} removeTodo={props.remove}  toggleClass={props.toggleClass}/>                        
                );                
            })}
        </ul> 
    );   
}

export default TodoList;