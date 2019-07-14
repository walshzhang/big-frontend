import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, LOAD_TODOS } from './actionTypes';

export const addTodo = action => ({
  type: ADD_TODO,
  payload: { action, done: false }
});

export const toggleTodo = index => ({ type: TOGGLE_TODO, payload: { index } });

export const removeTodo = index => ({ type: REMOVE_TODO, payload: { index } });

export const loadTodos = todos => ({ type: LOAD_TODOS, payload: todos });
