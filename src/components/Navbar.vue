<script setup>
import { RouterLink, useRoute } from 'vue-router';
import FancyButtons from './FancyButtons.vue';

import { ref, onMounted, onUnmounted } from 'vue';
import Register_Sign from './Register_Sign.vue';

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
onMounted(async()=>{

var toggleOpen = document.getElementById('toggleOpen');
var toggleClose = document.getElementById('toggleClose');
var collapseMenu = document.getElementById('collapseMenu');

function handleClick() {
  if (collapseMenu.style.display === 'block') {
    collapseMenu.style.display = 'none';
  } else {
    collapseMenu.style.display = 'block';
  }
}

toggleOpen.addEventListener('click', handleClick);
toggleClose.addEventListener('click', handleClick);

  

})
// this functin for make hover when i click on the href on the navbar
const route=useRoute();
const isActiveLink = (routePath)=>{
  
  return route.path===routePath;
}
</script>

<template>
  <header class='flex px-4 sm:px-16 font-[sans-serif]  '>
      <div class='flex flex-wrap items-center justify-between gap-5 w-full'>
        <RouterLink to="#" class=""><img src="/src/assets/اسم وشعار الموقع.png" alt="شعار" class=' w-40 ' /></RouterLink>

        <div id="collapseMenu"
          class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
          <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
            <svg xmlns="../assets/close.svg" class="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
            
          </button>
          <ul
            class='lg:flex gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] 
             max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li class='mb-6 hidden max-lg:block'>
              <RouterLink to="#"><img src="/src/assets/اسم وشعار الموقع.png" alt="شعار" class='w-24' />
              </RouterLink>
            </li>
            <li class='max-lg:py-4 px-4 '>
              <RouterLink to='/'
              :class='[isActiveLink("/")?"text-[#FFB74D]":"text-black" ,"text-xl", "font-semibold"]'>الرئيسية</RouterLink>
            </li>
            <li class='
             max-lg:py-4 px-4'><RouterLink to='/three_five'
                class='  text-black text-xl font-semibold hover:text-[#FFB74D]'>تصفح القصص</RouterLink>
            </li>
            <li class='
             max-lg:py-4 px-4'><RouterLink to='/stories/addNewStory'
                class='  text-black text-xl font-semibold hover:text-[#FFB74D]'>اضافة قصة</RouterLink>
            </li>
            <li class='
             max-lg:py-4 px-4 '><RouterLink to='#'
              class=' text-black text-xl font-semibold hover:text-[#FFB74D]'>الكتاب</RouterLink>
            </li>
            <li class='
             max-lg:py-4 px-4'><RouterLink to='/aboutSite'
              class=' text-black text-xl font-semibold hover:text-[#FFB74D]'>حول الموقع</RouterLink>
            </li>
          </ul>
        </div>

        <Register_Sign/>
      </div>
    </header>
     <!-- searching -->
     
</template>
<style scoped>
li{
  color: rgba(0, 0, 0, 0.789);
}</style>