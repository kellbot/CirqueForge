<template>
  <v-container>
    <v-row class="ma-4">
      <v-col cols="12" md="5" >
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">Circus Forge</h1>
      </v-col>
      <v-col cols="12" md="7">
        <p>Circus Forge is a community organization dedicated to making intermediate and advanced circus arts more accessible. We meet
        in locations around the city of Phildelphia to share skills and connect with community. If you have space and would be willing to host us
        please <a href="mailto:info@circusforge.org">get in touch</a>!</p>
        <p>We are in the process of applying for 501c3 nonprofit status.</p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div class="ma-2 pa-2 text-center">
      <h3>Community Circus Open Mic</h3>
      <p>October 14, 2pm. Exact location TBD, but somewhere in Northwest Philly!</p>
      <p>This event is a chance to connect as a community and perform for each other. This outdoor performance will be free and open to the public. </p>
      <p><strong>Call for performers</strong>:<br />
        Interested in performing at our circus open mic? <a href="https://forms.gle/oiYLTWrWj8Drb6Gv8">Sign up here</a>! We welcome performers of all
        disciplines and skill levels, including (but not limited to) aerialists, jugglers, unicyclists, clowns, acrobats, and more. </p>
    </div>

    <v-divider></v-divider>
    <div class="ma-2 pa-2 text-center">
      Our study groups are offered on a "pay what you can" basis with a suggested donation of $5.
      <br />
      <div class="ma-2" v-if="!isLoggedIn">
        <v-btn href="/login">REGISTER
        </v-btn> to RSVP
      </div>
    </div>
    <h2 class="text-center">Upcoming Events</h2>
 
  <EventSlider />
  <v-row><v-col class="text-overline text-center">Images by <a
        href="https://www.freepik.com/free-photo/full-shot-woman-training-yoga-mat_21934968.htm#page=2&query=people%20handstands&position=6&from_view=search&track=ais">
        Freepik</a>,
      <a
        href="https://www.freepik.com/free-photo/leg-stretching-with-red-linen_8909234.htm#query=aerial%20silks%20people&position=7&from_view=search&track=ais">
        by Racool_studio</a>, and
      <a
        href="https://www.freepik.com/free-vector/group-friends-sitting-table-talking-drinking-coffee-tea-tiny-people-friends-meeting-cheer-up-friend-friendship-support-concept_10782457.htm#query=meeting%20club&position=3&from_view=search&track=ais">
        by vectorjuice</a> on Freepik</v-col></v-row>
      </v-container>
</template>

<script setup>
import EventSlider from '@/components/EventSlider.vue'
import { ref } from 'vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';

let activeUser = ref(null);

const isLoggedIn = ref(false);
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    isLoggedIn.value = true // if we have a user
    activeUser = user;
  } else {
    isLoggedIn.value = false // if we do not
  }
})

</script>
