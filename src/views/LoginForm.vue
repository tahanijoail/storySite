<script setup>
import { RouterLink } from 'vue-router';
import FancyButtons from '../components/FancyButtons.vue';

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
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        <!-- الجانب الأيسر -->
       
        <!-- الجانب الأيمن -->
        <div class="p-8 md:w-1/2 w-full">
          <h2 class="text-2xl font-bold text-[#8858BB] text-center">تسجيل دخول</h2>
          
          <div class="mt-6 space-y-4">
            <div>
              <label class="block text-gray-700">ادخل البريد الإلكتروني</label>
              <input type="email" class="w-full mt-1 p-3 bg-gray-100 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="البريد الإلكتروني" />
            </div>
            <div>
              <label class="block text-gray-700">ادخل كلمة المرور</label>
              <input type="password" class="w-full mt-1 p-3 bg-gray-100 border text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="كلمة المرور" />
            </div>
            <p class="text-right text-sm text-gray-500 cursor-pointer hover:underline"><RouterLink to="/updatePassword">هل نسيت كلمة المرور؟</RouterLink></p>
            
            <button class="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
              تسجيل
            </button>
  
            <div class="flex items-center my-4">
              <div class="flex-1 border-t border-gray-300"></div>
              <p class="px-2 text-gray-500">أو سجل دخول عبر</p>
              <div class="flex-1 border-t border-gray-300"></div>
            </div>
  
            
            <button class="flex items-center text-gray-900 gap-1 justify-center w-full py-2 border rounded-lg hover:bg-gray-100 transition">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" class="w-5 h-5 mr-2" />
              Facebook
            </button>
            <button class="flex items-center text-gray-900 gap-1 justify-center w-full py-2 border rounded-lg hover:bg-gray-100 transition">
              <img src="/images/Group.png" class="w-5 h-5 mr-2" />
              Google
            </button>
          </div>
        </div>
        <div class="bg-purple-600 text-white p-8 md:w-1/2 flex flex-col justify-center items-center bg">
          <h2 class="text-3xl font-bold">مرحباً بك</h2>
          <p class="mt-2">ليس لديك حساب؟</p>
          
          <div class="relative inline-block text-right dropdown">
            <!-- <div class="bg-[#8858BB] text-white p-8 md:w-1/2 flex flex-col justify-center items-center bg"> -->
            <FancyButtons
        @click="isOpen = !isOpen"
        text-size="text-lg"
        class=" mt-4 px-6 py-1 border bg-transparent border-[#FFB74D] rounded-lg hover:bg-white hover:text-purple-600 transition"
        >
        انشاء حساب 
        </FancyButtons>
<!-- </div> -->
        <div
        v-if="isOpen"
        class="absolute  w-52 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
        >
        <ul class="py-1">
        <li>
        <RouterLink to="/createAccountAsWritter" class="block px-4 py-2 text-gray-600 text-base font-semibold  hover:bg-purple-600 hover:text-white rounded-lg">
        التسجيل ككاتب</RouterLink>
        </li>
        <li>
        <RouterLink to="/createAccountAsReader" class="block px-4 py-2 text-gray-600 text-base font-semibold pb-4 hover:bg-purple-600 hover:text-white rounded-lg">
        التسجيل كقارئ
        </RouterLink>
        </li>
        </ul>
        </div>
         
        <!-- </div> -->
        </div>
  
      </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .bg{
    border-right-color: transparent;
    border-radius: 0 10rem 10rem 0;
  }
  </style>
  