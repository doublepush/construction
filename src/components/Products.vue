<template>
  <div id="product" class="bg-white">
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 class="text-xl font-bold text-gray-900">Products</h2>

      <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id">
          <div class="relative">
            <div class="relative h-72 w-full overflow-hidden rounded-lg">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center" />
            </div>
            <div class="relative mt-4">
              <h3 class="text-sm font-medium text-gray-900">{{ product.name }}</h3>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import image4 from "../assets/image-4.jpeg";
import image3 from "../assets/image-3.jpeg";
import image6 from "../assets/image-6.jpeg";
import image1 from "../assets/image-1.jpeg";
import image2 from "../assets/image-2.jpeg";
const products = [
  {
    id: 1,
    name: 'Ballast/Kokoto',
    href: '#',
    imageSrc: image4,
     price: 'KES 50,000/truckload',
  },
  // More products...
  {
    id: 3,
    name: 'Stones/Mawe',
    href: '#',
    imageSrc: image3,
     price: 'KES 50,000/truckload',
  },
  {
    id: 3,
    name: 'Sand/Mchanga',
    href: '#',
    imageSrc: image6,
     price: 'KES 50,000/truckload',
  },
  {
    id: 4,
    name: 'Truck',
    href: '#',
    imageSrc: image1,
     price: 'KES 100,000/day',
  },
  {
    id: 5,
    name: 'Truck',
    href: '#',
    imageSrc: image2,
     price: 'KES 100,000/day',
  },



  
]
</script>