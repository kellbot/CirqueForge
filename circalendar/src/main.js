/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
console.log(import.meta.env.MODE)
console.log(import.meta.env.VITE_FIREBASE_API_KEY)


// Components
import App from './App.vue'

// Composables
import { createApp, watch } from 'vue'
import pinia from './store'


// Plugins
import { registerPlugins } from '@/plugins'



import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase

const database = firebase.initializeApp(
  firebaseConfig
);

const app = createApp(App)

registerPlugins(app)

app.mount('#app')


watch(
  pinia.state,
  (state) => {
    localStorage.setItem("cal", JSON.stringify(state.cal));
  },
  { deep: true }
  );

