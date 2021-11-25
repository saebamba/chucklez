<template>
  <div class="home">
    
    <HelloWorld msg="DISTRICT CHUCKLES" />
    <img alt="Vue logo" src="../assets/logo.png" width="300" height="200">
    <br>
<br>
    <h3>Laughter is a healing medicine! <br>Good vibes on demand, brighten your day as easy as ordering an Uber :)</h3>

<br>
<div align=middle>
<atom-spinner 
  :animation-duration="1000"
  :size="60"
  color="#8B0000"
/>
</div>
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
  import {AtomSpinner} from 'epic-spinners';
import 'epic-spinners/dist/lib/epic-spinners.min.css'

export default {
  name: "home",
  components: {
    HelloWorld,
    AtomSpinner
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
