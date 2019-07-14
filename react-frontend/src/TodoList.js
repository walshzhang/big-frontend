import React from 'react';

export const TodoList = ({ todos, removeTodo, toggleTodo }) => (
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
