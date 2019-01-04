import React from 'react';
import './Todo.css'

const Todo = props => (
    <li id={props.item.id} active={props.item.active}  className="item-toDoApp">  
        <div className="div1-toDoApp">
            <span onClick={() => props.toggleClass(props.item.id)} className={props.item.active ? "active-toDoApp" : "itemSpan-toDoApp" }>{props.item.text}</span>
            <p className="born-toDoApp">{' --Created: ' + props.item.bornDate} <span className="date-toDoApp"> {props.item.active ? '--Done: '+props.item.date : null}</span> </p>            
        </div>
        <div className="div2-toDoApp">
            <button className="button-toDoApp" onClick={() => props.removeTodo(props.item.id)}>x</button>
        </div>
    </li>
)

export default Todo;