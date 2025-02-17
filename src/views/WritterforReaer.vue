<template>
    <div class="bg-gray-100 min-h-screen py-10">
      <!-- Profile Section -->
      <div class="bgProf relative shadow-md rounded-lg overflow-hidden max-w-full ">
        <i class="pi pi-camera absolute -translate-x-[1330px] translate-y-72 cursor-pointer text-2xl p-1 w-10 h-10 text-center  text-white bg-gray-700 rounded-full"></i>

        <div class="relative w-full h-[21rem] bg-cover bg-center"></div>
      </div>
      <div class="relative">
        <img src="/images/Ellipse 3.png" class="w-72 h-w-72 rounded-full border-4 border-gray-500 mx-auto -mt-52" /> 
<form action="">
  <input type="file" class="hidden">
  <i class="pi pi-camera absolute cursor-pointer -translate-x-[860px] -translate-y-24 text-2xl p-1 w-10 h-10 text-center  text-white bg-gray-700 rounded-full"></i>

</form>      </div>
      <div class="text-center mx-auto w-3/4">
        <h2 class="text-2xl text-center font-bold text-black my-4  ">خالد أحمد محمد الشامي</h2>
        <p class="text-gray-800 px-6 mt-9 text-lg">خالد الشامي كاتب قصص أطفال مبدع، يتميز بأسلوبه المشوق والبسيط الذي يجذب الأطفال وينمي خيالهم. يركز في كتاباته على تعزيز القيم الأخلاقية والتعليمية بأسلوب ممتع ومناسب لمختلف الفئات العمرية. من خلال شخصيات محببة ومغامرات مشوقة، يسعى إلى غرس حب القراءة في نفوس الأطفال وتحفيزهم على استكشاف العالم من خلال القصص.</p>
        <div class="flex flex-col gap-1 m-10 text-right font-bold text-gray-900 text-base">
        <p>للتواصل</p>
          
            <p>kaledshami2000@gmail.com</p>
          <p>+967 718596234 <i class="pi pi-whatsapp ml-2 text-gray-800"></i> +967 773698521</p>
          
        </div>  
        <!-- Buttons -->
    <div class="flex justify-start gap-8 mt-6 pr-10">
                <RouterLink
                to="/stories/addNewStory"
                
                class= " w-64 text-xl bg-[#FFB74D]  text-white px-4 py-2 rounded-md"
                >
                اضافة قصة جديدة
                </RouterLink>
                <RouterLink to="`/review/edite`"
               
                class="w-64 text-xl bg-[#FFB74D]   text-white px-4 py-2 rounded-md"
                >
                تعديل الملف الشخصي
                </RouterLink>
            </div>
    </div>
    
      <!-- Published Stories Section -->
      <div class=" relative bgPattern1 mt-10 bg-purple-600 mb-[70px] text-white py-32 px-10 rounded-lg min-h-full mx-auto z-10">
        <div class="w-[72%] mx-auto ">
            <h3 class="container text-right text-2xl font-bold text-[#FFB74D]  pb-10">القصص التي تم نشرها</h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          <!-- <div v-for="story in stories" :key="story.id" class="bg-white text-gray-900 p-4 rounded-lg shadow-md"> -->
             <div
             v-for="story in stories" :key="story.id"
      class="bg-white flex flex-col gap-4 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-4 w-[359px]  max-w-sm rounded-3xl overflow-hidden mx-auto ">
      <div class="min-h-[210px]">
        <img :src="story.image"  class="w-full rounded-lg" />
      </div>
      <div class=" flex justify-between">
          <h3 class="text-2xl text-gray-800 font-semibold flex-1 -tracking-wider">{{story.title}}</h3>
          <div class="bg-[#FFB74D] w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="fill-black" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
        </div>
      <div class=" text-right">
        <p class=" text- text-[#212121] ">{{story.description}}</p>
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
            
          </div>
          <!-- حالة القصة -->
            <h3 class="container text-right text-2xl font-bold text-[#FFB74D] pt-14 pb-10">  حالة القصة </h3>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
          <!-- <div v-for="story in stories" :key="story.id" class="bg-white text-gray-900 p-4 rounded-lg shadow-md"> -->
             <div
             v-for="story in stories.slice(0,2)" :key="story.id"
      class="bg-white flex flex-col gap-4 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] border p-4 w-[359px]  max-w-sm rounded-3xl overflow-hidden mx-auto ">
      <div class="min-h-[210px]">
        <img :src="story.image"  class="w-full rounded-lg" />
      </div>
      <div class=" flex justify-between">
          <h3 class="text-2xl text-gray-800 font-semibold flex-1 -tracking-wider">{{story.title}}</h3>
          <div class="bg-[#FFB74D] w-8 h-8 flex items-center justify-center rounded-full cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" class="fill-black" viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000"></path>
            </svg>
          </div>
        </div>
      <div class=" text-right">
        <p class=" text- text-[#212121] ">{{story.description}}</p>
      </div>
    
        <RouterLink :to="`/stories/` + story.id"
         class="flex justify-center
          font-semibold leading-loose py-2 text-white bg-[#757575] rounded-2xl px-6 text-xl" >
            تمت قراءتها
     
        </RouterLink>
            
    </div>
            
          </div>
          </div>
        </div>
      <!-- </div> -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        stories: [
          { id: 1, title: 'الليلة الباردة', description: 'قصة مشوقة تدور أحداثها في ليلة شتوية...', image: '/images/cards/تنزيل (1) 1 (4).png' },
          { id: 2, title: 'حوار مع شبح', description: 'مغامرة جديدة يخوضها بطلنا في حوار غامض...', image: '/images/cards/تنزيل (1) 1 (4).png' },
          { id: 3, title: 'مغامرات في الفضاء', description: 'قصة خيالية حول مغامرات مثيرة في الكون...', image: '/images/cards/تنزيل (1) 1 (4).png' },
        ],
      };
    },
  };
  </script>
  
<style scoped>
 .bgProf{
    background-image: url('/src/assets/Frame\ 73.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
  }
  button:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
  .bgPattern1{
    background-image: url('/images/Vector.png');
    background-repeat: repeat;
z-index: 10;
}
</style>