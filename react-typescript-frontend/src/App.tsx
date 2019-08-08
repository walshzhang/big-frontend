import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoCreator from './TodoCreator';
import { Todo } from './types';
import Axios from 'axios';

interface State {
  todos: Todo[];
}

class App extends Component<{}, State> {
  state: State = { todos: [] };
  async componentDidMount() {
    try {
      const { data: todos } = await Axios.get('http://localhost:8080/api/todo');
      this.setState({ todos });
    } catch (e) {
      console.log(e);
    }
  }

  addTodo = async (action: string) => {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    try {
      await Axios.post(
        'http://localhost:8080/api/todo',
        `action=${action}`,
        config
      );
      this.setState({
        todos: this.state.todos.concat({ action, done: false })
      });
    } catch (e) {
      console.log(e);
    }
  };

  toggleTodo = (index: number) => {
    Axios.post(`http://localhost:8080/api/todo/toggle/${index + 1}`)
      .then(response => {
        const todos = this.state.todos.map((item, idx) =>
          idx === index ? { ...item, done: !item.done } : item
        );
        this.setState({ todos });
      })
      .catch(error => console.log(error));
  };

  removeTodo = (index: number) => {
    Axios.delete(`http://localhost:8080/api/todo/${index + 1}`)
      .then(response => {
        const todos = this.state.todos.filter((_, idx) => idx !== index);
        this.setState({ todos });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <TodoCreator addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          toggleTodo={this.toggleTodo}
          removeTodo={this.removeTodo}
        />
      </div>
    );
  }
}

export default App;
