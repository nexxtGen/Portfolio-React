import React from 'react';
import './TodoFilter.css';

const TodoFilter = props => (
    <form className="filter-toDoApp">
        <input type="text" placeholder="Filter items..." value={props.filter} onChange={props.onFilterChange}/>
    </form>
)
export default TodoFilter;