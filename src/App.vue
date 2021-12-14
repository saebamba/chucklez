<template>
  <div id="app">
    <div id="nav">
     <img src="@/assets/logo23.png" class="image-fit" width="300" height="100">
    </div>
     <main class="App__main">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view/>
      </transition>
    </main>
    <footer>
  <p>Questions? Text (409) 207-8989	for help. </p>
</footer>
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
  font-family: Calibri, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#nav {
  padding: 30px;
  color: white;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #640505;
}

footer {
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  font-size:16px;
color: white;

  
}
</style>
