<template>
  <v-app-bar flat color="primary">
    <v-app-bar-title>
      <v-icon icon="mdi-gymnastics" />

     <v-btn to="/"> Circus Forge</v-btn>
    </v-app-bar-title>
    <v-btn to="/events">Events</v-btn>
    <v-btn>About Us</v-btn>
    <v-spacer></v-spacer>
    <v-divider vertical></v-divider>

    <v-btn v-if="!isLoggedIn" to="/login">
      Log In / Register
    </v-btn>
 
    <profile v-if="isLoggedIn" :do-logout="doLogout" :active-name="activeUser.displayName"/>
    <v-divider vertical></v-divider>
    <v-btn href="" icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
  <v-system-bar window color="background-darken-1" class="elevation-1">

  </v-system-bar>
</template>

<script setup>

import firebase from 'firebase/compat/app';
import profile from '@/components/profile.vue';
import { getCurrentInstance } from 'vue';
const vm = getCurrentInstance().appContext.config.globalProperties;
const  isLoggedIn = vm.$isLoggedIn;
const activeUser = vm.$activeUser;

function doLogout() {
  try {
    firebase.auth().signOut();
  } catch (e) {
    console.log('Error: duplicate logout')
  }
}




</script>

