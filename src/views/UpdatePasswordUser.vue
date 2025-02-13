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
      <div class="bg-white  shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
    
        <div class="p-8 pt-10 md:w-1/2 w-full mx-auto text-center">
          <h2 class="text-2xl py-3 font-bold text-[#8858BB]">إعادة تعيين كلمة المرور</h2>
          <p class=" text-gray-700 text-sm ">سوف نرسل لك بريدا الكترونيا يحتوي على تعليمات لإعادة تعيين كلمة المرور الخاصة بك.</p>
          <div class="mt-6 space-y-6">
            <div>
              <label class="block text-gray-700 text-right">ادخل كلمة المرور</label>
              <input type="password" class="w-full mt-1 p-3 border rounded-lg bg-gray-100 text-gray-800  focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="كلمة المرور" />
            </div>
            <div>
              <label class="block text-gray-700 text-right">تأكيد كلمة المرور</label>
              <input type="password" class="w-full mt-1 p-3 border rounded-lg bg-gray-100 text-gray-800  focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="تأكيد كلمة المرور" />
            </div>      
            <button class="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
              إعادة تعيين كلمة المرور
            </button>
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
  