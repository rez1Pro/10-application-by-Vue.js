<template>
  <section class="border rounded py-2" v-if="!isCodeSend">
    <form @submit.prevent="submit">
      <span class="mx-2">Phone :</span>
      <input type="text" placeholder="+8801700000000" id="phone" v-model="phone" />
      <button class="mx-5 border rounded bg-green-200 p-1">Submit</button>
    </form>
    <div id="recaptcha-container" class="my-2 mx-2"></div>
  </section>
  <section class="border rounded py-2" v-else>
    <form @submit.prevent="verifyNow">
      <span class="mx-2">Verification Code :</span>
      <input type="text" id="phone" v-model="code" />
      <button class="mx-5 border rounded bg-green-200 p-1">Submit</button>
    </form>
  </section>
  <div class="text-center pt-2 pb-2">Or</div>
</template>

<script>
import firebase from "../../utilities/firebase";
export default {
  data() {
    return {
      phone: "+8801797840513",
      code: "",
      isCodeSend: false,
    };
  },
  mounted() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container");
    window.recaptchaVerifier.render().then((widgetId) => {
      window.recaptchaWidgetId = widgetId;
    });
  },
  methods: {
    submit() {
      const appVerifier = window.recaptchaVerifier;
      firebase
        .auth()
        .signInWithPhoneNumber(this.phone, appVerifier)
        .then((confirmationResult) => {
          if ((window.confirmationResult = confirmationResult)) {
            window.toastr.info("Verification Code is successfully Send!");
            this.isCodeSend = true;
          }
        })
        .catch((error) => {
          if (error) {
            this.isCodeSend = false;
          }
        });
    },
    verifyNow() {
      window.confirmationResult
        .confirm(this.code)
        .then((result) => {
          if (result) {
            window.toastr.success("Congratulations! You are successfully Logged In!");
          }
        })
        .catch(() => {
          window.toastr.error("Something wents wrong , Please try again !");
        });
    },
  },
};
</script>

<style></style>
