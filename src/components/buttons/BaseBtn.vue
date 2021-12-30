<template>
  <button :class="buttonClass"
    @click="$emit('btnClicked')"
  >
    <span>{{ btnContent }}</span>    
  </button> 
</template>

<script>
export default {
  props: {
    buttonClass: String,
    btnContent: String
  }
}
</script>

<style scoped>
/* Global button styles */
button {
  border: none;
}
/* Specific button styles */
.standard-button {
  width: 100%;
  padding: 1.5rem;
  border-radius: 5rem;
  color: #fff;
  background-color: #0076b6;
  transition: all .3s ease;
}
.standard-button:hover {
  cursor: pointer;
  background-color: #005d8f;
}
</style>