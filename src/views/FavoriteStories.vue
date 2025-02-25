<script setup>
import axios from "axios";
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import Footering from "@/components/Footering.vue";
import Searching from "@/components/Searching.vue";

// الحصول على معرف القصة من المسار
const route = useRoute();
const router = useRouter();
const storyId = route.params.id;

// قائمة القصص
const stories = ref([
  {
    id: "6",
    image: "/images/cards/تنزيل (1) 1 (5).png",
    title: "حرف الدي",
    story: "تدور القصة حول طفل يُدعى ديفيد يكتشف سحر حرف -D-  ينطلق ديفيد في مغامرة خيالية مع الحرف -D- ",
  },
  {
    id: "2",
    image: "/images/cards/تنزيل (1) 1 (2).png",
    title: "حوار مع ضفدع",
    story: "في ليلة هادئة بجانب بحيرة منعزلة، يجلس بطل القصة متأملاً انعكاس القمر على سطح الماء. فجأة يسمع صوتًا غريبًا قادمًا من بين الأعشاب.",
  },
]);

// حذف القصة
const deleteStory = async (id) => {
  try {
    const confirmDelete = window.confirm("هل أنت متأكد أنك تريد حذف هذه القصة؟");
    if (confirmDelete) {
      await axios.delete(`http://localhost:9000/stories/${id}`);
      stories.value = stories.value.filter((story) => story.id !== id);
      alert("تم حذف القصة بنجاح");
    }
  } catch (error) {
    console.error("حدث خطأ أثناء الحذف", error);
    alert("لم يتم حذف القصة، يرجى المحاولة مرة أخرى.");
  }
};
</script>

<template>
  <Searching />
  <div class="bgPattern bg-purple-500 mt-20 pb-32 h-full">
    <div class="w-[72%] mx-auto pt-24">
      <h1 class="text-right text-4xl font-bold text-[#FFB74D] py-14">قصصك المفضلة</h1>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Start Card -->
        <div
          v-for="story in stories"
          :key="story.id"
          class="bg-white flex flex-col gap-4 shadow-md border p-4 w-[359px] max-w-sm rounded-3xl overflow-hidden mx-auto"
        >
          <div class="min-h-[210px]">
            <img :src="story.image" class="w-full rounded-lg" />
          </div>
          <div class="flex justify-between">
            <h3 class="text-2xl text-gray-800 font-semibold flex-1">{{ story.title }}</h3>
            <div class="bg-[#FFB74D] w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                <path
                  d="M10 17.675C9.76667 17.675 9.52933 17.6333 9.288 17.55C9.04667 17.4667 8.834 17.3333 8.65 17.15L6.925 15.575C5.15833 13.9583 3.56233 12.3543 2.137 10.763C0.711667 9.17167 -0.000666199 7.41733 4.67508e-07 5.5C4.67508e-07 3.93333 0.525001 2.625 1.575 1.575C2.625 0.525 3.93333 0 5.5 0C6.38333 0 7.21667 0.187333 8 0.562C8.78333 0.936666 9.45 1.44933 10 2.1C10.55 1.45 11.2167 0.937667 12 0.563C12.7833 0.188333 13.6167 0.000666667 14.5 0C16.0667 0 17.375 0.525 18.425 1.575C19.475 2.625 20 3.93333 20 5.5C20 7.41667 19.2917 9.175 17.875 10.775C16.4583 12.375 14.85 13.9833 13.05 15.6L11.35 17.15C11.1667 17.3333 10.9543 17.4667 10.713 17.55C10.4717 17.6333 10.234 17.675 10 17.675Z"
                  fill="#FC2626"
                />
              </svg>
            </div>
          </div>
          <div class="text-right">
            <p class="text-[#212121]">{{ story.story }}</p>
          </div>
          <div class="flex justify-between">
            <RouterLink
              :to="`/stories/` + story.id"
              class="flex justify-center font-semibold leading-loose py-2 bg-[#FFB74D] text-gray-800 rounded-2xl px-6 text-xl"
            >
              تمت قراءتها
            </RouterLink>
            <button
              @click="deleteStory(story.id)"
              class="flex justify-center font-semibold leading-loose py-2 bg-[#FF474A] text-gray-800 rounded-2xl px-9 text-xl"
            >
              حذف
              <div class="flex self-center pr-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                  <path
                    d="M8.5 3H11.5C11.5 2.60218 11.342 2.22064 11.0607 1.93934C10.7794 1.65804 10.3978 1.5 10 1.5C9.60218 1.5 9.22064 1.65804 8.93934 1.93934C8.65804 2.22064 8.5 2.60218 8.5 3ZM7 3C7 2.20435 7.31607 1.44129 7.87868 0.87868C8.44129 0.316071 9.20435 0 10 0C10.7956 0 11.5587 0.316071 12.1213 0.87868C12.6839 1.44129 13 2.20435 13 3H19C19.1989 3 19.3897 3.07902 19.5303 3.21967C19.671 3.36032 19.75 3.55109 19.75 3.75C19.75 3.94891 19.671 4.13968 19.5303 4.28033C19.3897 4.42098 19.1989 4.5 19 4.5H18.154L16.3465 17.757"
                    fill="#F5F5F5"
                  />
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
</template>

<style scoped>
.bgPattern {
  background-image: url("/images/Vector.png");
  background-repeat: repeat;
  z-index: 10;
}
</style>
