<template>
  <h1> Your Order has been made!
      <br>
      <br>
<div align=middle>
     <fulfilling-square-spinner
  :animation-duration="2000"
  :size="80"
  color="#FFFFFF"
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
  import {FulfillingSquareSpinner } from 'epic-spinners';
import 'epic-spinners/dist/lib/epic-spinners.min.css'

export default {
  name: "Delivery",
  components: {
    FulfillingSquareSpinner
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
  },
  beforeRouteEnter(to, from, next) {
  
    if (localStorage.bayboon == "banana") {
  
  this.$router.push('About');
} else {
  // doc.data() will be undefined in this case
  next();
}


  },



};
</script>

<style scoped>
h5 {


color: white;
}

h1 {


color: white;
}
</style>