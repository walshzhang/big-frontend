export const ADD = 'add';
export const TOGGLE = 'toggle';
export const REMOVE = 'remove';
export const LOAD = 'load';

export interface Todo {
  action: string;
  done: boolean;
}

interface AddTodoAction {
  type: typeof ADD;
  payload: { todo: Todo };
}

interface ToggleTodoAction {
  type: typeof TOGGLE;
  payload: { index: number };
}

interface RemoveTodoAction {
  type: typeof REMOVE;
  payload: { index: number };
}

interface LoadTodoAction {
  type: typeof LOAD;
  payload: { todos: Todo[] };
}

export type AppActionTypes =
  | AddTodoAction
  | ToggleTodoAction
  | RemoveTodoAction
  | LoadTodoAction;
