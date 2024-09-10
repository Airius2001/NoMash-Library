<template>
    <h1>User Dashboard</h1>
    <p>Welcome, {{ auth.currentUser?.email }}</p>
    <p><button @click="logout">Logout</button></p>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { getAuth, signOut } from "firebase/auth";
  import { useRouter } from "vue-router";
  
  const auth = getAuth();
  const router = useRouter();
  
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully!");
        router.push("/FireLogin");  
      })
      .catch((error) => {
        console.log("Error signing out: ", error);
      });
  };
  </script>
  