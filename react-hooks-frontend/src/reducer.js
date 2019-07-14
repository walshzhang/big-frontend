import React from 'react';

export const Reducer = (state, action) => {
  switch (action.type) {
    case 'loadTodos': {
      return action.payload;
    }
    case 'addTodo':
      console.log('addTodo');
      return [...state, action.payload];
    case 'toggleTodo':
      const mapper = (item, index) => {
        if (index !== action.payload.index - 1) {
          return item;
        }
        return { ...item, done: !item.done };
      };
      return state.map(mapper);
    case 'removeTodo':
      return state.filter((_, index) => index !== action.payload.index - 1);
    default:
      return state || [];
  }
};

export const Context = React.createContext();
