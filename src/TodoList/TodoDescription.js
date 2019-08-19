import React from 'react';

const TodoDescription = props => {
    const changeTodoDescription = event => {
        props.descriptionModification(event.target.value, props.index);
    }

    return (
        <input
            type="text"
            placeholder="Todo Description"
            value={props.todoValueDescription}
            onChange={changeTodoDescription}
        />
    );
}

export default TodoDescription;