<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
    <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      <li v-for="file in files" :key="file.id" class="relative">
        <div class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
          <img src="../assets/image-1.jpeg" alt="" class="pointer-events-none object-cover group-hover:opacity-75" />
          <!-- <button type="button" class="absolute inset-0 focus:outline-none">
            <span class="sr-only">View details for {{ file.title }}</span>
          </button> -->
        </div>
        <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{{ file.title }}</p>
        <!-- <p class="pointer-events-none block text-sm font-medium text-gray-500">{{ file.size }}</p> -->
      </li>
    </ul>
  </template>
  
  <script setup>
  const files = [
    {
      
      id: 1,      
      source:
        '../assets/image-1.jpeg',
    },
    {
        
      id: 2,    
      source:
        '../assets/image-2.jpeg',
    },
    {
       
      id: 3,    
      source:
        '../assets/image-3.jpeg',
    },
    {
      
      id: 4,
      source:
        '../assets/image-4.jpeg',
    },
    {
      
      id: 5,
      source:
        '../assets/image-5.jpeg',
    },
    {
      
      id: 6,
      source:
        '../assets/image-6.jpeg',
    },
    {
      id: 7,
      source:
        '../assets/image-7.jpeg',
    },
    {
      id: 8,
      source:
        '../assets/image-8.jpeg',
    },
    {
      id: 9,
      source:
        '../assets/image-9.jpeg',
    },
    {
      
      id: 10,      
      source:
        '../assets/image-10.jpeg',
    },
    {
        
      id: 11,    
      source:
        '../assets/image-11.jpeg',
    },
    {
       
      id: 12,    
      source:
        '../assets/image-12.jpeg',
    },
    {
      
      id: 13,
      source:
        '../assets/image-13.jpeg',
    },
    {
      
      id: 14,
      source:
        '../assets/image-14.jpeg',
    },
    {
      
      id: 15,
      source:
        '../assets/image-15.jpeg',
    },
    {
      id: 16,
      source:
        '../assets/image-16.jpeg',
    },
    {
      id: 17,
      source:
        '../assets/image-17.jpeg',
    },
    {
      id: 18,
      source:
        '../assets/image-18.jpeg',
    },


   
  ]
  </script>