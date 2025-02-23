<script setup>
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter();
const goBack=(()=>{
  router.go(-1);
})
</script>
<template>
 <!-- Go Back -->
    <section>
      <div class="relative container m-auto pl-36 flex items-center z-20">
        <button
        @click="goBack"
          class="text-black text-xl font-semibold "
        >
           رجوع
           <i class="pi pi-arrow-left mr-2 text-[#ffb74d] font-semibold align-middle "></i>
          </button>
      </div>
    </section>

  </template> 