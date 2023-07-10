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
    <a href="https://www.freepik.com/free-vector/group-friends-sitting-table-talking-drinking-coffee-tea-tiny-people-friends-meeting-cheer-up-friend-friendship-support-concept_10782457.htm#query=meeting%20club&position=3&from_view=search&track=ais">Image by vectorjuice</a> on Freepik
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
import meeting from '@/assets/19198014.jpg';


import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia'
const { user } = storeToRefs(useAppStore());
import EventCard from '@/components/EventCard.vue';

const appScriptUrl = 'https://script.google.com/macros/s/AKfycbwOSpw-zlGKEQoA8GUmohEdmk1hqszaW6qqG3Pei-E6vOGNnZkBAB-rx66NnS9ywoVcoA/exec?run=ok';

export default {
  data() {
    return {
      user: user,
      myEvents: [],
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
        switch( d.summary){
    case "Handstand Study Group":
      d.img = hands;
      break;
    case "Low Aerial Study Group":
      d.img = aerial;
      break;
    case "Test":
      d.img = meeting
  }
  return d;
});
    });  
  }
}

</script>