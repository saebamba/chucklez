import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import firebase from 'firebase/compat/app'
import {  firebaseConfig  } from './firebaseconfig'
import 'firebase/compat/firestore'
import 'bootstrap'
import './assets/app.scss'


firebase.initializeApp(firebaseConfig)
Vue.prototype.$firebase = firebase;



export const db = firebase.firestore()

db.collection('orders').get().then(r => {
  r.docs.map(doc => {
    console.log(doc.data());
  });
 })



//Comp API

import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)


// Import the Auth0 configuration
import { domain, clientId } from "../auth_config.json";

// Import the plugin here
import { Auth0Plugin } from "./auth";

// Install the authentication plugin here
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.href = 'https://determined-swanson-6dab1a.netlify.app/about'
    );
  }
});


import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin);


router.beforeEach((to, from, next ) => {
  console.log(to);
  console.log(from);
  if (localStorage.currentorderstatus == "1") {
    router.push("/delivery");
  }
  next();
});


Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
