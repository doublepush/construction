<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
      <div v-for="material in materials" :key="material.id" class="border rounded-md border-[#ddd] text-center p-3">
        <img :src="material.url" alt="Material Image" class="w-200px h-auto" />
        <p>{{ material.name }}</p>
        <p>Price: {{ material.price }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const materials = ref([
    { id: 1, name: 'Bricks', price: 'KES 3000/stone', url: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80' },
    { id: 2, name: 'Cement', price: 'KES 800/bag', url: '../assets/vue.svg' },
    { id: 3, name: 'Steel Rod', price: 'kes 1500/rod', url: '../assets/vue.svg' },
    { id: 4, name: 'Ballast', price: 'KES 2000/ton', url: '../assets/vue.svg' },
    { id: 5, name: 'Mabati', price: 'KES 4000/piece', url: '../assets/vue.svg' },
    { id: 6, name: 'Bricks', price: 'KES 3000/stone', url: '../assets/vue.svg' },
    { id: 7, name: 'Cement', price: 'KES 800/bag', url: '../assets/vue.svg' },
    { id: 8, name: 'Steel Rod', price: 'kes 1500/rod', url: '../assets/vue.svg' },
    { id: 9, name: 'Ballast', price: 'KES 2000/ton', url: '../assets/vue.svg' },
    { id: 10, name: 'Mabati', price: 'KES 4000/piece', url: '../assets/vue.svg' },
    { id: 11, name: 'Bricks', price: 'KES 3000/stone', url: '../assets/vue.svg' },
    { id: 12, name: 'Cement', price: 'KES 800/bag', url: '../assets/vue.svg' },
    { id: 13, name: 'Steel Rod', price: 'kes 1500/rod', url: '../assets/vue.svg' },
    { id: 14, name: 'Ballast', price: 'KES 2000/ton', url: '../assets/vue.svg' },
    { id: 15, name: 'Mabati', price: 'KES 4000/piece', url: '../assets/vue.svg' },
    { id: 16, name: 'Bricks', price: 'KES 3000/stone', url: '../assets/vue.svg' },
    { id: 17, name: 'Cement', price: 'KES 800/bag', url: '../assets/vue.svg' },
    { id: 18, name: 'Steel Rod', price: 'kes 1500/rod', url: '../assets/vue.svg' },
    { id: 19, name: 'Ballast', price: 'KES 2000/ton', url: '../assets/vue.svg' },
    { id: 20, name: 'Mabati', price: 'KES 4000/piece', url: '../assets/vue.svg' },
    
    // Add more materials as needed
  ]);

//   <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  
  const filteredMaterials = ref(materials.value);
  </script>

  