<template>
  <table class="table table-hover offset-2 col-8 mt-5">
    <thead>
      <tr>
        <th>完成？</th>
        <th>描述</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(todo, index) in todos" :key="index" :class="todo.done ? 'text-success' : ''">
        <td>
          <input type="checkbox" :checked="todo.done" @change="toggleTodo(index)" />
        </td>
        <td>{{todo.action}}</td>
        <td>
          <button class="btn btn-danger" @click="removeTodo(index)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["todos", "removeTodo", "toggleTodo"]
};
</script>
