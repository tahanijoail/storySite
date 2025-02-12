<script setup>
import { RouterLink } from 'vue-router';
import FancyButtons from './FancyButtons.vue';

import { ref, onMounted, onUnmounted } from 'vue';

const isOpen = ref(false);

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.dropdown')) {
    isOpen.value = false;
  }
};


onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
<template>
      <div class='flex max-lg:ml-auto gap-5 space-x-4 text-sm'>

           
          
<div class="relative inline-block text-right dropdown">
<FancyButtons
@click="isOpen = !isOpen"
text-size="text-xl"
class="hover:bg-purple-700 focus:outline-none"
>
انشاء حساب 
</FancyButtons>

<div
v-if="isOpen"
class="absolute  w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
>
<ul class="py-1">
<li>
<RouterLink to="#" class="block px-4 py-2 text-gray-600 text-base font-semibold  hover:bg-purple-500 hover:text-white rounded-lg">
التسجيل ككاتب</RouterLink>
</li>
<li>
<RouterLink to="#" class="block px-4 py-2 text-gray-600 text-base font-semibold pb-4 hover:bg-purple-500 hover:text-white rounded-lg">
 التسجيل كقارئ
</RouterLink>
</li>
</ul>
</div>
</div>


<RouterLink to="#" class="border border-gray-400 text-gray-600 px-4 py-2 rounded-lg text-xl font-bold hover:bg-purple-500 hover:text-white">تسجيل الدخول</RouterLink>
<button id="toggleOpen" class='lg:hidden'>
 <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path fill-rule="evenodd"
     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
     clip-rule="evenodd"></path>
 </svg>
</button>
</div>
</template>