<template>
  <section
    @click="close()"
    class="bg-gray-500 z-20 w-screen h-screen fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto p-2 z-30 bg-gray-100 rounded shadow">
        <div class="p-3 border">
          <h1 class="text-center text-green-400 text-3xl mb-2">Login</h1>
          <hr />
          <!-- Google Login go here -->
          <google-login></google-login>
          <phone-login></phone-login>
          <form @submit.prevent="submit">
            <div class="mb-1">
              <label for="emailOrUsername" class="mb-2" style="font-size: 18px"
                >Email or Username</label
              >
              <input
                ref="input"
                v-model="email"
                class="rounded p-4 shadow-2xl w-full"
                type="email"
                id="emailOrUsername"
                placeholder="Enter Email or Username"
              />
            </div>
            <div class="mb-3">
              <label for="emailOrUsername" style="font-size: 18px" class="mb-2"
                >Password</label
              >
              <input
                v-model="password"
                class="rounded p-4 shadow-2xl w-full"
                type="password"
                id="emailOrUsername"
                placeholder="Enter Password "
              />
            </div>
            <div>
              <button
                type="submit"
                class="p-3 text-white w-full rounded cursor-pointer bg-green-300"
              >
                <span v-if="!isLoading">Login</span>
                <span v-else>⏳</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import googleLogin from "../components/Login/googleLogin.vue";
import phoneLogin from "../components/Login/phoneLogin.vue";
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      email: "programmerrezwan@gmail.com",
      password: "123456",
      isLoading: false,
    };
  },
  components: { googleLogin, phoneLogin },
  mounted() {
    this.$refs.input.focus();
  },
  methods: {
    close() {
      this.$emit("close-login-model");
    },
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          if (user) {
            this.email = "";
            this.password = "";
            this.isLoading = false;
            this.close();
            window.toastr.success("Congratulations! You are successfully Logged In!");
          }
        })
        .catch((error) => {
          this.isLoading = true;
          if (error) {
            this.isLoading = false;
            window.toastr.error("Email Or Password Wrong!");
          }
        });
    },
  },
};
</script>
