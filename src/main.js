import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueCarousel from 'vue-carousel';
import VueLazyLoad from 'vue-lazyload';


createApp(App).use(VueLazyLoad).mount('#app')
