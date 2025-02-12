<script setup >

import axios from 'axios'
import SingleStory from './SingleStory.vue';
import { reactive, defineProps,onMounted} from 'vue';
import FancyButtons from './FancyButtons.vue';

// const stories=[
// {
//             "id":1,
//          "image":"/images/cards/تنزيل (1) 1.png",
//          "title":"مغامرات في الفضاء",
//          "story":"في أعماق الكون الواسع، ينطلق الأطفال في مغامرة مشوقة لاستكشاف عالم النجوم والكواكب"
//         },
//         {
//             "id":2,
//          "image":"/images/cards/تنزيل (1) 1 (1).png",
//          "title":"حوار مع ضفدع",
//          "story":"في ليلة هادئة بجانب بحيرة منعزلة، يجلس بطل القصة متأملاً انعكاس القمر على سطح   الماء.فجأة يسمع صوتا غريبا قادما من بين "
//         },
//         {
//             "id":3,
//          "image":"/images/cards/تنزيل (1) 1 (2).png",
//          "title":"الليلة الباردة",
//          "story":"في ليلة شتوية قارسة، يجد شاب نفسه وحيدًا وسط العاصفة، لكنه يكتشف أن الشجاعة والدفء الحقيقي ينبعان من داخله."
//         },
//         {
//             "id":4,
//          "image":"/images/cards/تنزيل (1) 1 (3).png",
//          "title":"انا وجدتي",
//          "story":"تدور القصة حول حفيدة تقضي يومًا مع جدتها في المطبخ. تتعلم الحفيدة وصفة تقليدية لطعام تحبه العائلة"
//         },
//         {
//             "id":5,
//          "image":"/images/cards/تنزيل (1) 1 (4).png",
//          "title":"مغامرات مع صديق مكار",
//          "story":"في غابة مليئة بالمفاجآت، يكتشف طفل وصديقه الثعلب الماكر دروسًا عن الصداقة والثقة وسط مغامرات شيّقة "
//         },
//         {
//             "id":6,
//          "image":"/images/cards/تنزيل (1) 1 (5).png",
//          "title":"حرف الدي",
//          "story":"تدور القصة حول طفل يُدعى ديفيد يكتشف سحر حرف -D-  ينطلق ديفيد في مغامرة خيالية مع الحرف -D- "
//         }
// ];




// to arrive to all coponent object


const state=reactive({
    stories:[],
    isloading:true,
});

//  It allows you to execute code after the component has been mounted, meaning it has been inserted into the DOM.
onMounted(async()=>{
    try{
        const response = await axios.get('http://localhost:9000/stories');
        state.stories = response.data;
        console.log("yyyyyyyyyyyyyyyyyyyyyyy")
    }
    catch(error){
        console.error("Erroe.......",error);
    }finally{
        state.isloading=false;
    }
})
</script>

<template>
    <div class="bgPattern min-h-fit bg-purple-500 mt-44 h-[1300px]">
       
<div class="w-[72%]  mx-auto ">
    <div class="flex flex-col md:flex-row justify-center items-center md:gap-44  pt-5 ">
        <FancyButtons bg="bg-[#FFB74D]" text-size="text-base" textSize="text-lg" text-color="text-purple-500" py="py-2" class="text-center  overflow-hidden md:w-[21%] md:-mr-[23rem]  ">قصصك   المفضلة ❤️ </FancyButtons>
        <h1 class=" text-center text-4xl font-bold text-[#FFB74D] py-14  ">القصص الأكثر قراءة</h1>
   
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
<!-- Start Card -->
       <SingleStory v-for="story in state.stories.slice(0,6) || state.stories.length" :key="story.id" :story="story">

       </SingleStory>
    <!-- End Card -->

</div>
</div>
    </div>
</template>
<style scoped>
.bgPattern{
    background-image: url('/images/Vector.png');
    background-repeat: repeat;
z-index: 10;
}
</style>