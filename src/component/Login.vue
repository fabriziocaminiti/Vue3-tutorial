<template>
  <div>
    <section
      @click="$emit('close-login')"
      class="z-20 bg-blue-500 h-screen fixed top-0 opacity-50 w-screen"
    ></section>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="z-30 m-auto bg-black p-2 rounded shadow w-1/3">
          <div class="p-2 border-t-2 bg-gradient-to-r from-gray-500 to-blue-400">
            <form class="p-2 my-2" @submit.prevent="submit">
              <h1 class="text-2xl text-center text-gray-50">Login</h1>
              <GoogleLogin @close-login-from-google="close" />
              <p class="mb-3 text-white text-center">Or</p>
              <div class="my-4">
                <label for>Email or Username</label>
                <input
                  ref="newEmailref"
                  v-model="email"
                  class="rounded shadow p-2 w-full"
                  placeholder="enter your email or username"
                />
              </div>
              <div class="my-4">
                <label for>Password</label>
                <input
                  v-model="password"
                  class="rounded shadow p-2 w-full"
                  placeholder="enter your password"
                />
              </div>
              <div class="my-4">
                <button
                  type="submit"
                  class="w-full rounded shadow-md bg-gradient-to-r from-green-400 to-red-400 text-white p-2"
                >
                  <span v-if="!isLoading">Login</span>
                  <span v-else>...</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../utilities/firebase";
import GoogleLogin from "../component/Login/GoogleLogin";
export default {
  components: { GoogleLogin },
  data() {
    return {
      email: "",
      password: "",
      isLoading: false
    };
  },
  mounted() {
    this.$refs.newEmailref.focus();
  },
  methods: {
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch(e => {
          console.log(e);
          this.isLoading = false;
        });
    },
    close() {
      this.$emit("close-login");
    }
  }
};
</script>

<style>
</style>