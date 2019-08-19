import React from "react";
import './AddTodo.css';

const AddTodo = props => {
    const todo = {
        name: '',
        description: ''
    }

    return (
        <li
            id="add-todo"
            className="nav-icon"
            onClick={() => props.addition(todo)}
        >+</li>
    );
}

export default AddTodo;