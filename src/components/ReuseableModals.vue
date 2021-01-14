<template>
  <div class="flex w-full">
    <div class="m-auto">
      <h1 class="text-3xl text-green-400">Re-useable Modals</h1>
      <hr />
      <div>
        <div>
          <button
            @click="isOpenModal1 = true"
            class="mx-2 border rounded bg-green-600 p-1 my-5"
          >
            Modal-1
          </button>
          <button
            @click="isOpenModal2 = true"
            class="mx-2 border rounded bg-green-600 p-1 my-5"
          >
            Modal-2
          </button>
          <button
            @click="isOpenModal3 = true"
            class="mx-2 border rounded bg-green-600 p-1 my-5"
          >
            Modal-3
          </button>
        </div>
        <Modal v-if="isOpenModal1" @isClose="isOpenModal1 = false"> </Modal>
        <Modal header="Header-2" v-if="isOpenModal2" @isClose="isOpenModal2 = false">
          I am content-2
        </Modal>
        <Modal header="Header-3" v-if="isOpenModal3" @isClose="isOpenModal3 = false">
          I am content-3
        </Modal>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "../apps/Modal.vue";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isOpenModal1 = ref(false);
    const isOpenModal2 = ref(false);
    const isOpenModal3 = ref(false);
    return { isOpenModal1, isOpenModal2, isOpenModal3 };
  },
};
</script>
<style lang=""></style>
