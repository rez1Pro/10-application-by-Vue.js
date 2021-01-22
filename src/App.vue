<template>
  <Header :authCheck="isLoggin" @login-button="openModal" />
  <router-view></router-view>
  <teleport to="#login-modal">
    <Login v-if="showModal" @close-login-model="showModal = false" />
  </teleport>
</template>
<script>
import Header from "./components/Header.vue";
import Login from "./components/Login.vue";
import firebase from "./utilities/firebase";

export default {
  components: { Login, Header },
  data() {
    return {
      showModal: false,
      isLoggin: false,
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setAuthenticatedUser", user);
        this.isLoggin = this.$store.state.userInfo.isLoggedIn;
        this.showModal = false;
      } else {
        this.isLoggin = false;
        this.showModal = console.log(this.$store.getters);
      }
    });
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
  },
};
</script>

<style></style>
