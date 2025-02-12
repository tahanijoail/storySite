<script setup >

import axios from 'axios'
import { reactive, defineProps,onMounted} from 'vue';
import SingleStory from './SingleStory.vue';


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
    <div class="bgPattern  bg-purple-500 mt-44 pb-72 h-full ">
<div class="w-[72%] mx-auto pt-24 ">
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
<!-- Start Card -->
       <SingleStory v-for="story in state.stories || state.stories.length" :key="story.id" :story="story">

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