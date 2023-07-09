<template>
  <v-app-bar flat
  color="primary">
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      CirquePlexForge
    </v-app-bar-title>
    <v-btn href="/events">Events</v-btn>
    <v-btn>About Us</v-btn>
    <v-btn href="/profile/add">
           Log In / Register
        </v-btn>
    <v-spacer></v-spacer>
        <v-btn href="/profile" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>


        
  </v-app-bar>
  <v-system-bar  window color="background-darken-1" class="elevation-1">
  
  CircusForge > Home
  <v-spacer></v-spacer>
</v-system-bar>
</template>

<script setup>
  //
</script>
