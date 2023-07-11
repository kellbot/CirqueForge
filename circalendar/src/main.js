/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'


// Plugins
import { registerPlugins } from '@/plugins'



import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAgrUB1D6qh-AcSZCgeS5hXToetWc_eS98",
  authDomain: "public-calendar-sync.firebaseapp.com",
  projectId: "public-calendar-sync",
  storageBucket: "public-calendar-sync.appspot.com",
  messagingSenderId: "316754049831",
  appId: "1:316754049831:web:efb98205e9b16d10950702",
  measurementId: "G-8K4ZWCFW40"
};

// Initialize Firebase

const database = firebase.initializeApp(
  firebaseConfig
);

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

