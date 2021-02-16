<template>
  <div>
    <section
      @click="$emit('close')"
      class="z-20 bg-blue-500 h-screen fixed top-0 left-0 opacity-50 w-screen"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-black p-2 rounded shadow w-1/3">
          <div class="p-2 border-t-2 bg-gradient-to-r from-gray-500 to-blue-400">
            <div class="p-2 border">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, { emit }) {
    function close() {
      emit("close");
    }
    return { close };
  }
};
</script>

<style>
</style>