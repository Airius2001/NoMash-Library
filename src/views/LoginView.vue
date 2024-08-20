<template>
    <div class="container mt-5">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">Login</h1>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="username">Username:</label>
            <input
              type="text"
              id="username"
              v-model="username"
              class="form-control"
            />
          </div>
  
          <div class="form-group mt-3">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="form-control"
            />
          </div>
  
          <button type="submit" class="btn btn-primary mt-3">Login</button>
        </form>
        <p v-if="error" class="text-danger mt-3">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const username = ref('');
  const password = ref('');
  const error = ref('');
  
  const handleLogin = () => {
    const hardcodedUsername = 'user';
    const hardcodedPassword = 'password';
  
    if (username.value === hardcodedUsername && password.value === hardcodedPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/about');
    } else {
      error.value = 'Invalid credentials';
    }
  };
  </script>
  
  <style>
  .form-control {
    background-color: #f0f0f0; 
    border: 1px solid #ccc; 
    border-radius: 4px;      
    padding: 10px;            
  }
  
  .form-control:focus {
    border-color: #007bff;    
    outline: none;            
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.25);
  }
  
  .btn-primary {
    background-color: #007bff; 
    border: none;              
    border-radius: 4px;     
  }
  </style>
  