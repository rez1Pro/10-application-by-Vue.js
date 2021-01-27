<template>
  <div class="w-full flex mt-5">
    <div class="m-auto">
      <h2 class="text-center text-green-600 text-2xl">User-CRUD</h2>
      <hr />
      <!-- User Form will be go here -->
      <UserForm @add-new-user="addNewUser"></UserForm>
      <UserUpdateForm
        :openEditModal="isEditModalOpen"
        :editFormData="state.userUpdatedData"
      ></UserUpdateForm>
      <table class="table-auto mt-3">
        <thead>
          <tr>
            <th class="border rounded px-4">#</th>
            <th class="border rounded px-4">Avatar</th>
            <th class="border rounded px-4">First_name</th>
            <th class="border rounded px-4">Last_name</th>
            <th class="border rounded px-4">Email</th>
            <th class="border rounded px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) of state.users.data" :key="index">
            <td class="border rounded px-4">{{ index + 1 }}</td>
            <td class="border rounded px-4">
              <img width="50" class="rounded-full" :src="user.avatar" :alt="user.name" />
            </td>
            <td class="border rounded px-4">{{ user.first_name }}</td>
            <td class="border rounded px-4">{{ user.last_name }}</td>
            <td class="border rounded px-4">{{ user.email }}</td>
            <td class="border rounded px-4">
              <button class="bg-red-500 p-1 border rounded" @click="destroy(user.id)">
                Delete
              </button>
              <button class="bg-green-500 p-1 border rounded" @click="edit(user.id)">
                Edit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="flex justify-between mt-0.5">
        <button
          class="border rounded p-2"
          @click="prev()"
          :disabled="state.users.page == 1"
          :class="state.users.page == 1 ? 'bg-gray-200' : 'hover:shadow-lg'"
        >
          Prev
        </button>
        <button
          class="border rounded p-2"
          @click="next()"
          :disabled="state.users.page == state.users.total_pages"
          :class="
            state.users.page == state.users.total_pages
              ? 'bg-gray-200'
              : 'hover:shadow-lg'
          "
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import UserForm from "./sub-component/UserForm.vue";
import UserUpdateForm from "./sub-component/UserUpdateForm.vue";
import { onMounted, reactive } from "vue";

export default {
  components: { UserForm, UserUpdateForm },
  setup() {
    const state = reactive({
      users: [],
    });
    onMounted(async () => {
      const { data } = await window.axios.get("/users");
      state.users = data;
    });
    const prev = async () => {
      const { data } = await window.axios.get("/users?page=1");
      state.users = data;
    };
    const next = async () => {
      const { data } = await window.axios.get("/users?page=2");
      state.users = data;
    };
    const destroy = async (id) => {
      const { data } = await window.axios.delete("users/" + id);
      console.log(data);
      state.users.data = state.users.data.filter((user) => user.id !== id);
    };
    function addNewUser(data) {
      state.users.data.push(data);
    }
    function edit(id) {
      const updatedData = state.users.data.filter((user) => user.id == id);
      console.log(updatedData.id);
    }
    return { state, edit, prev, next, destroy, addNewUser };
  },
};
</script>
