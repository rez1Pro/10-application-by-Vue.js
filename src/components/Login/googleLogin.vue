<template>
  <section class="text-center py-5">
    <button @click="googleLogin" class="border p-1 rounded bg-green-200">
      Login with Google
    </button>
    <div class="text-center pt-2">Or</div>
  </section>
</template>

<script>
import firebase from "../../utilities/firebase";
export default {
  methods: {
    googleLogin() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          if (result) {
            window.toastr.success("Congratulations! You are successfully Logged In!");
          }
        });
    },
  },
};
</script>

<style></style>
