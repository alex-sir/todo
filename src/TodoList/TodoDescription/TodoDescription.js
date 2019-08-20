import React from 'react';
import './TodoDescription.css';

const TodoDescription = props => {
    const changeTodoDescription = event => {
        props.descriptionModification(event.target.value, props.index);
    }

    return (
        <textarea
            className="todo-description"
            type="text"
            placeholder="Todo Description"
            value={props.todoValueDescription}
            onChange={changeTodoDescription}
        />
    );
}

export default TodoDescription;