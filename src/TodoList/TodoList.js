import React from 'react';
import TodoName from './TodoName/TodoName';
import TodoDelete from './TodoDelete/TodoDelete';
import TodoDescription from './TodoDescription/TodoDescription';
import TodoCheckbox from './TodoCheckbox/TodoCheckbox';
import './TodoList.css';

const TodoList = props => {
    if (props.todos.length === 0) {
        return <p className="no-todos">No todos. Add a todo with <strong>+</strong>.</p>
    } else {
        const todos = props.todos.map((todo, index) => {
            return (
                <div className="todo" key={index}>
                    <div className="todo-name">
                        <TodoCheckbox
                            index={index}
                            updateChecked={props.updateChecked}
                            isChecked={todo.checked}
                        />
                        <TodoName
                            index={index}
                            todoValueName={todo.name}
                            nameModification={props.nameModification}
                        />
                        <TodoDelete
                            index={index}
                            remove={props.remove}
                        />
                    </div>
                    <details>
                        <summary className="description-title">Description</summary>
                        <TodoDescription
                            index={index}
                            todoValueDescription={todo.description}
                            descriptionModification={props.descriptionModification}
                        />
                    </details>
                </div>
            );
        });

        return <div>{todos}</div>
    }
}

export default TodoList;