import React from 'react';
import './TodoDelete.css';

const TodoDelete = props => {
    return (
        <button
            className="delete-todo"
            onClick={() => props.remove(props.index)}
        >X</button>
    );
}

export default TodoDelete;