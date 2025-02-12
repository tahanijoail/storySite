<script setup>

import { onMounted, onUnmounted, ref } from 'vue';
const isOpentoggle = ref(false);
// Close dropdownmenue when clicking outside
const handleClickOutsidetoggle = (event) => {
  if (!event.target.closest('.dropdowntoggle')) {
    isOpentoggle.value = false;
  }
};
onMounted(() => {
  document.addEventListener('click', handleClickOutsidetoggle);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutsidetoggle);
});
</script>
<template>
          <div class="relative ">
            <div class="absolute top-3" >
    <!-- ----------end--------- -->
    <div class="relative inline-block text-right dropdowntoggle">
    <FancyButtons
      @click="isOpentoggle = !isOpentoggle"
      bg="bg-none"
    >
            <svg xmlns="http://www.w3.org/2000/svg" width="46px" height="28px" viewBox="0 0 47 29" fill="none" 
                      >
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.166687 3.08333C0.166687 2.39819 0.438859 1.74111 0.923328 1.25664C1.4078 0.772172 2.06488 0.5 2.75002 0.5H44.0834C44.7685 0.5 45.4256 0.772172 45.91 1.25664C46.3945 1.74111 46.6667 2.39819 46.6667 3.08333C46.6667 3.76848 46.3945 4.42556 45.91 4.91003C45.4256 5.39449 44.7685 5.66667 44.0834 5.66667H2.75002C2.06488 5.66667 1.4078 5.39449 0.923328 4.91003C0.438859 4.42556 0.166687 3.76848 0.166687 3.08333ZM0.166687 14.7083C0.166687 14.0232 0.438859 13.3661 0.923328 12.8816C1.4078 12.3972 2.06488 12.125 2.75002 12.125C14.8563 12.125 21.6438 12.125 33.75 12.125C34.4352 12.125 35.0922 12.3972 35.5767 12.8816C36.0612 13.3661 36.3334 14.0232 36.3334 14.7083C36.3334 15.3935 36.0612 16.0506 35.5767 16.535C35.0922 17.0195 34.4352 17.2917 33.75 17.2917H2.75002C2.06488 17.2917 1.4078 17.0195 0.923328 16.535C0.438859 16.0506 0.166687 15.3935 0.166687 14.7083ZM0.166687 26.3333C0.166687 25.6482 0.438859 24.9911 0.923328 24.5066C1.4078 24.0222 2.06488 23.75 2.75002 23.75H18.25C18.9352 23.75 19.5922 24.0222 20.0767 24.5066C20.5612 24.9911 20.8334 25.6482 20.8334 26.3333C20.8334 27.0185 20.5612 27.6756 20.0767 28.16C19.5922 28.6445 18.9352 28.9167 18.25 28.9167H2.75002C2.06488 28.9167 1.4078 28.6445 0.923328 28.16C0.438859 27.6756 0.166687 27.0185 0.166687 26.3333Z" fill="#8858BB"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-purple-600 inline -translate-y-3  translate-x-0 ml-3" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" stroke="#8858BB"
            clip-rule="evenodd" data-original="#000000" />
        </svg>
           </FancyButtons>

    <div
      v-if="isOpentoggle"
      class="absolute -mt-4 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
    >
      <ul class="">
        <li>
          <RouterLink to="/three_five" class="block px-4 py-2 text-gray-600 text-base font-semibold  hover:bg-[#F5F5F5] hover:text-[#212121] rounded-none">
        من عمر 3-5 سنة</RouterLink>
        </li>
        <li>
          <RouterLink to="/six_eight" class="block px-4 py-2 text-gray-600 text-base font-semibold  hover:bg-[#F5F5F5] hover:text-[#212121] rounded-none">
        من عمر 6-8 سنة</RouterLink>
        </li>
        <li>
          <RouterLink to="/nine_eleven" class="block px-4 py-2 text-gray-600 text-base font-semibold  hover:bg-[#F5F5F5] hover:text-[#212121] rounded-none">
        من عمر 9-11 سنة</RouterLink>
        </li>
        <li>
          <RouterLink to="/twelve_fifteen" class="block px-4 py-2 text-gray-600 text-base font-semibold  hover:bg-[#F5F5F5] hover:text-[#212121] rounded-none">
        من عمر 12-15 سنة</RouterLink>
        </li>
       
      </ul>
    </div>
  </div>
            </div>
          </div>
</template>