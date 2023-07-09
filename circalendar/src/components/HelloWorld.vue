<template>
  <v-container>
    <v-responsive class="align-center text-center">
     
      <div class="d-flex">
        <div class="flex-1-0 ma-2 pa-2">
          <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

          <h1 class="text-h2 font-weight-bold">Circus Forge</h1>

        </div>

        <div class="ma-2 pa-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
          eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit
          anim id est laborum.

        </div>
        
       

      </div>
      <v-divider></v-divider>
      <div class="ma-2 pa-2">
          Our study groups are free but you will need to <v-btn>REIGSTER</v-btn> and RSVP
        </div>
      <h2 class="text-center">Upcoming Events</h2>
      <EventSlider />
    </v-responsive>
  </v-container>
</template>

<script setup>
import EventSlider from '@/components/EventSlider.vue'
</script>