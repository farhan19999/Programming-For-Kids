// Import the functions you need from the SDKs you need
const { initializeApp } = require( "firebase/app");
const { getAnalytics } = require("firebase/analytics");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp5SwIbWOh_kKdRzzstCv70bJrUD1qNac",
  authDomain: "programming-for-kids-395814.firebaseapp.com",
  projectId: "programming-for-kids-395814",
  storageBucket: "programming-for-kids-395814.appspot.com",
  messagingSenderId: "950822436478",
  appId: "1:950822436478:web:b7aa28f5327925eca4622f",
  measurementId: "G-750KNF8C5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

module.exports = {app}