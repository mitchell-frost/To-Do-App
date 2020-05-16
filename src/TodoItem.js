import React from 'react';
import ReactDOM from 'react-dom';
import todosData from './todosData';
import './App.css';

function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                onChange={() => console.log("Changed!")}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem;