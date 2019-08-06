<template>
  <form class="form-inline offset-2 col-8 px-0 mt-3">
    <input type="text" class="form-control" style="width: 88%;" v-model="action" />
    <button
      class="btn btn-primary ml-2"
      style="width: 10%;"
      @click="event => addTodo(event, action)"
    >添加</button>
  </form>
</template>

<script>
import Axios from "axios";

export default {
  name: "TodoCreator",
  data() {
    return { action: "" };
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
        this.$store.commit("addTodo", { action, done: false })
      );

      this.action = "";
    }
  }
};
</script>

