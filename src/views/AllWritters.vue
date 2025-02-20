<template>
      <div class="relative w-full flex gap-8 mt-4 md:my-8 justify-center ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" height="16px"
              class="absolute  top-6 -translate-y-[4px]  text-bold  translate-x-[264px] fill-gray-400 ">
              <path
                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
              </path>
            </svg>
            <input
            type="text"
            placeholder="ابحث عن قصتك"
            class=" w-[565px] h-14 border text-gray-800 bg-[#DEE3EC] rounded-lg px-7 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-"
          />
          </div>
    <div class=" bgPattern min-h-fit h-[780px] mt-20 mb-96 bg-purple-500">
    <div class="relative w-full max-w-5xl mx-auto py-40">
      <!-- Slider Container -->
      <div class="overflow-hidden">
        <div
          ref="slider"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(author, index) in authors"
            :key="index"
          
          >    
          <Card 
          :name="author.name"
          :description="author.description"
          :image="author.image"
          v-model="author.rating"
        />        
          </div>
        </div>
      </div>
  
      <!-- Navigation Buttons -->
      <button
        @click="prevSlide"
        class="absolute -left-7 top-1/2 transform -translate-y-1/2 bg-[#FFB74D] w-16 h-16 text-white  rounded-full shadow-md"
      >
        <i class="pi pi-chevron-left text-xl text-purple-500 font-bold"></i>
      </button>
      <button
        @click="nextSlide"
        class="absolute -right-7 top-1/2 transform -translate-y-1/2  bg-[#FFB74D] w-16 h-16 text-white p-2 rounded-full shadow-md"
      >
      <i class="pi pi-chevron-right text-xl text-purple-500 font-bold"></i>
      </button>
    </div>
    </div>
    <div class="relative pt-20"><img src="/images/rb_28307 1.png" alt="" class="absolute w-[711px] bottom-0 right-0 z-20"></div>
  </template>
  
  <script>
import Card from './card.vue';

  export default {
    components:{
      Card
    },
    data() {
      return {
      
        currentIndex: 0,
        visibleCards:3,
        authors: [
          
          {
            name: "محمد القاضي",
            description: "خالد الشامي كاتب قصص أطفال مبدع، يتميز بأسلوبه المشوق والبسيط الذي يجذب الأطفال وينمي خيالهم",
            image: "/images/Ellipse 7.png",
            rating: 4,
          },
          {
            name: "خالد الشامي",
            description: "خالد الشامي كاتب قصص أطفال مبدع، يتميز بأسلوبه المشوق والبسيط الذي يجذب الأطفال وينمي خيالهم",
            image: "/images/Ellipse 7.png",
            rating: 3,
          },
          {
            name: "دولة حمود",
            description: "خالد الشامي كاتب قصص أطفال مبدع، يتميز بأسلوبه المشوق والبسيط الذي يجذب الأطفال وينمي خيالهم",
            image: "/images/Ellipse 7.png",
            rating: 5,
          },
        ],
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = Math.min(this.currentIndex + 1, this.authors.length - 1);
      },
      prevSlide() {
        this.currentIndex = Math.max(this.currentIndex - 1, 0);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional custom styles */
  </style>
  