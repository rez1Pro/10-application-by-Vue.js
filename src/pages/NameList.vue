<template>
  <div class="flex w-full">
    <div class="m-auto">
      <h1 class="mb-3 text-3xl text-green-600 text-center font-light font-serif">
        User Name List
        <hr />
      </h1>
      <ul>
        <h2 class="mb-2 text-indigo-400 text-2xl">Total User : {{ totalUser }}</h2>
        <li class="justify-between flex" v-for="(name, index) in names" :key="name">
          <div>
            {{ name }}
          </div>
          <button @click="deleteItem(index)">X</button>
        </li>
        <br />
        <form @submit.prevent="addNew">
          <input
            class="border rounded-sm"
            type="text"
            v-model="newName"
            placeholder="Enter a name...."
          />
          <button
            class="border ml-2 bg-green-300 rounded-sm text-white"
            type="submit"
            :disabled="!newName"
          >
            Add New
          </button>
        </form>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newName: "",
      names: ["Rezwan", "Hossain", "Sajib"],
    };
  },

  computed: {
    totalUser() {
      return this.names.length;
    },
  },

  methods: {
    addNew: function () {
      if (this.newName != "") {
        this.names.unshift(this.newName);
        this.newName = "";
      }
    },

    deleteItem: function (index) {
      this.names = this.names.filter((user, i) => i != index);
    },
  },
};
</script>
