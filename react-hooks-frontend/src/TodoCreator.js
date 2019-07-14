import React, { useContext, useState } from 'react';
import { Context } from './reducer';
import Axios from 'axios';

export const TodoCreator = () => {
  const [action, setAction] = useState('');
  const dispatch = useContext(Context);

  const changeInput = action => {
    setAction(action);
  };

  const addTodo = (event, action) => {
    event.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    const url = `http://localhost:8080/api/todo`;
    Axios.post(url, `action=${action}`, config).then(
      dispatch({ type: 'addTodo', payload: { action, done: false } })
    );
  };

  return (
    <form className='form-inline offset-2 col-8 px-0  mt-3'>
      <input
        type='text'
        className='form-control'
        style={{ width: '88%' }}
        value={action}
        onChange={e => changeInput(e.target.value)}
      />
      <button
        className='btn btn-primary ml-2'
        style={{ width: '10%' }}
        onClick={event => addTodo(event, action)}
      >
        添加
      </button>
    </form>
  );
};
