import React, { Component, Dispatch } from 'react';
import { Todo, AppActionTypes } from './store/types';
import { AppState, toggleTodo, removeTodo, loadTodo } from './store';
import { connect } from 'react-redux';
import Axios from 'axios';

interface Props {
  todos: Todo[];
  toggleTodo: (index: number) => void;
  removeTodo: (index: number) => void;
  loadTodo: () => void;
}

class TodoList extends Component<Props> {
  componentDidMount = () => this.props.loadTodo();

  render() {
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
  }
}

const mapStateToProps = (state: AppState) => ({
  todos: state
});

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>) => ({
  toggleTodo: (index: number) =>
    Axios.post(`http://localhost:8080/api/todo/toggle/${index + 1}`).then(_ =>
      dispatch(toggleTodo(index))
    ),
  removeTodo: (index: number) =>
    Axios.delete(`http://localhost:8080/api/todo/${index + 1}`).then(_ =>
      dispatch(removeTodo(index))
    ),
  loadTodo: () =>
    Axios.get(`http://localhost:8080/api/todo`).then(({ data }) =>
      dispatch(loadTodo(data))
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
