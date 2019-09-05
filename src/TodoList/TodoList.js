import React from 'react';
import TodoMain from './TodoMain/TodoMain';
import TodoDescription from './TodoDescription/TodoDescription';
import './TodoList.css';    

const TodoList = props => {
    if (props.todos.length === 0) {
        return <p className="no-todos">No todos. Add a todo with <strong>+</strong>.</p>
    } else {
        const todos = props.todos.map((todo, index) => {
            return (
                <div className="todo" key={todo.id}>
                    <TodoMain
                        index={index}
                        todo={todo}
                        updateChecked={props.updateChecked}
                        nameModification={props.nameModification}
                        nameChecked={props.updateChecked}
                        remove={props.remove}
                    />
                    <details className={`${todo.checked ? "checked" : null}`}>
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