import React from 'react';
import { FaTrash } from "react-icons/fa";
import './TodoDelete.css';

const TodoDelete = props => {
    return (
        <FaTrash
            className="delete-todo"
            onClick={() => props.remove(props.index)}
        />
    );
}

export default TodoDelete;