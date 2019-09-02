import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import './AddTodo.css';
import shortid from 'shortid';

const AddTodo = props => {
    const todo = {
        id: shortid.generate(),
        name: '',
        description: '',
        checked: false
    }

    return (
        <div>
            <Tooltip title="Add Todo" placement="left">
                <li
                    id="add-todo"
                    className="nav-icon"
                    onClick={() => props.addition(todo)}
                >+</li>
            </Tooltip>
        </div>
    );
}

export default AddTodo;