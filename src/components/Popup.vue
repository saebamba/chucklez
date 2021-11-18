<template>
  
<div class="popup">
    <div class="popup-inner">
         <slot />
      
       
    </div>
    </div>


</template>

<script>

export default {
  data: () => ({ showModal: false }),
};




</script>

<style>

</style>