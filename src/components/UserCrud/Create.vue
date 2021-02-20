<template>
  <div>
    <button class="px-2 py-1 border rounded my-4" @click="isModalOpen=true">Aggiungi villoto</button>
    <teleport to="body">
      <Modal v-if="isModalOpen" @close="isModalOpen=false">
        <h1 class="text-white">Aggiungi Nuovo Utente</h1>
        <section>
          <form @submit.prevent="submit">
            <div class="p-2">
              <label>Utente</label>
              <input
                class="w-full p-2 rounded border"
                v-model="state.form.name"
                placeholder="User Name"
              />
            </div>
            <div class="p-2">
              <label>Email</label>
              <input
                class="w-full p-2 rounded border"
                placeholder="User Email"
                type="email"
                v-model="state.form.email"
              />
            </div>
            <div class="p-2">
              <label>Avatar</label>
              <input
                class="w-full p-2 rounded border"
                placeholder="Avatar Url"
                type="text"
                v-model="state.form.avatar"
              />
            </div>
            <div class="p-2">
              <input
                class="w-full p-2 rounded border hover:bg-green-400"
                type="submit"
                value="Create"
              />
            </div>
          </form>
        </section>
      </Modal>
    </teleport>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import Modal from "../Modal";
import axios from "../../plugins/axios";
export default {
  components: { Modal },
  setup(_, { emit }) {
    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        name: "",
        email: "",
        avatar: ""
      }
    });
    async function submit() {
      const { data } = await axios.post("/users", state.form);
      emit("newUserAdded", data);

      state.form.email = "";
      state.form.name = "";
      state.form.avatar = "";

      isModalOpen.value = false;
    }

    return { isModalOpen, state, submit };
  }
};
</script>

<style>
</style>