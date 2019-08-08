import React, { FunctionComponent } from 'react';
import TodoList from './TodoList';
import TodoCreator from './TodoCreator';

const App: FunctionComponent<{}> = () => (
  <div>
    <TodoCreator />
    <TodoList />
  </div>
);

export default App;
