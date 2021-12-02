<template>
  <div class="about">
    
<br>
<br>   
<br>

<img src="../assets/logo23.png" width="300" height="200">
<br>
    <h1>Choose your type of joke!</h1>
    <br>
    <br>
<button  class="btn success" @click="showModal = true">Giggle 50$</button>
<Popup v-if="showModal" @close="showModal = false">
  <div align=left>
<button v-if="closetc" class="btn-small" @click="showModal = false">X</button>
</div>
<h2>Cost of Joke: 50$ </h2>
<br>
<br>
<br>
<form @submit=" bayboonic(); addLocation(named, title, location); $router.push('Delivery')" v-on:submit.prevent>
    <strong>Fullname</strong>:<input v-model="named" placeholder="Name as appears on ID">
    <br>
    <br>
    <strong>Location</strong>:<input type="radio" v-model="location" id="huey" name="foggy" value="FoggyBottom">
  <label for="huey">FoggyBottom</label>
   <input v-model="location" type="radio" id="huey" name="foggy" value="Georgetown">
  <label for="huey">Georgetown</label>
  <br><input type="radio" v-model="location" id="huey" name="adams" value="AdamsMorgan">
  <label for="huey">AdamsMorgan</label>

  <br>
  <h6>(Your EXACT pickup location will be arranged via text.)</h6>


   <br>
   <br>
   <br>
   <br>

    <div>
      <label for="vehicle1"> I agree to DistrictChuckles terms and conditions and confirm I am over 21.</label>
<input @click="isHidden = !isHidden, closetc = !closetc" type="checkbox" id="vehicle1" name="vehicle1"><br>
<br>
 <button v-if="isHidden" type="submit">Confirm Order</button>
      </div>
</form>
 
 </Popup> 
<button class="btn info" @click="showModal1 = true">Chuckle 90$</button>
<Popup v-if="showModal1" @close="showModal1 = false">
  <div align=left>
<button v-if="closetc1" class="btn-small" @click="showModal1 = false">X</button>
</div>
<h2>Cost of Joke: 100$ </h2>
<br>
<br>
<br>

<form @submit=" bayboonic(); addLocation1(named, title1, location); $router.push('Delivery')" v-on:submit.prevent>
    <strong>Fullname</strong>:<input v-model="named" placeholder="Name as appears on ID">
    <br>
    <br>
    <strong>Location</strong>:<input type="radio" v-model="location" id="huey" name="foggy" value="FoggyBottom">
  <label for="huey">FoggyBottom</label>
   <input v-model="location" type="radio" id="huey" name="foggy" value="Georgetown">
  <label for="huey">Georgetown</label>
  <br><input type="radio" v-model="location" id="huey" name="adams" value="AdamsMorgan">
  <label for="huey">AdamsMorgan</label>

  <br>
  <h6>(Your EXACT pickup location will be arranged via text.)</h6>

   <br>
   <br>
   <br>
   <br>

    <div>
      <label for="vehicle2"> I agree to DistrictChuckles terms and conditions and confirm I am over 21.</label>
<input @click="isHidden1 = !isHidden1, closetc1 = !closetc1" type="checkbox" id="vehicle2" name="vehicle2"><br>
<br>
 <button v-if="isHidden1" type="submit">Confirm Order</button>
      </div>
</form>
 
 </Popup> 

<button class="btn warning" @click="showModal2 = true">Guffaw 160$</button>

<Popup v-if="showModal2" @close="showModal2 = false">
  <div align=left>
<button v-if="closetc2" class="btn-small" @click="showModal2 = false">X</button>
</div>
<h2>Cost of Joke: 160$ </h2>
<br>
<br>
<br>

<form @submit=" bayboonic(); addLocation2(named, title2, location); $router.push('Delivery')" v-on:submit.prevent>
    <strong>Fullname</strong>:<input v-model="named" placeholder="Name as appears on ID">
    <br>
    <br>
    <strong>Location</strong>:<input type="radio" v-model="location" id="huey" name="foggy" value="FoggyBottom">
  <label for="huey">FoggyBottom</label>
   <input v-model="location" type="radio" id="huey" name="foggy" value="Georgetown">
  <label for="huey">Georgetown</label>
  <br><input type="radio" v-model="location" id="huey" name="adams" value="AdamsMorgan">
  <label for="huey">AdamsMorgan</label>
   
   <br>
  <h6>(Your EXACT pickup location will be arranged via text.)</h6>

   <br>
   <br>
   <br>
   <br>


    <div>
      <label for="vehicle3"> I agree to DistrictChuckles terms and conditions and confirm I am over 21.</label>
<input @click="isHidden2 = !isHidden2, closetc2 = !closetc2" type="checkbox" id="vehicle3" name="vehicle3"><br>
<br>
 <button v-if="isHidden2" type="submit">Confirm Order</button>
      </div>
</form>
 
 </Popup> 


<button class="btn danger"  @click="showModal3 = true">Knee-Slapper 260$</button>

<Popup v-if="showModal3" @close="showModal3 = false">
  <div align=left>
<button v-if="closetc3" class="btn-small" @click="showModal3 = false">X</button>
</div>
<h2>Cost of Joke: 260$ </h2>
<br>
<br>
<br>

<form @submit=" bayboonic(); addLocation3(named, title3, location); $router.push('Delivery')" v-on:submit.prevent>
    <strong>Fullname</strong>:<input v-model="named" placeholder="Name as appears on ID">
    <br>
    <br>
    <strong>Location</strong>:<input type="radio" v-model="location" id="huey" name="foggy" value="FoggyBottom">
  <label for="huey">FoggyBottom</label>
   <input v-model="location" type="radio" id="huey" name="foggy" value="Georgetown">
  <label for="huey">Georgetown</label>
  <br><input type="radio" v-model="location" id="huey" name="adams" value="AdamsMorgan">
  <label for="huey">AdamsMorgan</label>
    
    <br>
  <h6>(Your EXACT pickup location will be arranged via text.)</h6>

   <br>
   <br>
   <br>
   <br>
    <div>
      <label for="vehicle4"> I agree to DistrictChuckles terms and conditions and confirm I am over 21.</label>
<input @click="isHidden3 = !isHidden3, closetc3 = !closetc3" type="checkbox" id="vehicle4" name="vehicle4"><br>
<br>
 <button v-if="isHidden3" type="submit">Confirm Order</button>
      </div>
</form>
 
 </Popup> 

  </div>
</template>


<script>





import Popup from "@/components/Popup.vue";
import { db } from '../main'



export default {
  name: "about",
  components: {
    Popup
  },
  data: () => ({ 
      showModal: false,
      showModal1: false,
      showModal2: false,
      showModal3: false,
      closetc: true,
      closetc1: true,
      closetc2: true,
      closetc3: true,
      isHidden: false,
      isHidden1: false,
      isHidden2: false,
      isHidden3: false,
          titleName: localStorage.getItem('titleName'),
                orders: [],
                named: '',
                title: 'Frolic 60$',
                title1: 'Bufoonery 100$',
                title2: 'Whimsy 150$',
                title3: 'Royale 250$',
                location: '',
                published: true,
           
                


    }),
    firestore () {
    return {
      orders: db.collection('orders')
    }
  },
   methods: { 

      bayboonic() {
      const nibba = (Math.random() + 1).toString(36).substring(7);
      const currentorderstatus = "1"
      localStorage.setItem('bayboon', nibba)
      localStorage.setItem('currentorderstatus', currentorderstatus)
    },
    addLocation (named, title, location) {      // <-- and here 
    const time = Date().toLocaleString();
    const vueid = localStorage.bayboon;
    const status = "Pending";
    const number = this.$auth.user.name;
      db.collection('orders').doc(vueid).set({ named, title, time, location, number, status})
    },
     addLocation1 (named, title1, location) {      // <-- and here 
    const time = Date().toLocaleString();
    const vueid = localStorage.bayboon;
    const number = this.$auth.user.name;
    const status = "Pending";
      db.collection('orders').doc(vueid).set({ named, title1, time, location, number, status})
    },
     addLocation2 (named, title2, location) {      // <-- and here 
    const time = Date().toLocaleString();
    const vueid = localStorage.bayboon;
    const number = this.$auth.user.name;
    const status = "Pending";
      db.collection('orders').doc(vueid).set({ named, title2, time, location, number, status})
    },
     addLocation3 (named, title3, location) {      // <-- and here 
    const time = Date().toLocaleString();
    const vueid = localStorage.bayboon;
    const number = this.$auth.user.name;  
    const status = "Pending";
      db.collection('orders').doc(vueid).set({ named, title3, time, location, number, status})
    },
   
  },
    watch: {
    titleName(newTitleName) {
      localStorage.setItem('titleName', newTitleName)
    },
    deep: true
    },
};


localStorage.message = "hello world";
localStorage.count = localStorage.count ? +localStorage.count + 1 : 1;

console.log(
  `Important message (displayed ${localStorage.count} times): ${localStorage.message}`
);



</script>










