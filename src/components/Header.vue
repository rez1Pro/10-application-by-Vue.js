<template>
  <nav class="bg-blue-500 py-3 px-2 mb-4">
    <div class="text-white font-normal" style="font-size: 17px">
      <router-link class="pr-3" v-for="item in list" :key="item.to" :to="item.to">
        {{ item.title }}
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "List", to: "/name-list" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
      ],
    };
  },
};
</script>
