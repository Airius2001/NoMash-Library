/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const cors = require("cors")({origin: true});
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
// const logger = require("firebase-functions/logger");

exports.countBooks = onRequest((req, res) => {
    cors(req, res, async ()=>{
        try {
            const booksCollection = admin.firestore().collection("books");
            const snapshot = await booksCollection.get();
            const count = snapshot.size;

            res.status(200).send({count});
        } catch (error){
            console.error("Error counting books: ", error.message);
            res.status(500).send("Error counting books");
        }
    });
});

// 监听 books 集合中新文档的创建
exports.capitalizeBookFields = functions.firestore
    .document("/books/{bookId}")
    .onCreate((snap, context) => {
        const bookData = snap.data(); // 获取新文档的数据
        const bookId = context.params.bookId; // 获取文档ID

        // uppercase name
        const updatedData = {
            name: bookData.name ? bookData.name.toUpperCase() : ""
        };

        // 更新 Firestore 中的书籍文档
        return admin.firestore().collection("books").doc(bookId).update(updatedData)
            .then(() => {
                console.log('Book fields capitalized successfully!');
            })
            .catch((error) => {
                console.error('Error capitalizing book fields: ', error);
            });
    });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
