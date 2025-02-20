<template>
  <div class="flex justify-center space-x-1">
    <span
      v-for="(star, index) in 5"
      :key="index"
      @mouseover="hoverRating = index + 1"
      @mouseleave="hoverRating = rating"
      @click="setRating(index + 1)"
      class="cursor-pointer text-2xl transition-colors duration-300"
      :class="(hoverRating || rating) > index ? 'text-yellow-500' : 'text-gray-300'"
    >
      ★
    </span>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Number,
  },
  data() {
    return {
      hoverRating: 0,
    };
  },
  computed: {
    rating() {
      return this.modelValue;
    },
  },
  methods: {
    setRating(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>
