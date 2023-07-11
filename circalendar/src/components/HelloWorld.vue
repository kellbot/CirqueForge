<template>
  <v-container>
    <v-row class="ma-4">
      <v-col cols="12" md="5" >
        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">Circus Forge</h1>
      </v-col>
      <v-col cols="12" md="7">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit
        anim id est laborum.
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <div class="ma-2 pa-2 text-center">
      Our study groups are offered on a "pay what you can" basis with a suggested donation of $5.
      <br />
      <div class="ma-2" v-if="!isAuthenticated">
        <v-btn @click="login">REGISTER
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

<script>
import EventSlider from '@/components/EventSlider.vue'

export default {
  components: {
    EventSlider
  }
}
</script>