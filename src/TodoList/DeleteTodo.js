import React from 'react';

const DeleteTodo = props => {
    return (
        <button
            className="delete-todo"
            onClick={() => props.remove(props.index)}
        >X</button>
    );
}

export default DeleteTodo;