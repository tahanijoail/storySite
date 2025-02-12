<script setup>
import FancyButtons from './FancyButtons.vue';


</script>
<template>

<section class="getStarted bg-[#FFB74D] py-24 my-6 relative flex justify-center">
    <div class=" container mx-auto flex flex-col-reverse md:flex-row items-center   md:w-full ">
      <div class=" md:w-[40%] pr-16 py-52 flex justify-center z-10 relative">
          <div class="bg-transparent rounded-full absolute -bottom-32">
            <img src="/images/rb_88305 1.png" alt="طفل يقرأ" class="w-[100%] " />
          </div>
        </div>
      <div class="  rounded-full md:w-[64%] grid grid-row-3  justify-items-center mt-12 gap-4 md:grid-row-1  ">
              <h1 class="text-6xl font-bold text-purple-700 leading-snug  md:text-right">
                مرحباً بك في عالم القصص الساحر!
              </h1>
              <p class="mt-4  text-3xl text-gray-700 text-center md:w-[58%] leading-loose">
                "هنا حيث تبدأ المغامرات الممتعة وتنطلق أحلام الأطفال في عوالم مليئة بالإبداع والتعلم.
                اكتشف أجمل القصص التي تناسب خيال طفلك"
              </p>
              <FancyButtons class="py-3">
                ابدأ الآن واكتشف عالماً مليئا بالإبداع
              </FancyButtons>
            </div>
          
        </div>
        <div class="curve"></div>
    </section>
</template>
<style scoped>

.getStarted{
  background-image: url('/images/rb_20999\ 2.png');
  background-repeat: no-repeat;

  background-position: calc(100%/5 );
    background-size: 38rem;
  
}

.curve {
        position: absolute;
        height: 250px;
        width: 54%;
        bottom: 0;
        text-align: center;
      }

      .curve::before {
        content: '';
        display: block;
        position: absolute; 
        background-color: hsl(220, 27%, 96%);
        border-radius:  100% 60%;
        width: 100%;
        height: 95%;
        transform: translate(44%, 68%);
        /* z-index: -1; */
        /* transform: translate(49%, 100px); */
}

.curve::after {
  content: '';
  display: block;
  position: absolute;
  /* border-radius: 118% 54% 118% 40%; */
  border-radius:  100% 60%;
  width:100%;
  height: 95%;
  background-color: #FFB74D;
  transform: translate(-43%, 38%);
  z-index: -1;
}
</style>