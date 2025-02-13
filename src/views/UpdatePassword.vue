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
          <h2 class="text-2xl py-3 font-bold text-[#8858BB]">إنشاء كلمة مرور جديدة</h2>
          <p class=" text-gray-700 text-sm ">يجب ان تكون كلمة المرور الخاصة بك مختلفة عن كلمات المرور المستخدمة سابقا</p>
          <div class="mt-6 space-y-6">
            <div>
              <label class="block text-gray-800 text-right">ادخل البريد الإلكتروني</label>
              <input type="email" class="w-full mt-1 p-3 bg-gray-100 text-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="البريد الإلكتروني" />
            </div>         
            <button class="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
              <RouterLink to="updatePasswordUser">إرسال البريد الالكتروني</RouterLink>
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
  