<template>{{ users }}</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "axios";
export default {
  setup() {
    const state = reactive({
      users: [],
    });
    onMounted(async () => {
      const { data } = await axios.get("https://reqres.in/api/users");
      state.users = data;
    });
    return state;
  },
};
</script>
