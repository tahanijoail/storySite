<template>
    <button :class=" `${bg} ${textColor} ${px} ${py} ${rounded} ${textSize} font-semibold leading-loose`">
        <slot></slot>
        </button>
</template>
<script setup>
defineProps({
bg:{
    type:String,
    default:'bg-purple-600'
},
py:{
    type:String,
    default:'py-1'
},
textColor:{
    type:String,
    defualt:"text-white"

},

rounded:{
    type:String,
    default:"rounded-lg"
},
textSize:{
    type:String,
    default:"text-xl"
},
px:{
    type:String,
    default:"px-6"
}

});
</script>