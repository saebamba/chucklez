<template>
  <h1> CURRENTLY RENOVATING </h1>
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

font-size:20px
}

</style>