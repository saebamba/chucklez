<template>
  <div id="app">
   <div id="nav">
     <div align="middle">
      <img src="@/assets/logo.png" class="image-fit" width="300" height="200">
    </div>
  
     <main class="App__main">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>
      
    </main>
    <div id="footer">
     <div align="middle">
      Need help? <strong>Get assistance.</strong>
    </div>
    </div>
  </div>




</template>



<style>

.fade-enter-active,
.fade-leave-active {
  transition-duration: 1.55s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 5%
}

#app {
  font-family: 'Courier New', Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #640505;
}

#footer {
  text-align: center;
  padding: 25px;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
   position: absolute;
  bottom: 0px;
}
</style>
