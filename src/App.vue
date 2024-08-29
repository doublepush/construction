<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->
<template>
  <div>
    <!-- <HeroCarousel /> -->
     <Hero/>
    <div class="flex flex-row w-full">
      <SidebarFilter />
      <MaterialGrid />
    </div>
    <Gallery/>
    <ContactForm />
    <Footer/>
  </div>
</template>

<script setup>
import HeroCarousel from './components/HeroCarousel.vue';
import Gallery from './components/Gallery.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import MaterialGrid from './components/MaterialGrid.vue';
import SidebarFilter from './components/SidebarFilter.vue';
import ContactForm from './components/ContactForm.vue';
</script>


