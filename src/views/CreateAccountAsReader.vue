<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="bg-white shadow-lg rounded-2xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
       
       
        <div class="bg-purple-600 text-white p-8 md:w-1/2 flex flex-col justify-center items-center bg">
          <h2 class="text-3xl font-bold">مرحباً بعودتك</h2>
          <p class="mt-2">لديك حساب؟</p>
          <RouterLink to="loginForm" class="mt-4 px-6 py-2 border border-[#FFB74D] bg-transparent rounded-lg hover:bg-white hover:text-purple-500 transition">
            تسجيل الدخول
          </RouterLink>
        </div>
        
        
        <div class="p-8 md:w-1/2 w-full">
          <h2 class="text-2xl font-semibold text-purple-500 text-center">إنشاء حساب كقارئ</h2>
  
          <div class="mt-6 space-y-4">
            <div>
              <label class="block text-gray-700">ادخل اسمك</label>
              <input type="text" class="w-full mt-1 p-3 border rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="الاسم" />
            </div>
            <div>
              <label class="block text-gray-700">ادخل البريد الإلكتروني</label>
              <input type="email" class="w-full mt-1 p-3 border rounded-lg bg-gray-100 text-gray-800  focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="البريد الإلكتروني" />
            </div>
            <div>
              <label class="block text-gray-700">ادخل كلمة المرور</label>
              <input type="password" class="w-full mt-1 p-3 border rounded-lg bg-gray-100 text-gray-800  focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="كلمة المرور" />
            </div>
            <div>
              <label class="block text-gray-700">تأكيد كلمة المرور</label>
              <input type="password" class="w-full mt-1 p-3 border rounded-lg bg-gray-100 text-gray-800  focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="تأكيد كلمة المرور" />
            </div>
  
            <button class="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
              إنشاء حساب
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .bg{
      border-right-color: transparent;
      border-radius:  10rem 0 0 10rem ;
    }
  </style>
  