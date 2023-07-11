<template>
  <v-sheet class="pa-0 mx-auto" max-width="1100px" color="background">
    <div v-if="loading" class="text-center">
      Loading events<br />
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <v-slide-group multiple show-arrows>
      <v-slide-group-item v-for="n in realEvents" :key="n" v-slot="{ isSelected, toggle, selectedClass }">

        <eventCard :logged-in="user ? true : false" :card-event="n" :is-selected="isSelected" :selected-class="selectedClass"
          :rsvp="doRsvp" :toggle="toggle" />

      </v-slide-group-item>
    </v-slide-group>

  </v-sheet>
  <v-sheet color="background">
    <section id="firebaseui-auth-container"></section>
    <div class="card horizontal" style="max-width:400px;margin:0 auto;" v-if="user">
      <div class="card-image" style="margin-top:25px;margin-left:10px;"> <img :src="user.photoURL"
          style="width:75px;height:75px;border-radius:50%;border:4px solid #333" /> </div>
      <div class="card-stacked">
        <div class="card-content">
          <p> name: <strong>{{ user.displayName }}</strong><br />email:<strong>{{ user.email }}</strong><br />uid:
            <strong>{{ user.uid }}</strong> <br />provider: <strong
              class="teal-text">{{ user.providerData[0].providerId }}</strong>
          </p>
        </div>
      </div>
    </div>

  </v-sheet>
  <div v-if="user">LOGGED IN</div>
</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}

.going {
  z-index: 9999;
  position: absolute;
}
</style>
<script>
import hands from '@/assets/woman-doing-sport-exercises.jpg';
import aerial from '@/assets/leg-stretching-with-red-linen.jpg';
import meeting from '@/assets/19198014.jpg';
import EventCard from '@/components/EventCard.vue';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';

import "firebaseui/dist/firebaseui.css";
import * as firebaseui from 'firebaseui'

const appScriptUrl = 'https://script.google.com/macros/s/AKfycbwOSpw-zlGKEQoA8GUmohEdmk1hqszaW6qqG3Pei-E6vOGNnZkBAB-rx66NnS9ywoVcoA/exec?run=ok';
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


export default {
  setup() {

    return {
      rsvps: [],
      rsvp: {
        eventId: ''
      },
      user: null,
    };
  },
  data() {
    return {
      fetchedEvents: [],
      realEvents: '',
      loading: true,
      isAuthenticated: false
    }
  },

  components: {
    EventCard,
  },
  methods: {
    doRsvp() {
      return false;
    },
    signOut(e) {
      e.stopPropagation();
      firebase.auth().signOut();

    }
  },
  mounted() {
    let ui = firebaseui.auth.AuthUI.getInstance();
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth());
    }
    var uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID,    firebase.auth.EmailAuthProvider.PROVIDER_ID,]
    };
    ui.start("#firebaseui-auth-container", uiConfig);
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      }
    });
    fetch(appScriptUrl).then(response => response.json())
      .then(data => {
        this.realEvents = data.map(d => {
          switch (d.summary) {
            case "Handstand Study Group":
              d.img = hands;
              break;
            case "Low Aerial Study Group":
              d.img = aerial;
              break;
            case "Test":
              d.img = meeting
          }
          return d;
        });
        this.loading = false;
      });
  }

}

</script>