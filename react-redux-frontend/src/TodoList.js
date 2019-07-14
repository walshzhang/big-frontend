import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { loadTodos, toggleTodo, removeTodo } from './store';

class TodoList extends Component {
  componentDidMount() {
    this.props.loadTodos();
  }

  render = () => {
    const { todos, toggleTodo, removeTodo } = this.props;
    return (
      <table className='table table-hover offset-2 col-8 mt-5'>
        <thead>
          <tr>
            <th>完成？</th>
            <th>描述</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) => (
            <tr key={index} className={item.done ? 'text-success' : ''}>
              <td>
                <input
                  type='checkbox'
                  onChange={() => toggleTodo(index)}
                  checked={item.done}
                />
              </td>
              <td>{item.action}</td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => removeTodo(index)}
                >
                  删除
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
}

const mapStateToProps = state => ({
  todos: state
});

const mapDispatchToProps = dispatch => ({
  loadTodos: () => {
    const url = 'http://localhost:8080/api/todo';
    Axios.get(url).then(response => dispatch(loadTodos(response.data)));
  },
  toggleTodo: index => {
    const url = `http://localhost:8080/api/todo/toggle/${index + 1}`;
    Axios.post(url).then(dispatch(toggleTodo(index)));
  },
  removeTodo: index => {
    const url = `http://localhost:8080/api/todo/toggle/${index + 1}`;
    Axios.post(url).then(dispatch(removeTodo(index)));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
