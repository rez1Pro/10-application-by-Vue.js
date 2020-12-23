<template>
  <Header />
  <div class="w-full flex">
    <NameList />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import NameList from "./components/NameList.vue";
export default {
  components: {
    Header,
    NameList,
  },
};
</script>

<style></style>
