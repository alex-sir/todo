import React from 'react';
import TodoCheckbox from './TodoCheckbox/TodoCheckbox';
import TodoName from './TodoName/TodoName';
import TodoOptions from './TodoOptions/TodoOptions';
import './TodoMain.css';

const TodoMain = ({ index, todo, nameModification, updateChecked, remove }) => {
    return (
        <div className="todo-main">
            <TodoCheckbox
                index={index}
                updateChecked={updateChecked}
                isChecked={todo.checked}
            />
            <TodoName
                index={index}
                todoValueName={todo.name}
                isChecked={todo.checked}
                nameModification={nameModification}
            />
            <TodoOptions
                index={index}
                remove={remove}
            />
        </div>
    );
}

export default TodoMain;