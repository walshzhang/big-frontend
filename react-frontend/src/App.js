import React, { Component } from 'react';
import { TodoCreator } from './TodoCreator';
import { TodoList } from './TodoList';
import Axios from 'axios';

class App extends Component {
  url = 'http://localhost:8080/api/todo';

  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount = _ => {
    document.title = 'Todo App';

    Axios.get(this.url).then(response =>
      this.setState({ todos: response.data })
    );
  };

  toggleTodo = position => {
    const mapper = (item, index) =>
      position === index ? { ...item, done: !item.done } : item;
    Axios.post(`${this.url}/toggle/${position + 1}`).then(_ =>
      this.setState({
        todos: this.state.todos.map(mapper)
      })
    );
  };

  removeTodo = position => {
    Axios.delete(`${this.url}/${position + 1}`).then(_ =>
      this.setState({
        todos: this.state.todos.filter((_, index) => position !== index)
      })
    );
  };

  addTodo = action => {
    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    Axios.post(this.url, `action=${action}`, config).then(_ =>
      //TODO 不判断action是否已经存在
      this.setState({ todos: [...this.state.todos, { action, done: false }] })
    );
  };

  render = _ => (
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

export default App;
