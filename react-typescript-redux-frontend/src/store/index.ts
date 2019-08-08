import { createStore } from 'redux';
import { reducer } from './reducer';
export { addTodo, toggleTodo, removeTodo, loadTodo } from './actions'
export default createStore(reducer);

export type AppState = ReturnType<typeof reducer>;
