<template>
    <div>
      <h1>Books with ISBN > 1000</h1>
      <ul>
        <li v-for="book in books" :key="book.id">
          {{ book.name }} - ISBN: {{ book.isbn }}
          <input v-model="book.newName" placeholder="New name" />
          <button @click="updateBook(book.id, book.newName)">Update</button>
          <button @click="deleteBook(book.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  
  <script>
  import { ref, onMounted } from 'vue';
import db from '../firebase/init.js';
import { collection, query, where, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export default {
  setup(){
    const books = ref([]);

    // Fetch books with ISBN > 1000
    const fetchBooks = async () => {
      try {
        const q = query(collection(db, 'books'), where('isbn', '>', 1000));
        const querySnapshot = await getDocs(q);
        const booksArray = [];
        querySnapshot.forEach((doc) => {
          booksArray.push({ id: doc.id, ...doc.data(), newName: '' }); // Add newName field for update
        });
        books.value = booksArray;
      } catch (error) {
        console.error('Error fetching books: ', error);
      }
    };

    // Update book name
    const updateBook = async (bookId, newName) => {
      if (!newName) return;
      const bookRef = doc(db, 'books', bookId);
      try {
        await updateDoc(bookRef, {
          name: newName
        });
        alert('Book updated successfully!');
        fetchBooks(); // Re-fetch books after update
      } catch (error) {
        console.error('Error updating document: ', error);
      }
    };

    // Delete book
    const deleteBook = async (bookId) => {
      const bookRef = doc(db, 'books', bookId);
      try {
        await deleteDoc(bookRef);
        alert('Book deleted successfully!');
        fetchBooks(); // Re-fetch books after deletion
      } catch (error) {
        console.error('Error deleting document: ', error);
      }
    };

    onMounted(() => {
      fetchBooks();
    });

    return {
      books,
      updateBook,
      deleteBook
    };
  }
};

</script>
  