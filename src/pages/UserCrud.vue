<template>
  <div>
    <section class="flex w-full">
      <div class="m-auto">
        <div>
          <Create @newUserAdded="addUser" />
          <table class="mt-4">
            <thead>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">Nome</th>
              <th class="px-4 py-2 border">Mail</th>
              <th class="px-4 py-2 border">Avatar</th>
              <th class="px-4 py-2 border">Action</th>
            </thead>
            <tbody>
              <tr v-for="user in state.users" :key="user.id">
                <td class="border px-4 py-2">{{user._id}}</td>
                <td class="border px-4 py-2">{{user.name}}</td>
                <td class="border px-4 py-2">{{user.email}}</td>
                <td class="border px-4 py-2">
                  <img :src="user.avatar" :alt="user.name" width="80" class="rounded-full" />
                </td>
                <td class="border px-4 py-2">
                  <button
                    class="px-2 py-1 bg-red-600 rounded text-white"
                    @click="destroy(user._id)"
                  >Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-between">
            <button class="px-3 py-2 border rounded hover:shadow" @click="prev">Prev</button>
            <button class="px-3 py-2 border rounded hover:shadow" @click="next">Next</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import axios from "../plugins/axios";
import Create from "../components/UserCrud/Create";
export default {
  components: { Create },
  setup() {
    const state = reactive({
      users: []
    });
    onMounted(async () => {
      const { data } = await axios.get(`/users`);
      state.users = data;
    });
    async function next() {
      const { data } = await axios.get(`/users?page=2`);
      state.users = data;
    }
    async function prev() {
      const { data } = await axios.get(`/users?page=1`);
      state.users = data;
    }
    async function destroy(id) {
      await axios.delete(`/users/${id}`);
      state.users = state.users.filter(user => user._id !== id);
    }

    function addUser(data) {
      state.users.push(data);
    }
    return { state, next, prev, destroy, addUser };
  }
};
</script>

<style>
</style>