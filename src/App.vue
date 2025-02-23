<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footering from './components/Footering.vue';
import WritterforReaer from './views/ProfileWritter.vue';

</script>
<template>
   <Navbar/>
<!-- <RouterView/> -->
<keep-alive>
  <router-view></router-view>
</keep-alive>
 <!-- <WritterforReaer/> -->
<!-- <Footering/> -->
</template>
<style scoped>
</style>