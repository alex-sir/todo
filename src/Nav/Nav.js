import React from 'react';
import AddTodo from './AddTodo/AddTodo';
import './Nav.css';

const Nav = props => {
    return (
        <nav>
            <ul className="nav-list">
                <li id="todo-title">Todo</li>
                <AddTodo todos={props.todos} addition={props.addition} />
            </ul>
        </nav>
    );
}

export default Nav;