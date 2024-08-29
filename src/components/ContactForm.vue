<template>
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({ name: '', email: '', message: '' });
  
  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted:', form.value);
  };
  </script>
  
  <style scoped>
  .contact-form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  }
  
  .contact-form div {
    margin-bottom: 10px;
  }
  </style>
  