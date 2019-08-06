<template>
  <div id="app">
    <todo-creator />
    <todo-list />
  </div>
</template>

<script>
import TodoCreator from "./components/TodoCreator";
import TodoList from "./components/TodoList";

export default {
  name: "app",
  components: {
    TodoList,
    TodoCreator
  }
};
</script>
