import React from 'react';
import './Title.css';

const Title = (props) => 
    <div className="title-toDoApp">
        <h2>React ToDo App</h2>   
        <h4>Items: {props.data.length}</h4>     
    </div>

export default Title;