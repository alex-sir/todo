import React from 'react';
import TodoDelete from './TodoDelete/TodoDelete';

const TodoOptions = ({ index, remove }) => {
    return (
        <div>
            <TodoDelete
                index={index}
                remove={remove}
            />
        </div>
    );
}

export default TodoOptions;