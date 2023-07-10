<template>
  <v-sheet class="pa-0 mx-auto" max-width="1100px" color="background">
    <v-slide-group multiple show-arrows>
      <v-slide-group-item v-for="n in upcomingEvents" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
        <v-hover v-slot="{ isHovering, props }">
          <v-card elevation="3" color="white" :class="['ma-4', selectedClass, 'text-left']" v-bind="props" width="250">
            <v-img height="200" :src="n.img" cover class="text-white">

              <div v-if="isHovering"
                class="d-flex flex-column transition-fast-in-fast-out bg-secondary v-card--reveal text-h2"
                style="height: 100%;">
                <v-btn v-if="user.loggedIn" class="w-75 ma-5 bg-white" @click="toggle"><span v-if="isSelected">Cancel</span> RSVP</v-btn>
                <v-btn class="w-75">More Info</v-btn>
              </div>
              <div v-if="isSelected" class="text-center going w-100 bg-success">
                GOING
              </div>
            </v-img>
            <v-card-title class="pt-2 pb-0">{{ n.summary }}</v-card-title>
           
            <v-card-subtitle class="pb-2">{{ new Date(n.start.dateTime).format('l, F j g:i a') }}</v-card-subtitle>
            

          </v-card>
        </v-hover>
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

let imgEvents = dummyEvents.map(d => {
  d.img = d.summary == "Handstand Study Group" ?  hands : aerial;
  return d;
});


export default {
  data() {
    return {
      user: user,
      myEvents: [],
      upcomingEvents: imgEvents,
    }
  },
}

</script>