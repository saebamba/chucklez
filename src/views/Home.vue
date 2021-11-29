<template>
  <div class="home">
    <br>
<br>   
<br>
<br>
<br>
<br>
<div>
<img src="../assets/logo.png" class="image-fit" width="400" height="200">
<br>
<br>
</div>

<br>

     <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button class="btn danger" v-if="!$auth.isAuthenticated" @click="login">Order your first joke!</button>
      <!-- show logout when authenticated -->
      <button class="btn danger" v-if="$auth.isAuthenticated" @click="logout">Order your first joke!</button>
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


<style scoped>

h3 {

font-size:20px;

font-family: apertura, sans-serif;

color: #640505;

}
</style>