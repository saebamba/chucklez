<template>
<div class="container">

<div style="z-index:100; position: fixed; left: 30px; bottom: 150px;background-color: #f95252;border-radius: 25px;padding: 7px;">
  
  <h3 style="font-family: Calibri, sans-serif;color: white; font-size:20px;"> ENTER DELIVERY LOCATION </h3>
   <GmapAutocomplete
        @place_changed='setPlace'
      />
      
       <button class="btn danger"
        @click='addMarker'
      >
        GO
      </button>
      
      
     </div>
  

   <div style="z-index: -1;">
    <GmapMap
      :center='center'
      :zoom='13'
      style='width:100%;  height: 740px; position:absolute;'
      >
  <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
        
      />
      </GmapMap>
 </div>
 

  </div>
</template>

<script>

export default {
  
  data() {
    return {
      center: { lat: 38.90517371824949, lng: -77.06767528785714 },
      currentPlace: null, 
       markers: [],
      places: [],
    }
  },
  
  methods: {
    setPlace(place) {
      this.currentPlace = place;
      const platoto = place.formatted_address;
      const plankoko = place.geometry.location.lat();
      const planwowo = place.geometry.location.lng();
      


      localStorage.setItem('locato', JSON.stringify(platoto));
      localStorage.setItem('plankokolat', JSON.stringify(plankoko));
      localStorage.setItem('planwowolng', JSON.stringify(planwowo));
      

    },
    addMarker() {
      if (this.currentPlace) {
        this.markers = [];
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
        setTimeout(() =>  this.$router.push('/order'), 500);
        
      }
    },
    
  },
};



</script>

<style scoped>




</style>