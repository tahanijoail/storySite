<script setup>
const sections = [
  {
    title: "رؤيتنا",
    content:
      "نسعى لأن يكون حكاية منصة رائدة في تقديم محتوى قصصي جذاب وآمن للأطفال، يساعدهم على حب القراءة والاستمتاع بها في بيئة ممتعة ومريحة."
  },
  {
    title: "ماذا نقدم؟",
    content: [
      "📖 قصص متنوعة: مجموعة واسعة من القصص المشوقة التي تناسب جميع الفئات العمرية.",
      "🎧 قصص صوتية: لمن يحبون الاستماع إلى القصص بأسلوب مشوق ومؤثر.",
      "🖼️ رسومات جذابة: قصص مصففة برسومات ملونة تعزز تجربة القراءة.",
      "📚 تعليم بالقصة: نجمع القيم الأخلاقية والدروس المستفادة داخل كل قصة."
    ]
  },
  {
    title: "لماذا نحن؟",
    content: [
      "✔️ نختار القصص بعناية لضمان تقديم محتوى مناسب وآمن للأطفال.",
      "✔️ نعمل مع كتاب ومبدعين متخصصين في أدب الطفل.",
      "✔️ نحرص على أن يكون الموقع سهل الاستخدام وممتعًا للصغار."
    ]
  }
];
</script>

<template>
  <div class="relative">
    <img src="/images/rb_1086 1.png" alt="" class="absolute w-[40%] h-[440px] left-0 -top-24 z-10">
  </div>

  <div class="p-6 pt-[210px] min-h-screen pb-96 bg-gray-100 text-gray-900">
    <!-- Main About Section -->
    <section class="max-w-[1412px] w-full mx-auto bg-white py-16 px-6 md:px-20 rounded-lg shadow-md text-center">
      <h2 class="text-2xl text-right font-bold text-purple-700">حول موقع حكاية</h2>
      <p class="mt-5 font-bold text-xl text-gray-900 leading-loose">
        مرحبًا بكم في حكاية، عالم مليء بالقصص السحرية والمغامرات الشيقة! نحن هنا لنمنح الأطفال تجربة ممتعة ومفيدة من خلال
        قصص تزرع القيم، تنمي الخيال، وتفتح أبواب المعرفة بطريقة ممتعة وسهلة.
      </p>
    </section>

    <!-- Dynamic Sections -->
    <section v-for="(item, index) in sections" :key="index"
      class="max-w-[1412px] w-full mt-6 mx-auto p-10 md:p-20 rounded-lg shadow-md bg-purple-500 text-white">
      <h2 class="text-2xl text-[#FFB74D] mb-5 font-bold">{{ item.title }}</h2>
      <ul v-if="Array.isArray(item.content)" class="mt-2 list-disc list-inside space-y-2">
        <li v-for="(point, i) in item.content" :key="i" class="text-lg">{{ point }}</li>
      </ul>
      <p v-else class="mt-2 text-lg">{{ item.content }}</p>
    </section>

    <!-- Contact Section -->
    <section class="max-w-[1412px] w-full mt-6 py-16 px-10 md:px-20 mx-auto text-right rounded-lg shadow-md bg-purple-500 text-white">
      <h2 class="text-2xl text-[#FFB74D] font-bold">انضموا إلينا!</h2>
      <p class="mt-6 text-lg">
        إذا كنتم تحبون القصص وتؤمنون بأهميتها في بناء مستقبل مشرق للأطفال، ندعوكم لاكتشاف موقعنا والاستمتاع بعالم من الحكايات الرائعة!
      </p>
      <p class="mt-6 text-lg font-bold text-[#FFB74D]">
        <i class="pi pi-envelope pl-2 text-[#FFB74D]"></i> تواصل معنا:
        <a href="mailto:Tahani@gmail.com" class="text-[#21A1D8]">Tahani@gmail.com</a>
      </p>
      <p class="mt-2 text-lg font-bold text-[#FFB74D]">
        <i class="pi pi-tablet pl-2 text-[#FFB74D]"></i> تابعونا على:
        <a href="https://facebook.com" target="_blank" class="text-[#21A1D8]">Facebook</a>،
        <a href="https://instagram.com" target="_blank" class="text-[#21A1D8]">Instagram</a>
      </p>
    </section>
  </div>

  <div class="relative pt-20">
    <img src="/images/rb_28307 1.png" alt="" class="absolute w-[711px] bottom-0 left-0 z-20">
  </div>
</template>

<style scoped>
section {
  direction: rtl;
}
</style>
