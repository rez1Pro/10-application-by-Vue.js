<template>
  <div class="flex w-full">
    <div class="m-auto">
      <h1 class="text-3xl mb-2 text-center text-green-500">Real-Time Chatting</h1>
      <hr />
      <section class="w-80 h-full">
        <div class="border h-72 rounded border-gray-500 p-1 bg-gray-100 w-full">
          <div v-for="chat in state.chats" :key="chat" class="w-full">
            <div :class="chat.id === state.userId ? 'text-right' : ''">
              {{ chat.message }}
            </div>
          </div>
        </div>
      </section>
      <div class="relative rounded-md border-gray-400 shadow">
        <input
          type="text"
          class="w-full p-3 border rounded"
          placeholder="Type your messages....."
          v-model="state.messages"
          @keydown.enter="sendNow()"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import firebase from "../utilities/firebase";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const state = reactive({
      chats: {},
      messages: "",
      userId: "",
    });
    let db = firebase.database();
    let collection = db.ref("chats");
    onMounted(() => {
      state.userId = store.state.userInfo.AuthenticatedUser.uid;
      collection.on("value", (snapshot) => {
        state.chats = snapshot.val();
      });
    });
    const sendNow = () => {
      collection.push({ id: state.userId, message: state.messages });
      state.messages = "";
    };
    return { state, sendNow };
  },
};
</script>

<style></style>
