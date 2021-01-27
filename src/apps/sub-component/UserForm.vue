<template>
  <button class="bg-green-500 px-1 py-1 border rounded my-2" @click="openModal()">
    Add New
  </button>
  <!-- Modal is included here -->

  <Modal header="Add New User" v-if="isModalOpen" @close="isModalOpen = false">
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
//import { useStore } from "vuex";
export default {
  components: { Modal },
  setup(_, contex) {
    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        first_name: "",
        last_name: "",
        email: "",
        avatar: "",
      },
    });
    const openModal = () => {
      isModalOpen.value = true;
    };
    const submit = async () => {
      if (
        !state.form.first_name == "" &&
        !state.form.email == "" &&
        !state.form.avatar == "" &&
        !state.form.last_name == ""
      ) {
        const { data } = await window.axios.post("/users", state.form);
        if (data) {
          contex.emit("add-new-user", data);
          state.form.name = "";
          state.form.email = "";
          state.form.avatar = "";
          isModalOpen.value = false;
        }
      }
    };
    return { state, submit, openModal, isModalOpen };
  },
};
</script>

<style></style>
