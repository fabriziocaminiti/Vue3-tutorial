<template>
  <div>
    <section class="my-5 text-center">
      <button
        class="text-center text-white border rounded px-2 shadow"
        @click="loginwithGoogle"
      >Login with Google</button>
    </section>
  </div>
</template>

<script>
import firebase from "../../utilities/firebase";
export default {
  methods: {
    loginwithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$emit("close-login-from-google");
        });
    }
  }
};
</script>

<style>
</style>