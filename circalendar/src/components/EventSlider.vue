<template>
  <v-sheet class="pa-0 mx-auto" max-width="1100px" color="background">
    <v-slide-group multiple show-arrows>
      <v-slide-group-item v-for="n in realEvents" :key="n" v-slot="{ isSelected, toggle, selectedClass }">

        <eventCard :logged-in="user.loggedIn" :card-event="n" :is-selected="isSelected" :selected-class="selectedClass"
          :toggle="toggle" />

      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
  Image by <a
    href="https://www.freepik.com/free-photo/full-shot-woman-training-yoga-mat_21934968.htm#page=2&query=people%20handstands&position=6&from_view=search&track=ais">Freepik</a>
  <br /><a
    href="https://www.freepik.com/free-photo/leg-stretching-with-red-linen_8909234.htm#query=aerial%20silks%20people&position=7&from_view=search&track=ais">Image
    by Racool_studio</a> on Freepik
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
<script>
import hands from '@/assets/woman-doing-sport-exercises.jpg';
import aerial from '@/assets/leg-stretching-with-red-linen.jpg';


import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia'
const { user } = storeToRefs(useAppStore());
import dummyEvents from '@/assets/calendar.json';

import EventCard from '@/components/EventCard.vue';

const appScriptUrl = 'https://script.google.com/macros/s/AKfycbwOSpw-zlGKEQoA8GUmohEdmk1hqszaW6qqG3Pei-E6vOGNnZkBAB-rx66NnS9ywoVcoA/exec?run=ok';

let imgEvents = dummyEvents.map(d => {
  d.img = d.summary == "Handstand Study Group" ? hands : aerial;
  return d;
});


export default {
  data() {
    return {
      user: user,
      myEvents: [],
      upcomingEvents: imgEvents,
      realEvents: '',
    }
  },
  components: {
    EventCard,
  },
  created() {
    fetch(appScriptUrl).then(response => response.json())
    .then(data => {
      this.realEvents = data.map(d => {
  d.img = d.summary == "Handstand Study Group" ? hands : aerial;
  return d;
});
    });  
  }
}

</script>