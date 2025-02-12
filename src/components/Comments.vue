<template>
    <div class="min-h-screen pb-96  bg-[#21A1D8]" dir="rtl">
      <div class="py-16 px-40">
      
      <div class="">
      <h2 class="text-white text-xl font-bold mb-4">4 تعليقات</h2>
      <div class="flex gap-1 items-center p-3 rounded-md mb-4">
        <button
          @click="addComment"
          class="ml-2 bg-white w-16 h-16 rounded-full border border-gray-800 "
        >
          <i class="fas fa-user text-[#4F4F4F] text-4xl"></i>
        </button>
        <input
          v-model="newComment"
          type="text"
          placeholder="أضف تعليقًا"
          class="flex-1 bg-transparent placeholder-white py-3 px-4 max-w-7xl text-[#F5F5F5] text-xl rounded-2xl border border-gray-800 bg-none p-2 outline-1"
        />
       
      </div>
  </div>
      <!-- Comments List -->
      <div v-for="(comment, index) in comments" :key="index" class="bg-white p-4 rounded-md shadow-sm mb-3">
        <div class="flex gap-1 items-center justify-between">
          <div class="flex gap-2 items-center">
            <img
              :src="comment.avatar"
              alt="Avatar"
              class="w-12 h-12 rounded-full border"
            />
            <div class="flex flex-col  gap-1">
              <p class="font-bold text-gray-800">{{ comment.name }}. <span class="text-sm font-medium text-gray-500">{{ comment.time }}</span></p>
              <p class="text-base text-gray-700">{{ comment.text }}</p>
            </div>
          </div>
        </div>
        
        <button class="flex justify-center items-center text-gray-600 text-sm m-1 mr-14 hover:underline">رد
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 28 28" fill="none">
<path d="M9.83441 10.5295C9.99024 10.6854 10.0778 10.8967 10.0778 11.1171C10.0778 11.3375 9.99024 11.5489 9.83441 11.7048L6.26617 15.273H13.4027C17.9932 15.273 21.7144 18.9942 21.7144 23.5848C21.7144 23.8052 21.6269 24.0166 21.471 24.1725C21.3151 24.3284 21.1037 24.416 20.8832 24.416C20.6628 24.416 20.4514 24.3284 20.2955 24.1725C20.1396 24.0166 20.0521 23.8052 20.0521 23.5848C20.0521 21.8213 19.3515 20.1299 18.1045 18.8829C16.8575 17.6359 15.1662 16.9354 13.4027 16.9354H6.26617L9.83441 20.5036C9.98582 20.6604 10.0696 20.8703 10.0677 21.0883C10.0658 21.3062 9.9784 21.5147 9.82429 21.6688C9.67018 21.8229 9.46171 21.9103 9.24378 21.9122C9.02585 21.9141 8.81589 21.8303 8.65913 21.6789L3.67207 16.6918C3.51625 16.536 3.42871 16.3246 3.42871 16.1042C3.42871 15.8838 3.51625 15.6724 3.67207 15.5166L8.65913 10.5295C8.815 10.3737 9.02637 10.2861 9.24677 10.2861C9.46717 10.2861 9.67854 10.3737 9.83441 10.5295Z" fill="#757575"/>
</svg>
        </button>

      </div>
  
      <!-- Rating Section -->
      <div class="bg-white p-6 rounded-md shadow-lg mt-16 text-center">
        <h3 class="font-bold text-gray-800 mb-2">قيم القصة إذا أعجبتك</h3>
        <div class="flex justify-center space-x-1">
          <i
            v-for="star in 5"
            :key="star"
            class="fa-star cursor-pointer text-2xl text-black"
            :class="star <= rating ? 'fas text-yellow-400' : 'far text-gray-400'"
            @click="setRating(star)"
          ></i>
        </div>
      </div>
      </div>
      
    </div>
    <div class="relative pt-20"><img src="/images/rb_28307 1.png" alt="" class="absolute w-[711px] bottom-0 z-20"></div>
  </template>
  
  <script >
export default {
  data() {
    return {
      newComment: "",
      comments: [
        {
          name: "إبراهيم العليمي",
          time: "منذ 5 دقائق",
          text: "قصة بسيطة لكنها تعكس أهمية التفاصيل الصغيرة في حياتنا",
          avatar: "/images/Ellipse 3.png",
        },
        {
          name: "عمار قائد سنان",
          time: "منذ 10 دقائق",
          text: "استمتعت معها فعلًا جدًا",
          avatar: "/images/Ellipse 3.png",
        },
        {
          name: "رمزي ياسين عبدالله ثابت",
          time: "منذ 30 دقيقة",
          text: "رائعة لدرجة اندمجت معها",
          avatar: "/images/Ellipse 3.png",
        },
        {
          name: "waleed ahmed noon",
          time: "منذ ساعة واحدة",
          text: "❤️❤️❤️❤️",
          avatar: "/images/Ellipse 3.png",
        },
      ],
      rating: 3,
    };
  },
  methods: {
    addComment() {
      if (this.newComment.trim() !== "") {
        this.comments.unshift({
          name: "مستخدم جديد",
          time: "الآن",
          text: this.newComment,
          avatar: "/images/Ellipse 3.png",
        });
        this.newComment = "";
      }
    },
    setRating(star) {
      this.rating = star;
    },
  },
};
  </script>
  
  <style scoped>
  /* Font Awesome for star icons */
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
  </style>
  