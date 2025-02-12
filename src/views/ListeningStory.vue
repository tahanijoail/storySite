<script>
import { useRoute } from 'vue-router';


  export default {
    data() {
      return {
        audioSrc: '/src/assets/story.mp3',
        isPlaying: false,
        duration: 0,
        currentTime: 0,
         route:useRoute(),
          storyaudio : route.params.audio
      };
    },
    mounted() {
      this.$refs.audio.addEventListener('loadedmetadata', () => {
        this.duration = this.$refs.audio.duration;
      });
    },
    async mounted(){
     
        try {
    const response = await axios.get(`http://localhost:9000/stories/${storyaudio}`);
    state.story=response.data;
    console.log(state.story)
  } catch (error) {
    console.error("Error.....",error);
  }finally{
    state.isloading=false;
  }
  
    },
    methods: {
      togglePlay() {
        if (this.isPlaying) {
          this.$refs.audio.pause();
        } else {
          this.$refs.audio.play();
        }
        this.isPlaying = !this.isPlaying;
      },
      updateProgress() {
        this.currentTime = this.$refs.audio.currentTime;
      },
      seekAudio() {
        this.$refs.audio.currentTime = this.currentTime;
      },
      formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${min}:${sec}`;
      },
      rewind() {
        this.$refs.audio.currentTime -= 10;
      },
      forward() {
        this.$refs.audio.currentTime += 10;
      }
    }
  };
  </script>
<template>
    <div class="flex flex-col items-center justify-center min-h-[947px] parent p-4 mb-[120px] " lang="rtl">
      <h2 class="text-2xl font-bold text-black text-center mb-14">مغامرات مع صديق مكار</h2>
      <div class="bg-purple-600  p-4 rounded-lg shadow-lg w-full max-w-md">
        <audio ref="audio" :src="audioSrc" @timeupdate="updateProgress"></audio>
        <div class="flex items-center space-x-4">
          <span class="text-white text-sm">{{ formatTime(currentTime) }}</span>
          <input
            type="range"
            class="w-full"
            min="0"
            :max="duration"
            v-model="currentTime"
            @input="seekAudio"
          />
          <span class="text-white text-sm">{{ formatTime(duration) }}</span>
        </div>
        <div class="flex justify-center gap-1 space-x-4 mt-4">
          <button @click="rewind" class="text-[#FFB74D]"><i class="pi pi-backward"></i></button>
          <button @click="togglePlay" class="text-[#FFB74D] text-2xl pr-4">{{ isPlaying ? '⏸' : '▶' }}</button>
          <button @click="forward" class="text-[#FFB74D]"><i class="pi pi-forward text-[#ffb74d]"></i></button>
        </div>
      </div>
    </div>
   
  </template>
  

  
  <style scoped>
  .parent{
    background-image: url('/images/rb_170074 1.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
  }
  input[type='range'] {
    accent-color: orange;
    
  }
  </style>
  