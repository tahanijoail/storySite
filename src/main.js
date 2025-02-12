import "@fontsource/cairo/200.css";
import "@fontsource/cairo/300.css";
import "@fontsource/cairo/400.css";
import "@fontsource/cairo/500.css";
import "@fontsource/cairo/600.css";
import "@fontsource/cairo/700.css";
import 'primeicons/primeicons.css'
import './assets/main.css'
// import axios from 'axios';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// app.config.globalProperties.$axios = axios; // Set Axios globally
const app = createApp(App)

app.use(router)

app.mount('#app')
