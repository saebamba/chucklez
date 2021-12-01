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


const apple = db.collection('orders').where("cso", "==", "1").get();


console.log(apple);




import { doc, getDoc } from "firebase/firestore";


async function potato() {

const q = localStorage.bayboon;
const docRef = doc(db, 'orders', q);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  
  router.push('Delivery');
} else {
  // doc.data() will be undefined in this case
  localStorage.setItem('bayboon', "banana");
}

}
potato();

 







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
        : window.location.href = 'https://districtchuckles.com/about'
    );
  }
});


import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin);



Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
