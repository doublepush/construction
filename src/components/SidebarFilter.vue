<template>
    <div class="w-[200px] sm:mr-5 flex justify-start flex-col ">
        <div class="flex justify-start">
            <h3>Filter by</h3>
        </div>
      
      <div v-for="(category, index) in categories" :key="index" class="flex flex-row ">
        <input type="checkbox" :id="category" :value="category" v-model="selectedCategories" />
        <label :for="category">{{ category }}</label>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const categories = ['Bricks','Stones', 'Cement', 'Steel Rods' , 'Ballast(Kokoto)' ,'Mabati'];
  const selectedCategories = ref([]);
  
  const filteredMaterials = computed(() => {
    // Logic to filter materials based on selected categories
    return materials.filter((material) =>
      selectedCategories.value.includes(material.name)
    );
  });
  </script>
  