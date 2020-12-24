<template>
  <Header />
  <div class="w-full flex">
    <Calendar />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Calendar from "./components/Calendar.vue";
//import NameList from "./components/NameList.vue";
export default {
  components: {
    Header,
    Calendar,
  },
};
</script>

<style></style>
