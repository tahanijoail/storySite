<script setup>
import DropdownButton from './DropdownButton.vue'

</script>
<template>
     <div class="relative w-full flex gap-8 mt-4 md:mt-0 justify-center ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" height="16px"
              class="absolute  top-6 -translate-y-[4px]  text-bold  translate-x-[284px] fill-gray-400 ">
              <path
                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
              </path>
            </svg>


            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="14" fill="#007bff"
              class="transition-all duration-500 -rotate-180" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z" clip-rule="evenodd" data-original="#000000"></path></svg> -->
      <input
            type="text"
            placeholder="ابحث عن قصتك"
            class=" w-[565px] h-14 border text-gray-800 bg-[#DEE3EC] rounded-lg px-7 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-"
          />
    <DropdownButton/>
          </div>
</template>