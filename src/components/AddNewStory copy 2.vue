<script setup>
import FancyButtons from './FancyButtons.vue';

import { onMounted, onUnmounted, ref } from 'vue';
const isOpentoggle = ref(false);
// Close dropdownmenue when clicking outside
const handleClickOutsidetoggle = (event) => {
  if (!event.target.closest('.dropdowntoggle')) {
    isOpentoggle.value = false;
  }
};
onMounted(() => {
  document.addEventListener('click', handleClickOutsidetoggle);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutsidetoggle);
});
       const story= {
          title: "",
          content: "",
          category: "",
          ageGroup: "",
          cover: null,
          audio: null,
        }
        const errors= {}
     
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
      const validateForm=(()=>{
            errors={};
            // Title
            if(!this.story.title){
                this.errors.title="Tite is required."
            }
            
            //    story text
            if(!this.story.content){
                this.errors.content="Text Content is required"
            }
            
            // selected category
            if(!this.story.category){
                this.errors.category = "Please select Category."
            }
            if(!this.story.cover){
                this.errors.cover = "Please select Image."
            }
            if(!this.story.audio){
                this.errors.audio = "Please select Audio."
            }
        })

      
        </script>

<template>
     <div class="relative">
        <img src="/images/rb_1086 1.png " alt="" class="absolute w-[47%] h-[480px] left-0 -top-24 z-10">
    </div>
        <div class="text-center pt-[210px] px-4">
        <h2 class="text-gray-800 text-3xl font-bold text-right mr-[11rem] ">إضافة قصة جديدة</h2>
        <div class="flex justify-center items-center mt-4 min-h-screen">
            
        <div class="w-full max-w-6xl bg-purple-500 text-right text-[#FFB74D] shadow-lg rounded-2xl p-6">
            <form @submit.prevent="submitStory" class="mx-auto ">    
            <!-- Title Input -->
            <div class="mb-12 pt-10 pr-28">
                <label for="title" class="block mb-3 text-xl font-bold">أضف عنوان القصة</label>
                <input
                type="text"
                id="title"
                v-model="story.title"
                class="w-11/12 p-3 rounded-md text-gray-800"
                
                />
                <span v-if="errors.title" class="text-sm text-red">{{ errors.title }}</span>
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
                
                ></textarea>
                <!-- <span v-if="errors.content" class="text-sm text-red">{{ errors.content }}</span> -->
            </div>
    
            <!-- Category Selection -->
            <div class="mb-12 pr-28">
                <label for="category" class="block mb-3 text-xl font-bold">تصنيف القصة</label>
                <select
                id="category"
                v-model="story.category"
                class="w-11/12 p-3 rounded-md text-gray-800 "
                
                >
                <option value="">اختر التصنيف</option>
                <option value="مغامرات" class="flex items-center gap-2 text-gray-800 rounded-xl hover:bg-purple-600 dropdowntoggleE  "> 
                
                    <FancyButtons
      @click="isOpentoggle = !isOpentoggle"
      bg="bg-none"
    >
            <svg xmlns="http://www.w3.org/2000/svg" width="46px" height="28px" viewBox="0 0 47 29" fill="none" 
                      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.166687 3.08333C0.166687 2.39819 0.438859 1.74111 0.923328 1.25664C1.4078 0.772172 2.06488 0.5 2.75002 0.5H44.0834C44.7685 0.5 45.4256 0.772172 45.91 1.25664C46.3945 1.74111 46.6667 2.39819 46.6667 3.08333C46.6667 3.76848 46.3945 4.42556 45.91 4.91003C45.4256 5.39449 44.7685 5.66667 44.0834 5.66667H2.75002C2.06488 5.66667 1.4078 5.39449 0.923328 4.91003C0.438859 4.42556 0.166687 3.76848 0.166687 3.08333ZM0.166687 14.7083C0.166687 14.0232 0.438859 13.3661 0.923328 12.8816C1.4078 12.3972 2.06488 12.125 2.75002 12.125C14.8563 12.125 21.6438 12.125 33.75 12.125C34.4352 12.125 35.0922 12.3972 35.5767 12.8816C36.0612 13.3661 36.3334 14.0232 36.3334 14.7083C36.3334 15.3935 36.0612 16.0506 35.5767 16.535C35.0922 17.0195 34.4352 17.2917 33.75 17.2917H2.75002C2.06488 17.2917 1.4078 17.0195 0.923328 16.535C0.438859 16.0506 0.166687 15.3935 0.166687 14.7083ZM0.166687 26.3333C0.166687 25.6482 0.438859 24.9911 0.923328 24.5066C1.4078 24.0222 2.06488 23.75 2.75002 23.75H18.25C18.9352 23.75 19.5922 24.0222 20.0767 24.5066C20.5612 24.9911 20.8334 25.6482 20.8334 26.3333C20.8334 27.0185 20.5612 27.6756 20.0767 28.16C19.5922 28.6445 18.9352 28.9167 18.25 28.9167H2.75002C2.06488 28.9167 1.4078 28.6445 0.923328 28.16C0.438859 27.6756 0.166687 27.0185 0.166687 26.3333Z" fill="#8858BB"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-purple-600 inline -translate-y-3  translate-x-0 ml-3" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" stroke="#8858BB"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
           </FancyButtons>
    </option>
                <option value=" خيال علمي"  class="hover:bg-gray-200 ">خيال علمي
                    <i class="pi pi-chevron-down text-black"></i></option>
                <option value="تعليمي"  class="hover:bg-gray-200 ">تعليمي</option>
                <option value="حيوانات"  class="hover:bg-gray-200 ">حيوانات</option>
                </select>
                <!-- <span v-if="errors.category" class="text-sm text-red">{{ errors.category }}</span> -->
            </div>

            <div
      v-if="isOpentoggle"
      class="absolute -mt-4 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
    >
      <ul class="">
        <li>
          <RouterLink to="/three_five" class="block px-4 py-2 text-gray-600 text-base font-semibold  hover:bg-[#F5F5F5] hover:text-[#212121] rounded-none">
        من عمر 3-5 سنة</RouterLink>
        </li>
        <li>
          <RouterLink to="/six_eight" class="block px-4 py-2 text-gray-600 text-base font-semibold  hover:bg-[#F5F5F5] hover:text-[#212121] rounded-none">
        من عمر 6-8 سنة</RouterLink>
        </li>
        <li>
          <RouterLink to="/nine_eleven" class="block px-4 py-2 text-gray-600 text-base font-semibold  hover:bg-[#F5F5F5] hover:text-[#212121] rounded-none">
        من عمر 9-11 سنة</RouterLink>
        </li>
        <li>
          <RouterLink to="/twelve_fifteen" class="block px-4 py-2 text-gray-600 text-base font-semibold  hover:bg-[#F5F5F5] hover:text-[#212121] rounded-none">
        من عمر 12-15 سنة</RouterLink>
        </li>
       
      </ul>
    </div>
            <!-- Cover Image -->
            <div class="mb-12 pr-28 ">
                <label for="cover" class="block mb-3 text-xl font-bold">أضف غلاف القصة</label>
                <div class="relative">
                    <input
      type="file"
      id="cover"
      @change="handleFileUpload($event, 'cover')"
      class="absolute  h-full opacity-0 cursor-pointer"
    />
    <button
      type="button"
      class="w-[40%] p-2 rounded-md bg-white text-gray-800 hover:bg-gray-200"
    >
  <span class=" text-gray-500 ml-72 text-sm ">رفع صورة</span>
    <i class="pi pi-arrow-down absolute text-xl text-gray-500 left-[62%] top-[25%]"></i>      
</button>
            </div>
            <span v-if="errors.cover" class="text-sm text-red">{{ errors.cover }}</span>
    </div>
         
            <!-- Audio Clip -->
            <div class="mb-12 pr-28">
                <label for="audio" class="block mb-3 text-xl font-bold">أضف مقطع صوتي للقصة (اختياري)</label>
                <div class="relative">
                    <input
      type="file"
      id="audio"
      @change="handleFileUpload($event, 'audio')"
      class="absolute  h-full opacity-0 cursor-pointer"
    />
    <button
      type="button"
      class="w-[40%] p-2 rounded-md bg-white text-gray-800 hover:bg-gray-200"
    >
  <span class=" text-gray-500 ml-64  text-sm ">رفع ملف صوتي</span>
    <i class="pi pi-arrow-down absolute text-xl text-gray-500 left-[62%] top-[25%]"></i>      
</button>
            </div>
            <span v-if="errors.audio" class="text-sm text-red">{{ errors.audio }}</span>
            </div>
    
            <!-- Buttons -->
            <div class="flex justify-center gap-32 mt-6 ">
                <button
                type="button"
                @click="previewStory"
                class= " w-64 text-xl bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-md"
                >
                معاينة القصة
                </button>
                <button
                type="submit"
                class="w-64 text-xl bg-sky-500 hover:bg-sky-400  text-white px-4 py-2 rounded-md"
                >
                إرسال القصة
                </button>
            </div>
            </form>
        </div>
        </div>
    </div>
  </template>
  
 
  
  <style scoped>
.custom-dropdown {
  background: linear-gradient(to right, #f9f9f9, #e9e9e9);
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;
}

.custom-dropdown:focus {
  outline: none;
  border-color: #04000a;
  box-shadow: 0 0 5px rgba(3, 0, 7, 0.718);
}

.custom-dropdown:hover {
  background: #f1f1f1;
}
  </style>
  