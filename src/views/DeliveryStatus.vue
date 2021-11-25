<template>
  <h1> Your Order has been made!<h4>Unless you came to this page directly without making an order</h4>
      <br>
<br>
<br>
<div align=middle>
     <fingerprint-spinner
  :animation-duration="2000"
  :size="80"
  color="#000000"
/>
</div>

<h5>
 Name on order: {{tester.named}}
 <br>
 <br>
 Location: {{tester.location}}
<br>
<br>
 Delivery person: {{tester.deliveryname}}
 <br>
 <br>
 Order Status: {{tester.status}}
<br>
<br>
<h6>
You will receive order and location details texted to the number you used to login!
</h6>
</h5>
       </h1>
</template>

<script>
  import {FingerprintSpinner } from 'epic-spinners';
import 'epic-spinners/dist/lib/epic-spinners.min.css'

export default {
  name: "Delivery",
  components: {
    FingerprintSpinner
  },
  data() {
    return {
      testCollection: [],
      tester: [],
    };
  },
  mounted() {
    const db = this.$firebase.firestore();
    const apemode = localStorage.bayboon;
    db
      .collection('orders').doc(apemode)
      .onSnapshot((doc) => {
    this.tester = doc.data();
      });
  },
  

beforeMount() {
    window.addEventListener("beforeunload", this.preventNav)
  },

  beforeDestroy() {
    window.removeEventListener("beforeunload", this.preventNav);
  },

  methods: {
    
    preventNav(event) {
          
      if (!localStorage.currentorderstatus == "1") return
      event.preventDefault()
      event.returnValue = ""
    }
  },
  beforeRouteLeave(to, from, next) {
    if (localStorage.currentorderstatus == "1") {
      if (!window.confirm("Closing this page will cancel your order. Are you sure?")) {
        return;
      }
    }
    next();
  }



};
</script>

<style>

</style>