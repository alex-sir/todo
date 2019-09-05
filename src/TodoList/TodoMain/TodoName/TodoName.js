import React from 'react';
import './TodoName.css';

const TodoName = props => {
    const changeTodoName = event => {
        props.nameModification(event.target.value, props.index);
    }
    
    return (
        <input
            className={`todo-name-input ${props.isChecked ? "checked" : null}`}
            type="text"
            placeholder="Todo Name"
            value={props.todoValueName}
            onChange={changeTodoName}
        />
    );
}

export default TodoName;