import { createStore } from 'redux';

// action types
const ADD = 'add';
const TOGGLE = 'toggle';
const REMOVE = 'remove';
const LOAD = 'load';

// actions
const addTodo = todo => ({ type: ADD, payload: { todo } });
const toggleTodo = index => ({ type: TOGGLE, payload: { index } });
const removeTodo = index => ({ type: REMOVE, payload: { index } });
const loadTodos = todos => ({ type: LOAD, payload: { todos } });

// reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload.todo];
    case TOGGLE:
      return state.map((item, index) => index === action.payload.index ? { ...item, done: !item.done } : item);
    case REMOVE:
      return state.filter((_, index) => index !== action.payload.index);
    case LOAD:
      console.log('loading...')
      return action.payload.todos;
    default:
      return state;
  }
};

// store
const store = createStore(reducer);

export { store, loadTodos, addTodo, toggleTodo, removeTodo };
