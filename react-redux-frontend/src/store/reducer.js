import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, LOAD_TODOS } from './actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      const mapper = (item, index) =>
        index === action.payload.index ? { ...item, done: !item.done } : item;
      return state.map(mapper);
    case REMOVE_TODO:
      return state.filter((_, index) => index !== action.payload.index);
    case LOAD_TODOS:
      return action.payload;
    default:
      return state;
  }
};
