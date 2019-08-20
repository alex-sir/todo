import React from 'react';
import { TiDeleteOutline } from "react-icons/ti";
import './TodoDelete.css';

const TodoDelete = props => {
    return (
        <TiDeleteOutline
            className="delete-todo"
            onClick={() => props.remove(props.index)}
        />
    );
}

export default TodoDelete;