<template>
  <h1 class="text-3xl font-serif text-green-600 text-center">Sliders Carousel</h1>
  <div class="my-2 m-auto">
    <div v-for="(slider, index) of sliders" :key="slider" class="w-full/">
      <transition name="fade">
        <div
          @mouseover="pauseSlider()"
          @mouseleave="resumeSlider()"
          v-if="currentSlider === index"
          class="w-full absolute"
          :class="slider"
          style="height: 350px"
        ></div>
      </transition>
    </div>
  </div>
  <div class="w-full justify-center flex">
    <div class="m-auto absolute flex" style="margin-top: 325px">
      <div
        v-for="(slider, index) of sliders"
        @click="makeActive(index)"
        :key="index"
        :class="currentSlider === index ? 'bg-gray-500' : 'bg-white'"
        class="rounded-full w-4 h-4 mr-1 cursor-pointer shadow border"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlider: 0,
      sliders: ["bg-green-600", "bg-blue-600", "bg-red-400", "bg-green-300"],
      interval: "",
    };
  },
  methods: {
    sliderTime() {
      this.interval = setInterval(() => {
        this.currentSlider === this.sliders.length - 1
          ? (this.currentSlider = 0)
          : this.currentSlider++;
      }, 3000);
    },
    makeActive(index) {
      return (this.currentSlider = index);
    },
    pauseSlider() {
      clearInterval(this.interval);
    },
    resumeSlider() {
      this.sliderTime();
    },
  },
  mounted() {
    this.sliderTime();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
