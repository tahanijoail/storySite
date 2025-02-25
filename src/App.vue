<script setup>
import { RouterView, useRoute } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Footering from './components/Footering.vue';

const route = useRoute();
const hiddenFooterRoutes = [
  "loginForm",
  "createAccountAsWritter",
  "updatePassword",
  "updatePasswordUser",
  "createAccountAsReader",
];
</script>

<template>
  <Navbar />
  <RouterView />
  <Footering v-if="!hiddenFooterRoutes.includes(route.name)" />
</template>
