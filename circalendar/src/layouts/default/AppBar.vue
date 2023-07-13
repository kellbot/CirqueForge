<template>
  <v-app-bar flat color="primary">
    <v-app-bar-title>
      <v-icon icon="mdi-gymnastics" />

     <v-btn href="/"> Circus Forge</v-btn>
    </v-app-bar-title>
    <v-btn href="">Events</v-btn>
    <v-btn>About Us</v-btn>
    <v-spacer></v-spacer>
    <v-divider vertical></v-divider>

    <v-btn v-if="!isLoggedIn" href="/login">
      Log In / Register
    </v-btn>
 
    <profile v-if="isLoggedIn" :active-name="activeUser.displayName"/>
    <v-divider vertical></v-divider>
    <v-btn href="" icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
  <v-system-bar window color="background-darken-1" class="elevation-1">

    CircusForge > Home
    <v-spacer></v-spacer>
  </v-system-bar>
</template>

<script setup>

import firebase from 'firebase/compat/app';
import profile from '@/components/profile.vue';
import { ref } from 'vue';

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

