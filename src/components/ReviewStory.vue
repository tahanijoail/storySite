<script setup>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import { reactive,onMounted } from 'vue';
import { useRoute, RouterLink,useRouter } from 'vue-router';
import axios from 'axios';
import Comments from '@/components/Comments.vue';
import { useToast } from 'vue-toastification';

// to arrive to all object inside json file
const route = useRoute();
// the router for all links
const router = useRouter();
// popup
const toast = useToast();

const storyId = route.params.id;// {path: '/stories/:id',name: "job",component: JobView },
const state =reactive({
  story:{},
  isloading:true,
});
 
 onMounted(async()=>{
  try {
    const response = await axios.get(`http://localhost:9000/stories/${storyId}`);
    state.story=response.data;
    console.log(state.story)
  } catch (error) {
    console.error("Error.....",error);
  }finally{
    state.isloading=false;
  }
 });



</script>
<template>
  <!-- <BackButton/> -->
  <div v-if="!state.isloading" >
    <div class="relative">
        <img src="/images/rb_1086 1.png " alt="" class="absolute w-[47%] h-[500px] left-0 -top-20 z-10">
    </div>
    <div class="pt-16 pb-12">
        <h1 class="text-4xl md:text-5xl font-semibold leading-snug text-gray-800 mt-5 text-center">{{ state.story.title }} </h1>
    </div>
    <section class=" storyGradient min-h-fit py-8">
    
        <div class="max-w-[55%] rounded-2xl overflow-hidden mx-auto ">
        <div class="flex items-center gap-2 pt-28 pb-4">
      
        <RouterLink to="./"  class="bg-amber-400 hover:bg-amber-500 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M32.8 20V17.2688C32.8 10.1616 27.2336 4.21123 20.392 4.00483C16.8656 3.92323 13.5904 5.18243 11.0864 7.61443C9.85168 8.80357 8.87073 10.2306 8.20277 11.8093C7.5348 13.3881 7.19368 15.0858 7.2 16.8V20C5.4352 20 4 21.4352 4 23.2V29.6C4 31.3648 5.4352 32.8 7.2 32.8H10.4V16.8C10.3953 15.5144 10.651 14.2412 11.1518 13.0571C11.6525 11.873 12.3879 10.8026 13.3136 9.91043C14.2356 9.01334 15.3289 8.31137 16.5284 7.84649C17.7278 7.38162 19.0087 7.16338 20.2944 7.20483C25.4272 7.35843 29.6 11.8736 29.6 17.2688V32.8H32.8C34.5648 32.8 36 31.3648 36 29.6V23.2C36 21.4352 34.5648 20 32.8 20Z" fill="#212121"/>
        <path d="M12 20H15.2V32.8H12V20ZM24.8 20H28V32.8H24.8V20Z" fill="#212121"/>
        </svg></RouterLink >
        </div>
        <div class=" h-[30rem]">
        <img :src="`${state.story.image}`" :alt="`${state.story.title}`" class="w-full h-[26rem] rounded-2xl"/>
        </div>
        </div>
    </section>
    <div class=" text-gray-700 mx-auto max-w-6xl p-6 rounded-xl text-right leading-relaxed ">
      <p class="font-bold leading-10">{{ state.story.content }}   </p>
      <div class="flex gap-6 ">
        <RouterLink
         class="flex justify-center
          font-semibold leading-loose py-2 bg-[#FFB74D] text-gray-800 rounded-2xl px-6 text-xl" >
          تعديل القصة
        </RouterLink>
        <RouterLink to="/listining_story"  class="flex justify-center
          font-semibold leading-loose py-2 bg-[#FFB74D] text-gray-800 rounded-2xl px-8 text-xl" >
            نشر القصة
          
            </RouterLink>
      </div>
    </div>
   
    </div>
<div v-else class="text-center text-gray-500 py-6"><PulseLoader/></div>
</template>
<style scoped>
.storyGradient{
    background-image: linear-gradient(172deg,#2EBF91,#8360C3);
}
</style>