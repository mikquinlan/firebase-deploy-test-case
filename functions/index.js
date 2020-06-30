const functions = require('firebase-functions');

const myKey = functions.config().analytics.mykey;

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log(`Got my key config ${myKey}`);
 response.send("Hello from Firebase!");
});
