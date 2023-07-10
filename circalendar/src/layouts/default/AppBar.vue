<template>
  <v-app-bar flat
  color="primary">
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      CirquePlexForge
    </v-app-bar-title>
    <v-btn href="">Events</v-btn>
    <v-btn>About Us</v-btn>
    <v-spacer></v-spacer>
    <v-divider vertical></v-divider>
    <v-btn v-if="user.loggedIn" href="">
           {{ user.fullName }}
        </v-btn>
    <v-btn v-if="!user.loggedIn" href="" @click="user.registerOpen = true">
           Log In / Register
        </v-btn>
        <v-divider vertical></v-divider>
   
        <v-btn href="" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>


        
  </v-app-bar>
  <v-system-bar  window color="background-darken-1" class="elevation-1">
  
  CircusForge > Home
  <v-spacer></v-spacer>
</v-system-bar>
</template>

<script>
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia'
const { user } = storeToRefs(useAppStore());

export default {
data() {
    return {
      user: user,
    }
  }
}

</script>
