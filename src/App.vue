<template>
  <Header />
  <router-view></router-view>
  <teleport to="#login-modal">
    <Login />
  </teleport>
</template>
<script>
import Header from "./components/Header.vue";
import Login from "./components/Login.vue";
import firebase from "./utilities/firebase";

export default {
  components: { Login, Header },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setAuthenticatedUser", user);
        this.$store.commit("setIsLoggedIn", true);
        this.$store.commit("setShowLoginModal", false);
      } else {
        this.$store.commit("setAuthenticatedUser", {});
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setShowLoginModal", true);
      }
    });
  },
};
</script>

<style></style>
