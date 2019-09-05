import React from 'react';
import 'pretty-checkbox/dist/pretty-checkbox.min.css';
import './TodoCheckbox.css'

const TodoCheckbox = props => {
    const { index, isChecked } = props;

    return (
        <div className="pretty p-default p-curve">
            <input
                className="todo-checkbox"
                type="checkbox"
                onChange={() => props.updateChecked(index)}
                checked={isChecked}
            />
            <div className="state p-primary">
                <label></label>
            </div>
        </div>
    );
}

export default TodoCheckbox;