<template>
    <div class="bg-gray-100 min-h-screen py-10">
      <!-- Profile Section -->
      <div class="bgProf shadow-md rounded-lg overflow-hidden max-w-full ">
        <div class="relative w-full h-[21rem] bg-cover bg-center"></div>
       
      </div>
       <img src="/images/Ellipse 3.png" class="w-72 h-w-72 rounded-full border-4 border-gray-500 mx-auto -mt-52" /> 
      <div class="text-center mx-auto w-3/4">
        <h2 class="text-2xl text-center font-bold text-black my-4  ">خالد أحمد محمد الشامي</h2>
        <p class="text-gray-800 px-6 mt-9 text-lg">خالد الشامي كاتب قصص أطفال مبدع، يتميز بأسلوبه المشوق والبسيط الذي يجذب الأطفال وينمي خيالهم. يركز في كتاباته على تعزيز القيم الأخلاقية والتعليمية بأسلوب ممتع ومناسب لمختلف الفئات العمرية. من خلال شخصيات محببة ومغامرات مشوقة، يسعى إلى غرس حب القراءة في نفوس الأطفال وتحفيزهم على استكشاف العالم من خلال القصص.</p>
        <div class="flex flex-col gap-1 m-10 text-right font-bold text-gray-900 text-base">
        <p>للتواصل</p>
          
            <p>kaledshami2000@gmail.com</p>
          <p>+967 718596234 <i class="pi pi-whatsapp ml-2 text-gray-800"></i> +967 773698521</p>
          
        </div>  
    </div>
    
      <!-- Published Stories Section -->
      <div class="bgPattern1 mt-10 bg-purple-600 text-white py-8 px-10 rounded-lg min-h-[947px] mx-auto">
        <div class="w-[72%] mx-auto ">
            <h3 class="container text-right text-2xl font-bold text-[#FFB74D] pt-14 pb-10">القصص التي تم نشرها</h3>

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
            اقراء الان
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 30 23"  class=" self-center pr-2" fill="none"> 
<path d="M15 21.8665C12.9552 20.577 10.5881 19.7553 8.10595 19.4787C6.3455 19.1583 4.55194 19.0069 2.75568 19.0272C2.52583 19.029 2.29787 18.99 2.08495 18.9124C1.87203 18.8348 1.67836 18.7203 1.51513 18.5753C1.3519 18.4303 1.22234 18.2578 1.13392 18.0677C1.04551 17.8776 0.999991 17.6738 1 17.4678L1.03178 2.69757C1.03082 2.30126 1.19832 1.91949 1.50026 1.62984C1.80219 1.3402 2.2159 1.16442 2.6573 1.13823C4.48584 1.10567 6.31288 1.25208 8.10595 1.57485C10.5854 1.86143 12.9507 2.68114 15 3.96402M15 21.8665V3.96402M15 21.8665C17.0448 20.577 19.4119 19.7553 21.8941 19.4787C23.6545 19.1583 25.4481 19.0069 27.2443 19.0272C27.4742 19.029 27.7021 18.99 27.915 18.9124C28.128 18.8348 28.3216 18.7203 28.4849 18.5753C28.6481 18.4303 28.7777 18.2578 28.8661 18.0677C28.9545 17.8776 29 17.6738 29 17.4678L28.9667 2.69757C28.9677 2.30148 28.8004 1.91989 28.4988 1.63028C28.1972 1.34068 27.7838 1.16475 27.3427 1.13823C25.5142 1.10567 23.6871 1.25208 21.8941 1.57485C19.4146 1.86143 17.0493 2.68114 15 3.96402" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </RouterLink>
        <RouterLink to="/listining_story"  class="flex justify-center
          font-semibold leading-loose py-2 bg-[#FFB74D] text-gray-800 rounded-2xl px-6 text-xl" >
             استمع
           <div class=" flex self-center pr-2" >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
<path d="M1.5 4.87103C1.5 4.87103 3.40909 6.74722 3.40909 9.8742C3.40909 13.0012 1.5 14.8774 1.5 14.8774M5.31818 1.11865C5.31818 1.11865 8.5 4.24563 8.5 9.8742C8.5 15.5028 5.31818 18.6298 5.31818 18.6298" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="19" height="23" viewBox="0 0 19 23"  fill="none" >
<path d="M1.5 13.8227V9.17722C1.5 8.51376 1.76818 7.87747 2.24555 7.40833C2.72291 6.93919 3.37036 6.67563 4.04545 6.67563H7.73636C7.98521 6.67557 8.22858 6.60382 8.43636 6.46925L16.0727 1.52112C16.2646 1.39694 16.4871 1.32612 16.7166 1.31616C16.9461 1.3062 17.1741 1.35748 17.3763 1.46456C17.5786 1.57164 17.7476 1.73052 17.8654 1.92436C17.9832 2.11819 18.0454 2.33975 18.0455 2.56553V20.4344C18.0454 20.6601 17.9832 20.8817 17.8654 21.0755C17.7476 21.2694 17.5786 21.4282 17.3763 21.5353C17.1741 21.6424 16.9461 21.6937 16.7166 21.6837C16.4871 21.6738 16.2646 21.6029 16.0727 21.4788L8.43636 16.5306C8.22858 16.3961 7.98521 16.3243 7.73636 16.3243H4.04545C3.37036 16.3243 2.72291 16.0607 2.24555 15.5916C1.76818 15.1224 1.5 14.4861 1.5 13.8227Z" stroke="#212121" stroke-width="1.5"/>
</svg>
           </div>  
            </RouterLink>
      </div>
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