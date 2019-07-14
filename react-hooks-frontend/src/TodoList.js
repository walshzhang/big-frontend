import React, { useContext } from 'react';
import { Context } from './reducer';
import Axios from 'axios';

export const TodoList = ({ todos }) => {
  const dispatch = useContext(Context);

  const removeTodo = index => {
    const url = `http://localhost:8080/api/todo/${index}`;
    Axios.delete(url).then(
      dispatch({ type: 'removeTodo', payload: { index } })
    );
  };

  const toggleTodo = index => {
    const url = `http://localhost:8080/api/todo/toggle/${index}`;
    Axios.post(url).then(dispatch({ type: 'toggleTodo', payload: { index } }));
  };

  const rows = todos.map((item, index) => (
    <tr key={index} className={item.done ? 'text-success' : ''}>
      <td>
        <input
          type='checkbox'
          onChange={() => toggleTodo(index + 1)}
          checked={item.done}
        />
      </td>
      <td>{item.action}</td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => removeTodo(index + 1)}
        >
          删除
        </button>
      </td>
    </tr>
  ));

  return (
    <table className='table table-hover offset-2 col-8 mt-5'>
      <thead>
        <tr>
          <th>完成？</th>
          <th>描述</th>
          <th>操作</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
};
