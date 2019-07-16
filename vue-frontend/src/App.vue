<template>
  <div id="app">
    <todo-creator :add-todo="addTodo" />
    <todo-list :todos="todos" :remove-todo="removeTodo" :toggle-todo="toggleTodo" />
  </div>
</template>

<script>
import Axios from "axios";
import TodoCreator from "./components/TodoCreator";
import TodoList from "./components/TodoList";

export default {
  name: "app",
  components: {
    TodoList,
    TodoCreator
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(event, action) {
      event.preventDefault();

      const url = `http://localhost:8080/api/todo`;
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      };
      Axios.post(url, `action=${action}`, config).then(
        this.todos.push({ action, done: false })
      );
    },
    removeTodo(index) {
      Axios.delete(`http://localhost:8080/api/todo/${index + 1}`).then(
        (this.todos = this.todos.filter((_, i) => i !== index))
      );
    },
    toggleTodo(index) {
      Axios.post(`http://localhost:8080/api/todo/toggle/${index + 1}`).then(
        (this.todos = this.todos.map((item, idx) =>
          idx !== index ? item : { ...item, done: !item.done }
        ))
      );
    }
  },
  created() {
    Axios.get("http://localhost:8080/api/todo").then(
      response => (this.todos = response.data)
    );
  }
};
</script>

<style>
</style>
