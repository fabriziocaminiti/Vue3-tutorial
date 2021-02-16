<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Re-usable Modal</h1>
      <Modal v-if="isModalOpen" @close="isModalOpen=false">
        <h2 class="text-white">Vogliamo andare al pyper</h2>
      </Modal>
      <button
        @click="isModalOpen=true"
        class="rounded border bg-gradient-to-r from-green-400 to-yellow-500 mr-3"
      >Open Modal</button>

      <Modal v-if="secondModalOpen" @close="secondModalOpen=false">
        <h3 class="text-white">Preferiamo polistena</h3>
        <p class="text-white">Sia io che peppino</p>
        <section class="text-white">Gli altri fannno come gli pare</section>
      </Modal>
      <button
        @click="secondModalOpen=true"
        class="rounded border bg-gradient-to-r from-green-400 to-yellow-500 mr-3"
      >Second Modal</button>
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal";
import { ref } from "vue";
export default {
  components: { Modal },
  setup() {
    const isModalOpen = ref(false);
    const secondModalOpen = ref(false);

    return { isModalOpen, secondModalOpen };
  }
};
</script>

<style>
</style>