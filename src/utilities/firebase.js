// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
 apiKey: "AIzaSyCt00WmApqxrgD9G5tUBSdeDKayinx6Cv0",
 authDomain: "vue-app-f78b4.firebaseapp.com",
 projectId: "vue-app-f78b4",
 storageBucket: "vue-app-f78b4.appspot.com",
 messagingSenderId: "875453097770",
 appId: "1:875453097770:web:5fcde32e6dd727f631e053"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase; 