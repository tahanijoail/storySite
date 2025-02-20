<script setup>
import Footering from '@/components/Footering.vue';
import Hero from '@/components/Hero.vue';
import Navbar from '@/components/Navbar.vue';
import ReadableStories from '@/components/ReadableStories.vue';
import Searching from '@/components/Searching.vue';


</script>
<template>
  <!-- <Navbar/> -->
  <Searching/>
<main>
  <Hero/>
</main>
<ReadableStories/>
<Footering/>
</template>
<style scoped>

.getStarted{
  background-image: url('/images/rb_20999\ 2.png');
  /* height: 100%; */
  background-repeat: no-repeat;
  background-size: contain;
  
}

</style>