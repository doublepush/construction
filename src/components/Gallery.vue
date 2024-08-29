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
          <img :src="file.source" alt="" class="pointer-events-none object-cover group-hover:opacity-75" />
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
  import image1 from '../assets/image-1.jpeg';
  import image2 from '../assets/image-2.jpeg';
  import image3 from '../assets/image-3.jpeg';
  import image4 from '../assets/image-4.jpeg';
  import image5 from '../assets/image-5.jpeg';
  import image6 from '../assets/image-6.jpeg';
  import image7 from '../assets/image-7.jpeg';
  import image8 from '../assets/image-8.jpeg';
  import image9 from '../assets/image-9.jpeg';
  import image10 from '../assets/image-10.jpeg';
  import image11 from '../assets/image-11.jpeg';
  import image12 from '../assets/image-12.jpeg';
  import image13 from '../assets/image-13.jpeg';
  import image14 from '../assets/image-14.jpeg';
  import image15 from '../assets/image-15.jpeg';
  import image16 from '../assets/image-16.jpeg';
  import image17 from '../assets/image-17.jpeg';
  import image18 from '../assets/image-18.jpeg';

  const files = [
  {
    id: 1,
    source: image1,
    title: 'Image 1',
  },
  {
    id: 2,
    source: image2,
    title: 'Image 2',
  },
  {
    id: 3,
    source: image3,
    title: 'Image 3',
  },
  {
    id: 4,
    source: image4,
    title: 'Image 4',
  },
  {
    id: 5,
    source: image5,
    title: 'Image 5',
  },
  {
    id: 6,
    source: image6,
    title: 'Image 6',
  },
  {
    id: 7,
    source: image7,
    title: 'Image 7',
  },
  {
    id: 8,
    source: image8,
    title: 'Image 8',
  },
  {
    id: 9,
    source: image9,
    title: 'Image 9',
  },
  {
    id: 10,
    source: image10,
    title: 'Image 10',
  },
  {
    id: 11,
    source: image11,
    title: 'Image 11',
  },
  {
    id: 12,
    source: image12,
    title: 'Image 12',
  },
  {
    id: 13,
    source: image13,
    title: 'Image 13',
  },
  {
    id: 14,
    source: image14,
    title: 'Image 14',
  },
  {
    id: 15,
    source: image15,
    title: 'Image 15',
  },
  {
    id: 16,
    source: image16,
    title: 'Image 16',
  },
  {
    id: 17,
    source: image17,
    title: 'Image 17',
  },
  {
    id: 18,
    source: image18,
    title: 'Image 18',
  },
];
  </script>