<template>
  <div class="flex w-full flex-wrap">
    <div class="mb-2 w-full text-green-400 text-2xl text-center">Mark-Down Text Box</div>
    <hr />
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2">
        <textarea
          ref="input"
          placeholder="Type Some Text Here....."
          class="h-screen border border-gray-700 w-full"
          :value="text"
          @input="update"
        ></textarea>
      </article>
      <article class="w-1/2 border bg-gray-300" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import useDebounce from "../utilities/hooks/useDebounce";
export default {
  data() {
    return {
      text: "",
      debounce: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  mounted() {
    const debounce = useDebounce();
    this.debounce = debounce;
    this.$refs.input.focus();
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
};
</script>

<style></style>
