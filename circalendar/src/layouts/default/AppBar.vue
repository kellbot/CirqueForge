<template>
  <v-app-bar flat color="primary">
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      CirquePlexForge
    </v-app-bar-title>
    <v-btn href="">Events</v-btn>
    <v-btn>About Us</v-btn>
    <v-spacer></v-spacer>
    <v-divider vertical></v-divider>

    <v-btn v-if="!user" @click="login">
      Log In / Register
    </v-btn>
    <!-- <profile v-if="user" /> -->
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

<script>

import firebase from 'firebase/compat/app';
import profile from '@/components/profile.vue';

export default {
  name: "NavBar",
   data() {
    return{
    isAuthenticated: false,
    user: null
  }
  },
  components: {
    profile
  },
  methods: {
    login() {
      return false;
    }
  },
  created() {
       firebase.auth().onAuthStateChanged(user => {
           if (user) {
               this.user = user;
           }
       });
   }
};

</script>

