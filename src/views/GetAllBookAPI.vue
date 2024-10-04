<template>
    <div>
      <h1>All Books</h1>
      <pre>{{ jsondata }}</pre>
    </div>
  </template>
  
  <script>
  import { collection, getDocs } from 'firebase/firestore';
  import db from '../firebase/init.js';

  export default {
    name: 'GetAllBookAPI',
    data() {
      return {
        jsondata: null,
        error: null,
      };
    },
    mounted() {
      this.getAllBooksFromFirestore();
    },
    methods: {
      // get data from firestore
      async getAllBooksFromFirestore() {
        try {
          // get 'Books'
          const querySnapshot = await getDocs(collection(db, 'books'));
          const books = [];
          
          // qurey all books in to arraylist
          querySnapshot.forEach((doc) => {
            books.push({ id: doc.id, ...doc.data() });
          });
  
          // put results in jsondata to shows into the frontend
          this.jsondata = books;
          this.error = null;
        } catch (error) {
          console.error('Error fetching books from Firestore:', error);
          this.error = error;
          this.jsondata = null;
        }
      },
    },
  };
  </script>
  