import React from 'react';

const TodoName = props => {
    const changeTodoName = event => {
        props.nameModification(event.target.value, props.index);
    }
    
    return (
        <input
            type="text"
            placeholder="Todo Name"
            value={props.todoValueName}
            onChange={changeTodoName}
        />
    );
}

export default TodoName;