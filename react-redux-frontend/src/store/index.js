import { createStore } from 'redux';
import Reducer from './reducer';

export default createStore(Reducer);
export { addTodo, loadTodos, removeTodo, toggleTodo } from './actions';
