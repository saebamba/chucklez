<template>
<div class="box">
 <div class="home">
    

<br>

<img src="@/assets/logo23.png" class="image-fit" width="380" height="150">
<br>
<br>
<br>
<br>
<h3>Start chuckling.<br>As easy as calling a Lyft!</h3>
     <br>
<br>
<br>
<br>
<br>


     <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button class="btn salmon" v-if="!$auth.isAuthenticated" @click="login">Login</button>
      <!-- show logout when authenticated -->
      <button class="btn salmon" v-if="$auth.isAuthenticated" @click="logout">Login</button>
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

font-size:45px;
color: white;
padding: 0;
margin: 0;
}

#box {

margin:auto;
margin-top:150px;
width:1500px;
height:500px;
max-width: 100%;

}


</style>