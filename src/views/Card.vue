<template>
 <div class="">
       
          <div
          
            class="bg-white h-[430px] p-10 rounded-xl shadow-md text-center"
          >
            <img :src="image" alt="author" class="w-36 h-3w-36 mx-auto rounded-full" />
            <h2 class="mt-4 text-xl text-gray-800 font-semibold">{{ name }}</h2>
            <p class="text-gray-700 mt-2">{{ description }}</p>
            <div class="flex justify-center mt-3">
              <StarRating v-model="rating"/>
            </div>
            <button class="mt-4 px-4 py-2 w-full bg-[#FFB74D] text-gray-800 rounded-lg"><RouterLink to="/writter">تعرف على الكاتب</RouterLink></button>
          </div>
    
      </div>
</template>

<script>
import StarRating from './StarRating.vue';

export default {
  components: {
    StarRating
  },
  props: {
    name: String,
    description: String,
    image: String,
    modelValue: Number,
  },
  computed: {
    rating: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  }
};
</script>
