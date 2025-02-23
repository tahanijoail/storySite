<script setup>
import DropdownButton from './DropdownButton.vue';
import FancyButtons from './FancyButtons.vue';
import ReadableStoriesMagic from './ReadableStoriesMagic.vue';
import Unorderd from './Unorderd.vue'

import { onMounted, onUnmounted, ref } from 'vue';
const isOpentoggleA = ref(false);
const isOpentoggleM = ref(false);
const isOpentoggleE = ref(false);
const isOpentoggleG = ref(false);
// Close dropdownmenue when clicking outside
const handleClickOutsidetoggleA = (event) => {
  if (!event.target.closest('.dropdowntoggleA')) {
    isOpentoggleA.value = false;
  }
};
const handleClickOutsidetoggleE = (event) => {
  if (!event.target.closest('.dropdowntoggleE')) {
    isOpentoggleE.value = false;
  }
};
const handleClickOutsidetoggleM = (event) => {
  if (!event.target.closest('.dropdowntoggleM')) {
    isOpentoggleM.value = false;
  }
};
const handleClickOutsidetoggleG = (event) => {
  if (!event.target.closest('.dropdowntoggleG')) {
    isOpentoggleG.value = false;
  }
};
onMounted(() => {
  document.addEventListener('click', handleClickOutsidetoggleA);
  document.addEventListener('click', handleClickOutsidetoggleG);
  document.addEventListener('click', handleClickOutsidetoggleE);
  document.addEventListener('click', handleClickOutsidetoggleM);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutsidetoggleA);
  document.removeEventListener('click', handleClickOutsidetoggleG);
  document.removeEventListener('click', handleClickOutsidetoggleE);
  document.removeEventListener('click', handleClickOutsidetoggleM);
});
</script>
<template>
   
    <div class="relative">
        <img src="/images/rb_1086 1.png " alt="" class="absolute w-[52%] h-[550px] left-0 -top-24 -z-10">
    </div>
    <section class="text-center pt-[210px] px-4">
    <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-5">عالم القصص السحري</h1>
    <p class="text-lg text-purple-600 mb-10">استكشف مغامرات ممتعة وخيال بلا حدود!</p>
 
    <!-- Buttons -->
    <div class="flex flex-wrap justify-center gap-4">
         
      <FancyButtons
        @click="isOpentoggleE = !isOpentoggleE"
       py="py-2" text-size="text-lg" class=" flex items-center gap-2 text-white rounded-xl hover:bg-purple-600 dropdowntoggleE">تعليمي <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
        <path d="M15.967 2.43502L9.03241 9.49983L1.9676 2.56524" stroke="#FFB74D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </FancyButtons>
      <FancyButtons
        @click="isOpentoggleM = !isOpentoggleM"
       py="py-2" text-size="text-lg" class=" flex items-center gap-2 text-white rounded-xl hover:bg-purple-600 dropdowntoggleM">مغامرات <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
        <path d="M15.967 2.43502L9.03241 9.49983L1.9676 2.56524" stroke="#FFB74D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></FancyButtons>
      <FancyButtons
        @click="isOpentoggleG = !isOpentoggleG"
       py="py-2" text-size="text-lg" class=" flex items-center gap-2 text-white rounded-xl hover:bg-purple-600 dropdowntoggleG">خيال علمي <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
        <path d="M15.967 2.43502L9.03241 9.49983L1.9676 2.56524" stroke="#FFB74D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></FancyButtons>
      <FancyButtons
        @click="isOpentoggleA = !isOpentoggleA"
       py="py-2" text-size="text-lg" class=" flex items-center gap-2 text-white rounded-xl hover:bg-purple-600 dropdowntoggleA">حيوانات <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
        <path d="M15.967 2.43502L9.03241 9.49983L1.9676 2.56524" stroke="#FFB74D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg></FancyButtons>
        <DropdownButton/>
<div
      v-if="isOpentoggleA"
      class="absolute mt-12 left-[382px] w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
    >
    <Unorderd/>
    </div>
<div
      v-if="isOpentoggleG"
      class="absolute mt-12 left-[544px] w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
    >
    <Unorderd/>
    </div>
<div
      v-if="isOpentoggleM"
      class="absolute mt-12 left-[700px] w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
    >
    <Unorderd/>
    </div>
<div
      v-if="isOpentoggleE"
      class="absolute mt-12 md:right-[445px] w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
    >
    <Unorderd/>
    </div>

    </div>
  
  </section>
  <ReadableStoriesMagic/>

</template>