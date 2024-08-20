<template>
    <div class="container mt-5">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">About Our Library</h1>
        <p class="text-center">Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.</p>
      </div>

      <div class="text-center mt-4">
        <button @click="logout" class="btn btn-primary">Logout</button>
      </div>
    </div>
  </template>
  
  <script setup>
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const router = useRouter();


const logout = () => {
  // Clear authentication status
  localStorage.removeItem('isAuthenticated');

  // Redirect to login page
  router.push('/login');
};


onMounted(() => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    router.push('/login');
  }
});
  </script>
  
  <style>
  </style>