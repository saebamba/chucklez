<template>
  <div class="home">
    <br>
<br>   
<br>
<br>
<br>
<br>
<div>
<img src="../assets/logo.png" class="image-fit" width="350" height="125">
<br>
<br>
</div>
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

import 'epic-spinners/dist/lib/epic-spinners.min.css'

export default {
  name: "home",
  components: {
    

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
