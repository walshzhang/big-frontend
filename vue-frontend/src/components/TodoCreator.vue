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
export default {
  props: ["addTodo"],
  data() {
    return {
      action: ""
    };
  }
};
</script>

