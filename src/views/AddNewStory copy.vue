<script setup>
import axios from 'axios';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
import { useToast } from 'vue-toastification';
import router from '@/router';

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
       const story=reactive( {
          title: "",
          content: "",
          category: "",
          cover: '',
          audio: '',
        })
        const toast = useToast();
        const handleSubmit=async()=> {
      const newStory={
        title:story.title,
        content:story.content,
        category:story.category,
        cover:story.cover,
        audio:story.audio
      };
      try {
        const response =await axios.post('http://localhost:9000/stories',newStory);
        toast.success('Job Added Succesfully');
        router.push(`/stories/${response.data.id}`)
        console.log('added')
      } catch (error) {
        console.error("Error...",error);
        toast.error('Story Not Added');

      }
          
      } 

        const errors= {}
     
     const handleFileUpload=((event, type)=> {
        const file = event.target.files[0];
        this.story[type] = file;
        console.error("errprprppr");
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
        <div class="text-center pt-[210px] pb-52 px-4">
        <h2 class="text-gray-800 text-3xl font-bold text-right mr-[11rem] ">إضافة قصة جديدة</h2>
        <div class="flex justify-center items-center mt-4 min-h-screen ">
            
        <div class="w-full max-w-6xl bg-purple-500 py-16 text-right text-[#FFB74D] shadow-lg rounded-2xl p-6">
            <form @submit.prevent="handleSubmit" class="mx-auto ">    
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
              مغامرات
    </option>
                <option value=" خيال علمي"  class="hover:bg-gray-200 ">خيال علمي
                    <i class="pi pi-chevron-down text-black"></i></option>
                <option value="تعليمي"  class="hover:bg-gray-200 ">تعليمي</option>
                <option value="حيوانات"  class="hover:bg-gray-200 ">حيوانات</option>
                </select>
                <!-- <span v-if="errors.category" class="text-sm text-red">{{ errors.category }}</span> -->
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
/* .custom-dropdown {
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
} */
  </style>
  