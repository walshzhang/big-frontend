import { Todo, AppActionTypes, ADD, TOGGLE, REMOVE, LOAD } from './types';

export const addTodo = (todo: Todo): AppActionTypes => ({
  type: ADD,
  payload: { todo }
});

export const toggleTodo = (index: number): AppActionTypes => ({
  type: TOGGLE,
  payload: { index }
});

export const removeTodo = (index: number): AppActionTypes => ({
  type: REMOVE,
  payload: { index }
});

export const loadTodo = (todos: Todo[]): AppActionTypes => ({
  type: LOAD,
  payload: { todos }
});
