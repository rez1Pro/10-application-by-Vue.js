<template>
  <!-- Modal is included here -->
  <Modal header="Update User Information" v-if="isModalOpen" @close="isModalOpen">
    <div class="w-full">
      <form @submit.prevent="submit()">
        <label for="name">First_Name : </label>
        <input
          class="p-1 my-2 border rounded w-full"
          placeholder="Name"
          type="text"
          id="name"
          v-model="state.form.first_name"
        />
        <label for="last_name">Last_name : </label>
        <input
          class="p-1 my-2 border rounded w-full"
          placeholder="last_name"
          type="text"
          id="last_name"
          v-model="state.form.last_name"
        />
        <label for="email">Email : </label>
        <input
          class="p-1 my-2 border rounded w-full"
          placeholder="Email"
          type="text"
          id="email"
          v-model="state.form.email"
        />
        <label for="avatar">Avatar : </label>
        <input
          class="p-1 my-2 border rounded w-full"
          placeholder="Avatar Link"
          type="text"
          id="avatar"
          v-model="state.form.avatar"
        />
        <button class="p-1 my-1 w-full border rounded bg-green-300" type="submit">
          Create
        </button>
      </form>
    </div>
  </Modal>
</template>

<script>
import { reactive, ref } from "vue";
import Modal from "../../apps/Modal.vue";
export default {
  components: { Modal },
  setup() {
    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        first_name: "Hi",
        last_name: "",
        email: "",
        avatar: "",
      },
    });

    const submit = async () => {
      if (
        !state.form.first_name == "" &&
        !state.form.email == "" &&
        !state.form.avatar == "" &&
        !state.form.last_name == ""
      ) {
        const { data } = await window.axios.put("/users/1", state.form);
        if (data) {
          console.log(data);
          state.form.name = "";
          state.form.email = "";
          state.form.avatar = "";
          isModalOpen.value = false;
        }
      }
    };
    return { state, submit, isModalOpen };
  },
};
</script>

<style></style>
