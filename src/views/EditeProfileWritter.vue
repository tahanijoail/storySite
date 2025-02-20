<template>
    <div class="max-w-full mx-auto py-2 mb-72 px-4 bg-gray-100 rounded-lg  text-black ">
      <!-- Profile Image -->
     
      <div class="flex flex-col items-center my-8 max-w-full p-10 pb-6 border-b-2 border-gray-300  rounded-3xl">
        <div class="flex flex-row justify-between items-center  w-full">
          <h2 class="text-lg font-bold  mb-2">صورة الملف الشخصي</h2>
        <button @click="triggerProfileUpload" class="  bg-[#FFB74D] px-5 py-2 rounded-lg font-semibold text-black">تعديل</button>
        </div>
        <label class="relative cursor-pointer mt-4">
          <input type="file" @change="uploadProfileImage" accept="image/*" class="hidden" />
          <img
            :src="profileImage || defaultProfileImage"
            alt="Profile"
            class="w-40 h-40 rounded-full border-2 text-center border-gray-300 shadow-md"
          />
        </label>
      </div>
  
      <!-- Cover Image -->
      <div class=" my-8 max-w-full px-6 pb-6 border-b-2 border-gray-300  rounded-3xl">
        <div class="flex flex-row justify-between items-center  w-full">
        <h2 class="text-xl font-bold text-right ">صورة الغلاف</h2>
        <button @click="triggerCoverUpload" class=" bg-[#FFB74D] px-5 py-2 self-end md:self-end rounded-lg text-black font-semibold block ">
          تعديل
        </button>
        </div>
        <label class="relative block mt-2 cursor-pointer">
          <input type="file" @change="uploadCoverImage" accept="image/*" class="hidden" />
          <img
            :src="coverImage || defaultCoverImage"
            alt="Cover"
            class="w-full h-48 object-cover rounded-lg border border-gray-300 shadow-md"
          />
        </label>
       
        
      </div>
  
      <!-- Biography -->
      <div class=" py-8 max-w-full px-6 pb-6 border-b-2 border-gray-300  rounded-3xl">
      <div class="  text-center">
        <div class="flex flex-row justify-between items-center  w-full">
        <h2 class="text-xl font-bold mb-2">السيرة الذاتية</h2>
        <button class=" bg-[#FFB74D] px-5 font-semibold py-2 rounded-lg text-black">تعديل</button>
      </div>
        
        <textarea
          v-model="bio"
          class="w-full h-24 p-2 resize-none text-right bg-gray-100"
        ></textarea>
      </div>
  
      <!-- Contact Info -->
      <div class="flex flex-col gap-1  text-right font-bold text-gray-900 text-base">
        <p>للتواصل</p>
          
            <p>kaledshami2000@gmail.com</p>
          <p>+967 718596234 <i class="pi pi-whatsapp ml-2 text-gray-800"></i> +967 773698521</p>
          
        </div>  
      </div>
    </div>
    <Footering/>
  </template>
  
  <script>
import Footering from '@/components/Footering.vue';

  export default {
    data() {
      return {
        profileImage: null,
        coverImage: null,
        bio: "خالد الشامي كاتب قصص أطفال مبدع، يتميز بأسلوبه المشوق والبسيط الذي يجذب الأطفال وينمي خيالهم. يركز في كتاباته على تعزيز القيم الأخلاقية والتعليمية بأسلوب ممتع ومناسب لمختلف الفئات العمرية. من خلال شخصيات محببة ومغامرات مشوقة، يسعى إلى غرس حب القراءة في نفوس الأطفال وتحفيزهم على استكشاف العالم من خلال القصص.",
        defaultProfileImage: "https://via.placeholder.com/150", // Replace with actual default image
        defaultCoverImage: "https://via.placeholder.com/600x200", // Replace with actual default cover
      };
    },
    methods: {
      triggerProfileUpload() {
        this.$el.querySelector('input[type="file"]').click();
      },
      triggerCoverUpload() {
        this.$el.querySelectorAll('input[type="file"]')[1].click();
      },
      uploadProfileImage(event) {
        const file = event.target.files[0];
        if (file) this.profileImage = URL.createObjectURL(file);
      },
      uploadCoverImage(event) {
        const file = event.target.files[0];
        if (file) this.coverImage = URL.createObjectURL(file);
      },
    },
  };
  </script>
 
  