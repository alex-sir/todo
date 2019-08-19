import React from 'react';
import TodoName from './TodoName';
import DeleteTodo from './DeleteTodo';
import TodoDescription from './TodoDescription';
import './TodoList.css';

const TodoList = props => {
    if (props.todos.length === 0) {
        return <p className="no-todos">No todos. Add a todo with '+'.</p>
    } else {
        const todos = props.todos.map((todo, index) => {
            return (
                <div className="todo" key={index} data-key={index}>
                    <div className="todo-name">
                        <input type="checkbox" />
                        <TodoName
                            index={index}
                            todoValueName={todo.name}
                            nameModification={props.nameModification}
                        />
                        <DeleteTodo
                            index={index}
                            remove={props.remove}
                        />
                    </div>
                    <details>
                        <summary>Description</summary>
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