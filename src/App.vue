<script setup>
import { RouterView, useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footering from './components/Footering.vue';

const route=useRoute()
</script>
<template>
   <Navbar/>
<RouterView/>
<div v-if="route.name==='loginForm'" class=" hidden">
  <Footering/>
</div>
<div v-else-if="route.name==='createAccountAsWritter'" class=" hidden">
  <Footering/>
</div>
<div v-else-if="route.name==='updatePassword'" class=" hidden">
  <Footering/>
</div>
<div v-else-if="route.name==='updatePasswordUser'" class=" hidden">
  <Footering/>
</div>
<div v-else-if="route.name==='createAccountAsReader'" class=" hidden">
  <Footering/>
</div>
<div v-else> <Footering/></div>
</template>
<style scoped>
</style>