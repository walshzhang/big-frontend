import React from 'react';
import Store from './store';
import { Provider } from 'react-redux';
import TodoCreator from './TodoCreator';
import TodoList from './TodoList';

function App() {
  return (
    <Provider store={Store}>
      <TodoCreator />
      <TodoList />
    </Provider>
  );
}

export default App;
