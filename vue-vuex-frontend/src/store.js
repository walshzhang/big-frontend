import Vuex from 'vuex';
import Vue from 'vue';
import Axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    toggleTodo(state, index) {
      state.todos = state.todos.map((item, idx) =>
        idx === index ? { ...item, done: !item.done } : item
      );
    },
    removeTodo(state, index) {
      state.todos = state.todos.filter((_, idx) => idx !== index);
    },
    loadTodos(state, todos) {
      state.todos = todos;
    }
  },
  actions: {
    toggleTodo({ commit }, index) {
      Axios.post(`http://localhost:8080/api/todo/toggle/${index + 1}`).then(
        commit('toggleTodo', index)
      );
    },
    removeTodo({ commit }, index) {
      Axios.delete(`http://localhost:8080/api/todo/${index + 1}`).then(
        commit('removeTodo', index)
      );
    }
  }
});

export { store };
