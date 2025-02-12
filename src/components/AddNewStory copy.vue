<template>
     <div class="relative">
        <img src="/images/rb_1086 1.png " alt="" class="absolute w-[47%] h-[480px] left-0 -top-24 z-10">
    </div>
        <div class="text-center pt-[210px] px-4">
        <h2 class="text-gray-800 text-3xl font-bold text-right mr-[11rem] ">إضافة قصة جديدة</h2>
        <div class="flex justify-center items-center mt-4 min-h-screen ">
            
        <div class="w-full max-w-6xl bg-purple-500 text-right text-[#FFB74D] shadow-lg rounded-2xl p-6">
            <form @submit.prevent="submitStory" class="mx-auto ">    
            <!-- Title Input -->
            <div class="mb-12  pr-28">
                <label for="title" class="block mb-3 text-xl font-bold">أضف عنوان القصة</label>
                <input
                type="text"
                id="title"
                v-model="story.title"
                class="w-11/12 p-3 rounded-md text-gray-800"
                required
                />
            </div>
    
            <!-- Story Text -->
            <div class="mb-12 pr-28">
                <label for="content" class="block mb-3 text-xl font-bold">أضف نص القصة</label>
                <textarea
                id="content"
                v-model="story.content"
                rows="4"
                class="w-11/12 p-3 rounded-md text-gray-800"
                placeholder="نص القصة..."
                required
                ></textarea>
            </div>
    
            <!-- Category Selection -->
            <div class="mb-12 pr-28">
                <label for="category" class="block mb-3 text-xl font-bold">تصنيف القصة</label>
                <select
                id="category"
                v-model="story.category"
                class="w-11/12 p-3 rounded-md text-gray-800 "
                required
                >
                <option value="">اختر التصنيف</option>
                <option value="مغامرات" class="flex items-center gap-2 text-gray-800 rounded-xl hover:bg-purple-600 dropdowntoggleE  "> 
                  تعليمي<svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
        <path d="M15.967 2.43502L9.03241 9.49983L1.9676 2.56524" stroke="#FFB74D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </option>
                <option value="خيال"  class="hover:bg-gray-200 ">خيال<i class="pi pi-chevron-down text-black">jjjjj</i></option>
                <option value="تعليم"  class="hover:bg-gray-200 ">تعليم</option>
                <option value="دراما عائلية"  class="hover:bg-gray-200 ">دراما عائلية</option>
                </select>
            </div>
    
            <!-- Cover Image -->
            <div class="mb-12 pr-28">
                <label for="cover" class="block mb-3 text-xl font-bold">أضف غلاف القصة</label>
                <input
                type="file"
                id="cover"
                @change="handleFileUpload($event, 'cover')"
                class="w-11/12 p-3 rounded-md text-gray-800 bg-white"
                />
            </div>
    
            <!-- Audio Clip -->
            <div class="mb-12 pr-28">
                <label for="audio" class="block mb-3 text-xl font-bold">أضف مقطع صوتي للقصة (اختياري)</label>
                <input
                type="file"
                id="audio"
                @change="handleFileUpload($event, 'audio')"
                class="w-11/12 p-3 rounded-md text-gray-800 bg-white"
                />
            </div>
    
            <!-- Buttons -->
            <div class="flex justify-between mt-6">
                <button
                type="button"
                @click="previewStory"
                class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                معاينة القصة
                </button>
                <button
                type="submit"
                class="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                إرسال القصة
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>
  </template>
  
  <script setup>
import FancyButtons from './FancyButtons.vue';


       const story= {
          title: "",
          content: "",
          category: "",
          cover: null,
          audio: null,
        }
     
     const handleFileUpload=((event, type)=> {
        const file = event.target.files[0];
        this.story[type] = file;
      })
    const  previewStory=(()=> {
        alert("معاينة القصة:");
        // console.log(this.story);
      })
     const submitStory=(()=> {
        alert("تم إرسال القصة بنجاح!");
        // console.log(this.story);
      } )
        </script>
  
  <style>
 
  </style>
  