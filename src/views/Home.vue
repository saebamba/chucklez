<template>
  <div class="home">
    <br>
<br>   
<br>
<br>
<br>
<br>
<div>
 <br>

    <h3>Laughter is a healing medicine! <br>Good vibes on demand, brighten your day as easy as ordering an Uber :)</h3>

<br>
<br>
</div>

<br>

     <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button class="btn" v-if="!$auth.isAuthenticated" @click="login"><strong>Order your first joke!</strong></button>
      <!-- show logout when authenticated -->
      <button class="btn" v-if="$auth.isAuthenticated" @click="logout"><strong>Order your first joke!</strong></button>
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

font-size:40px;
  font-family: 'Courier New', Courier, monospace;

color:black;

}
</style>