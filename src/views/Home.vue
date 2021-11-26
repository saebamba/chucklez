<template>
  <div class="home">
    <br>
<br>   
<br>

<img src="../assets/logo.png" width="600" height="200">
    <HelloWorld msg="DISTRICT CHUCKLES" />

    <h3>Laughter is a healing medicine! <br>Good vibes on demand, brighten your day as easy as ordering an Uber :)</h3>

<br>

<br>

     <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button class="btn default" v-if="!$auth.isAuthenticated" @click="login">Order your first joke!</button>
      <!-- show logout when authenticated -->
      <button class="btn default" v-if="$auth.isAuthenticated" @click="logout">Order your first joke!</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import 'epic-spinners/dist/lib/epic-spinners.min.css'

export default {
  name: "home",
  components: {
    HelloWorld,

  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>
