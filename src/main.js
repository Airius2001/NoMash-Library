import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6WtQejjItqONrMu_CPMoo-wwHy3OFtzs",
  authDomain: "week7-patrick.firebaseapp.com",
  projectId: "week7-patrick",
  storageBucket: "week7-patrick.appspot.com",
  messagingSenderId: "945811937259",
  appId: "1:945811937259:web:7cccb0c20eaca956a06bae"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')
