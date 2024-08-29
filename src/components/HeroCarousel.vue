<template>
    <carousel :autoplay="true" :autoplayTimeout="3000">
      <slide v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Construction Image" />
      </slide>
    </carousel>
  </template>
  
  <script setup>
  import { Carousel, Slide } from 'vue-carousel';
  
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
  ];
  </script>
  
  <style scoped>
  .carousel img {
    width: 100%;
    height: auto;
  }
  </style>
  