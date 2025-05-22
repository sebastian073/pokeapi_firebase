// firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCuL9r176mpP87mX7mfLxSS6By6449K-3g",
  authDomain: "pokeapi2-63d06.firebaseapp.com",
  projectId: "pokeapi2-63d06",
  storageBucket: "pokeapi2-63d06.firebasestorage.app",
  messagingSenderId: "112350546816",
  appId: "1:112350546816:web:6689bd1290ee5dc1facf65"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };