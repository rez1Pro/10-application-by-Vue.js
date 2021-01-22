<template>
  <transition name="slide-fade">
    <teleport to="body">
      <section v-if="close" @click="close">
        <div class="bg-gray-400 w-screen h-screen fixed top-0 opacity-50 z-20"></div>
      </section>
      <section class="absolute inset-0">
        <div class="flex h-1/2">
          <div class="m-auto shadow bg-white p-2 rounded w-1/3 z-30">
            <div class="border rounded p-2">
              <section>
                <h1 class="p-1 text-2xl text-green-400 text-center">
                  {{ header }}
                </h1>
                <hr />
                <div class="p-1 my-3">
                  <slot> Your all the content will be gone here ....... </slot>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </teleport>
  </transition>
</template>

<script>
export default {
  props: {
    header: {
      default: "set header by props = 'header'",
      type: String,
    },
  },
  setup(_, context) {
    const close = () => context.emit("isClose");
    return { close };
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
/* This is modal css */
.my-3 {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}
.text-center {
  text-align: center;
}
.text-green-400 {
  --tw-text-opacity: 1;
  color: rgba(52, 211, 153, var(--tw-text-opacity));
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.p-1 {
  padding: 0.25rem;
}
.z-30 {
  z-index: 30;
}
.w-1\/3 {
  width: 33.333333%;
}
.rounded {
  border-radius: 0.25rem;
}
.p-2 {
  padding: 0.5rem;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
    var(--tw-shadow);
}
.m-auto {
  margin: auto;
}
.h-1\/2 {
  height: 50%;
}
.flex {
  display: flex;
}
.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.absolute {
  position: absolute;
}
.z-20 {
  z-index: 20;
}
.opacity-50 {
  opacity: 0.5;
}
.top-0 {
  top: 0px;
}
.bg-gray-400 {
  --tw-bg-opacity: 1;
  background-color: rgba(156, 163, 175, var(--tw-bg-opacity));
}
.w-screen {
  width: 100vw;
}
.h-screen {
  height: 100vh;
}
.fixed {
  position: fixed;
}
</style>
