<template>
  <v-sheet class="pa-0 mx-auto" max-width="1100px" color="background">
    <div v-if="calendar.loading" class="text-center">
      Loading events<br />
      <v-progress-circular indeterminate></v-progress-circular>
    </div>
    <v-slide-group multiple show-arrows>
      <v-slide-group-item v-for="n in realEvents" :key="n" v-slot="{ isSelected, toggle, selectedClass }">

        <EventCard :logged-in="isLoggedIn" :card-event="n"
          :is-selected="isSelected || isGoing(n.id, rsvps)" :selected-class="selectedClass" :rsvp="doRsvp"
          :toggle="toggle" />
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

import EventCard from '@/components/EventCard.vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';
import { ref, reactive } from 'vue'
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';

const {getEvents, calendar} = storeToRefs(useAppStore());



let activeUser = ref(null);
let realEvents = ref(getEvents);
const isLoggedIn = ref(false);
let rsvps = ref([]);


function isGoing(id, rsvps) {
  return (rsvps[id] && rsvps[id].going)
}

function doRsvp(eventId, register) {

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
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .collection("rsvps")
      .doc(eventId)
      .delete().then(function () {
        console.log("Document successfully deleted!");

      }).catch(
        function (error) {
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
    rsvps.value = [];
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


</script>