<script setup >

import axios from 'axios'
import { reactive, defineProps,onMounted} from 'vue';
import SingleStory from '../components/SingleStory.vue';
import { useRoute, useRouter } from 'vue-router';
import Footering from '@/components/Footering.vue';

// to arrive to all object inside json file
const route = useRoute();
// the router for all links
const router = useRouter();


const storyId = route.params.id;// {path: '/jobs/:id',name: "job",component: JobView },
const stories=[
{
      "id": "6",
      "image": "/images/cards/تنزيل (1) 1 (5).png",
      "title": "حرف الدي",
      "story": "تدور القصة حول طفل يُدعى ديفيد يكتشف سحر حرف -D-  ينطلق ديفيد في مغامرة خيالية مع الحرف -D- "
    },
    {
      "id": "2",
      "image": "/images/cards/تنزيل (1) 1 (2).png",
      "title": "حوار مع ضفدع",
      "story": "في ليلة هادئة بجانب بحيرة منعزلة، يجلس بطل القصة متأملاً انعكاس القمر على سطح   الماء.فجأة يسمع صوتا غريبا قادما من بين "
    },
]
//  delete job
const deleteJob=async()=>{
  try {
    const confirm = window.confirm("Are you sure you want to delete this job?");
if(confirm){
   await axios.delete(`http://localhost:9000/stories/${storyId}`);
    toast.success("Job Deleted Succefuly");
    // router.push('/jobs');
}
   
  } catch (error) {
    console.error("Error.....",error);
    // toast.error("Job Not Deleted");
  }
}
</script>

<template>
    <div class="bgPattern  bg-purple-500 mt-44 pb-32 h-full ">
<div class="w-[72%] mx-auto pt-24 ">
   
        <h1 class=" text-right text-4xl font-bold text-[#FFB74D] py-14  "> قصصك المفضلة </h1>
   
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
<!-- Start Card -->
       
        <div
        v-for="story in stories || stories" :key="story.id" :story="story"
      class="bg-white flex flex-col gap-4 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-4 w-[359px]  max-w-sm rounded-3xl overflow-hidden mx-auto ">
      <div class="min-h-[210px]">
        <img :src="story.image"  class="w-full rounded-lg" />
      </div>
      <div class=" flex justify-between">
          <h3 class="text-2xl text-gray-800 font-semibold flex-1 -tracking-wider">{{story.title}}</h3>
          <div class="bg-[#FFB74D] w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
<path d="M10 17.675C9.76667 17.675 9.52933 17.6333 9.288 17.55C9.04667 17.4667 8.834 17.3333 8.65 17.15L6.925 15.575C5.15833 13.9583 3.56233 12.3543 2.137 10.763C0.711667 9.17167 -0.000666199 7.41733 4.67508e-07 5.5C4.67508e-07 3.93333 0.525001 2.625 1.575 1.575C2.625 0.525 3.93333 0 5.5 0C6.38333 0 7.21667 0.187333 8 0.562C8.78333 0.936666 9.45 1.44933 10 2.1C10.55 1.45 11.2167 0.937667 12 0.563C12.7833 0.188333 13.6167 0.000666667 14.5 0C16.0667 0 17.375 0.525 18.425 1.575C19.475 2.625 20 3.93333 20 5.5C20 7.41667 19.2917 9.175 17.875 10.775C16.4583 12.375 14.85 13.9833 13.05 15.6L11.35 17.15C11.1667 17.3333 10.9543 17.4667 10.713 17.55C10.4717 17.6333 10.234 17.675 10 17.675Z" fill="#FC2626"/>
</svg>
          </div>
        </div>
      <div class=" text-right">
        <p class=" text- text-[#212121] ">{{story.story}}</p>
      </div>
      <div class="flex justify-between ">
        <RouterLink :to="`/stories/` + story.id"
         class="flex justify-center
          font-semibold leading-loose py-2 bg-[#FFB74D] text-gray-800 rounded-2xl px-6 text-xl" >
            تمت قراءتها
     
        </RouterLink>
        <button @click="deleteJob"  class="flex justify-center
          font-semibold leading-loose py-2 bg-[#FF474A] text-gray-800 rounded-2xl px-9 text-xl" >
             حذف
           <div class=" flex self-center pr-2" >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
<path d="M8.5 3H11.5C11.5 2.60218 11.342 2.22064 11.0607 1.93934C10.7794 1.65804 10.3978 1.5 10 1.5C9.60218 1.5 9.22064 1.65804 8.93934 1.93934C8.65804 2.22064 8.5 2.60218 8.5 3ZM7 3C7 2.20435 7.31607 1.44129 7.87868 0.87868C8.44129 0.316071 9.20435 0 10 0C10.7956 0 11.5587 0.316071 12.1213 0.87868C12.6839 1.44129 13 2.20435 13 3H19C19.1989 3 19.3897 3.07902 19.5303 3.21967C19.671 3.36032 19.75 3.55109 19.75 3.75C19.75 3.94891 19.671 4.13968 19.5303 4.28033C19.3897 4.42098 19.1989 4.5 19 4.5H18.154L16.3465 17.757C16.2239 18.6554 15.78 19.479 15.0968 20.0752C14.4137 20.6714 13.5377 21 12.631 21H7.369C6.46228 21 5.58626 20.6714 4.90315 20.0752C4.22004 19.479 3.77609 18.6554 3.6535 17.757L1.846 4.5H1C0.801088 4.5 0.610322 4.42098 0.46967 4.28033C0.329018 4.13968 0.25 3.94891 0.25 3.75C0.25 3.55109 0.329018 3.36032 0.46967 3.21967C0.610322 3.07902 0.801088 3 1 3H7ZM8.5 8.25C8.5 8.05109 8.42098 7.86032 8.28033 7.71967C8.13968 7.57902 7.94891 7.5 7.75 7.5C7.55109 7.5 7.36032 7.57902 7.21967 7.71967C7.07902 7.86032 7 8.05109 7 8.25V15.75C7 15.9489 7.07902 16.1397 7.21967 16.2803C7.36032 16.421 7.55109 16.5 7.75 16.5C7.94891 16.5 8.13968 16.421 8.28033 16.2803C8.42098 16.1397 8.5 15.9489 8.5 15.75V8.25ZM12.25 7.5C12.4489 7.5 12.6397 7.57902 12.7803 7.71967C12.921 7.86032 13 8.05109 13 8.25V15.75C13 15.9489 12.921 16.1397 12.7803 16.2803C12.6397 16.421 12.4489 16.5 12.25 16.5C12.0511 16.5 11.8603 16.421 11.7197 16.2803C11.579 16.1397 11.5 15.9489 11.5 15.75V8.25C11.5 8.05109 11.579 7.86032 11.7197 7.71967C11.8603 7.57902 12.0511 7.5 12.25 7.5ZM5.14 17.5545C5.21361 18.0934 5.47997 18.5875 5.88977 18.9451C6.29956 19.3028 6.82506 19.4999 7.369 19.5H12.631C13.1752 19.5003 13.7011 19.3033 14.1112 18.9456C14.5213 18.5879 14.7879 18.0937 14.8615 17.5545L16.6405 4.5H3.3595L5.14 17.5545Z" fill="#F5F5F5"/>
</svg>

           </div>  
            </button>
      </div>
    </div>
    
    <!-- End Card -->

</div>
</div>
    </div>
    <div class="relative pt-[400px] "><img src="/images/rb_28307 1.png" alt="" class="absolute w-[711px] bottom-0 right-0 z-20"></div>
    <Footering/>
</template>
<style scoped>
.bgPattern{
    background-image: url('/images/Vector.png');
    background-repeat: repeat;
z-index: 10;
}
</style>