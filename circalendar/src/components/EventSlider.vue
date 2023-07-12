<template>
  <v-sheet class="pa-0 mx-auto" max-width="1100px" color="background">
    <div v-if="loading" class="text-center">
      Loading events<br />
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <v-slide-group multiple show-arrows>
      <v-slide-group-item v-for="n in realEvents" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
 
        <EventCard :logged-in="activeUser ? true : false" :card-event="n" :is-selected="isSelected || isGoing(n.id, rsvps)"
          :selected-class="selectedClass" :rsvp="doRsvp" :toggle="toggle" />
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
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
<script setup>
import hands from '@/assets/woman-doing-sport-exercises.jpg';
import aerial from '@/assets/leg-stretching-with-red-linen.jpg';
import meeting from '@/assets/19198014.jpg';
import EventCard from '@/components/EventCard.vue';
import firebase from 'firebase/compat/app';
const appScriptUrl = 'https://script.google.com/macros/s/AKfycbwOSpw-zlGKEQoA8GUmohEdmk1hqszaW6qqG3Pei-E6vOGNnZkBAB-rx66NnS9ywoVcoA/exec?run=ok';

import { ref } from 'vue'

import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';

let activeUser = ref(null);
let realEvents = ref(null);
const loading = ref(true);
const isLoggedIn = ref(false);
const rsvps = ref([]);

function isGoing(id, rsvps) {
  return (rsvps[id] && rsvps[id].going)
}

function doRsvp(eventId, register) {
  console.log(register);
  if (register) {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("rsvps")
      .doc(eventId).set({
        going: true
      })
  } else {
    console.log(eventId);
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("rsvps")
      .doc(eventId)
      .delete().then(function () { 
      console.log("Document successfully deleted!"); 

}).catch(
    function(error) { 
    console.error("Error removing document: ", error); 
});
  }

}

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true // if we have a user
    activeUser = user;
    getRsvps();
  } else {
    isLoggedIn.value = false // if we do not
  }
})


async function getRsvps() {
  var rsvpRef = await firebase
    .firestore()
    .collection("users")
    .doc(firebase.auth().currentUser.uid)
    .collection("rsvps");

  rsvpRef.onSnapshot(snap => {
    rsvps.value = [];
    snap.forEach(doc => {
      
      rsvps.value[doc.id] = doc.data();
      
    });
  });
}

fetch(appScriptUrl).then(response => response.json())
  .then((data) => {
    realEvents = data.map(d => {
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
    loading.value = false;
  });


</script>