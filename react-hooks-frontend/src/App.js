import React, { useReducer, useEffect } from 'react';
import { TodoCreator } from './TodoCreator';
import { TodoList } from './TodoList';
import { Reducer, Context } from './reducer';
import Axios from 'axios';

const App = _ => {
  const [todos, dispatch] = useReducer(Reducer, []);

  useEffect(() => {
    const url = `http://localhost:8080/api/todo`;
    const effect = async () => {
      const response = await Axios.get(url);
      dispatch({ type: 'loadTodos', payload: response.data });
    };
    effect();
  }, []);

  return (
    <Context.Provider value={dispatch}>
      <TodoCreator />
      <TodoList todos={todos} />
    </Context.Provider>
  );
};

export default App;
