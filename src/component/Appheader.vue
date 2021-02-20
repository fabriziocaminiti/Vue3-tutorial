<template>
  <nav class="bg bg-gradient-to-t from-green-600 to-purple-700 py-5 px-5">
    <router-link
      v-for="item in list"
      :key="item.to"
      class="text-white mr-3"
      :to="item.to"
    >{{item.title}}</router-link>
    <button v-if="isloggedIn" class="mix-2 text-white" @click="logout">Logout</button>
    <button v-else class="mix-2 mr-3 text-white" @click="openLogin">Login</button>
  </nav>
</template>
<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      list: [
        { title: "Pezzoti", to: "/Villoti" },
        { title: "Calendar", to: "/Calendar" },
        { title: "Home", to: "/" },
        { title: "Markdown", to: "/Markdown" },
        { title: "Slider", to: "/Slider" },
        { title: "Calculator", to: "/Calculator" },
        { title: "ReusableModal", to: "/ReusableModal" },
        { title: "Chat", to: "/Chat" },
        { title: "UserCrud", to: "UserCrud" },
        { title: "Tensorflow", to: "Tensorflow" }
      ]
    };
  },
  computed: {
    isloggedIn() {
      return this.$store.state.isloggedIn;
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(res => {
          res;
        })
        .catch(e => {
          e;
        });
    },
    openLogin() {
      this.$store.commit("setLogin", true);
    }
  }
};
</script>

<style>
</style>