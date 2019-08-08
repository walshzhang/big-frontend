import { Todo, AppActionTypes, LOAD, TOGGLE, REMOVE, ADD } from './types';

export const reducer = (state: Todo[] = [], action: AppActionTypes): Todo[] => {
  switch (action.type) {
    case LOAD:
      return action.payload.todos;
    case TOGGLE:
      return state.map((item, idx) => {
        if (idx === action.payload.index) return { ...item, done: !item.done };
        return item;
      });
    case REMOVE:
      return state.filter((_, idx) => idx !== action.payload.index);
    case ADD:
      return [...state, action.payload.todo];
    default:
      return state;
  }
};


