/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
console.log(import.meta.env.MODE)



// Components
import App from './App.vue'

// Composables
import { createApp, watch, ref } from 'vue'
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

app.config.globalProperties.$isLoggedIn = ref(false);
app.config.globalProperties.$activeUser = ref(null);


firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    app.config.globalProperties.$isLoggedIn.value = true // if we have a user
    app.config.globalProperties.$activeUser.value = user;
  } else {
    app.config.globalProperties.$isLoggedIn.value = false // if we do not
  }
})

watch(
  pinia.state,
  (state) => {
    localStorage.setItem("cal", JSON.stringify(state.cal));
  },
  { deep: true }
  );

