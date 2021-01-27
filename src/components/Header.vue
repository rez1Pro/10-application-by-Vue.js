<template>
  <nav class="bg-blue-500 py-4 px-8 mb-4">
    <div class="text-white font-normal" style="font-size: 19px">
      <router-link class="pr-3" v-for="item in list" :key="item.to" :to="item.to">
        {{ item.title }}
      </router-link>
      <div
        v-if="!isLoggedIn"
        class="flex float-right cursor-pointer mx-2"
        @click="ShowLoginModal()"
      >
        Login
      </div>
      <div v-else @click="Logout()" class="flex float-right cursor-pointer">Logout</div>
    </div>
  </nav>
</template>

<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      list: [
        { title: "Home", to: "/" },
        { title: "List", to: "/name-list" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Sliders", to: "/sliders" },
        { title: "Calculator", to: "/calculator" },
        { title: "Modals", to: "/reuseable-modals" },
        { title: "Chat", to: "/realtime-chatting" },
        { title: "Crud", to: "/user-crud" },
      ],
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.userInfo.isLoggedIn;
    },
  },
  methods: {
    ShowLoginModal() {
      this.$store.commit("setShowLoginModal", true);
    },
    Logout() {
      firebase.auth().signOut();
    },
  },
};
</script>
