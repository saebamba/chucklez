<template>
<div class="box">
 <div class="home">
    


<h3>Laughter is a healing medicine. <br>As EASY as ordering a Lyft!</h3>

<br>

     <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button class="btn salmon" v-if="!$auth.isAuthenticated" @click="login">Start Laughing!</button>
      <!-- show logout when authenticated -->
      <button class="btn salmon" v-if="$auth.isAuthenticated" @click="logout">Start Laughing!</button>
    </div>
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

font-size:50px;
color: white;
}

#box {

margin:auto;
margin-top:150px;
width:1500px;
height:500px;
max-width: 100%;

}


</style>