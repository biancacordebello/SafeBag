import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCWW0yI8qT1I-5pTXJNjsy5x0A34luN7oM",
  authDomain: "teste-83f22.firebaseapp.com",
  databaseURL: "https://teste-83f22-default-rtdb.firebaseio.com",
  projectId: "teste-83f22",
  storageBucket: "teste-83f22.appspot.com",
  messagingSenderId: "638855288336",
  appId: "1:638855288336:web:c03233837bec2528541c95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;