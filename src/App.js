import React, { Component } from 'react';
import Nav from './Nav/Nav';
import TodoList from './TodoList/TodoList';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    addition = todo => {
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }

    remove = index => {
        const currentTodos = [...this.state.todos];

        currentTodos.splice(index, 1);

        this.setState({
            todos: currentTodos
        });
    }

    nameModification = (todoName, index) => {
        const currentTodos = [...this.state.todos];

        currentTodos[index].name = todoName;
        this.setState({
            todos: currentTodos
        });
    }

    descriptionModification = (todoDescription, index) => {
        const currentTodos = [...this.state.todos];

        currentTodos[index].description = todoDescription;
        this.setState({
            todos: currentTodos
        });
    }

    updateChecked = index => {
        const currentTodos = [...this.state.todos];

        currentTodos[index].checked = !currentTodos[index].checked;
        this.setState({
            todos: currentTodos
        });
    }

    render() {
        const { todos } = this.state;

        return (
            <div id="app">
                <Nav addition={this.addition} />
                <TodoList
                    todos={todos}
                    updateChecked={this.updateChecked}
                    nameModification={this.nameModification}
                    descriptionModification={this.descriptionModification}
                    remove={this.remove}
                />
            </div>
        );
    }
}

export default App;