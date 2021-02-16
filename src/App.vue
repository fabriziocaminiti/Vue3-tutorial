<template>
  <div>
    <Appheader @open-login="isLoginOpen=true" />
    <router-view></router-view>
    <teleport to="body">
      <Login v-if="isLoginOpen" @close-login="isLoginOpen=false" />
    </teleport>
  </div>
</template>


<script>
import Appheader from "./component/Appheader";
import Login from "./component/Login";
import firebase from "./utilities/firebase";

export default {
  data() {
    return {
      isLoginOpen: false
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.commit("setisloggedIn", true);
        this.$store.commit("setAuthUser", user);
      } else {
        this.$store.commit("setisloggedIn", false);
        this.$store.commit("setAuthUser", {});
      }
    });
  },
  components: { Appheader, Login }
};
</script>
<style>
</style>