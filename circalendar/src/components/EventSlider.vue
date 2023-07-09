<template>
  <v-sheet class="pa-0 mx-auto" max-width="1100px" color="background">
    <v-slide-group multiple show-arrows>
      <v-slide-group-item v-for="n in upcomingEvents" :key="n" v-slot="{ isSelected, toggle, selectedClass }">
        <v-hover v-slot="{ isHovering, props }">
          <v-card color="white" :class="['ma-4', selectedClass, 'text-left']" v-bind="props" width="250">
            <v-img height="200" :src="n.img" cover class="text-white">

              <div v-if="isHovering"
                class="d-flex flex-column transition-fast-in-fast-out bg-secondary v-card--reveal text-h2"
                style="height: 100%;">
                <v-btn class="w-75 ma-5 bg-white" @click="toggle"><span v-if="isSelected">Cancel</span> RSVP</v-btn>
                <v-btn class="w-75">More Info</v-btn>
              </div>
              <div v-if="isSelected" class="text-center going w-100 bg-success">
                GOING
              </div>
            </v-img>
            <v-card-title class="pt-2 pb-0">{{ n.title }}</v-card-title>
            <v-card-subtitle class="pb-2">{{ new Date(n.date).format('l, F j g:i a') }}</v-card-subtitle>
            

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


export default {
  data() {
    return {
      myEvents: [],
      upcomingEvents: [
        { title: "Handstand Study Group", img: aerial, date: '2019-07-16 9:00' },
        { title: "Low Aerial Study Group", img: hands, date: '2019-07-16 9:00' },
        { title: "Handstand Study Group", img: aerial, date: '2019-07-16 9:00' },
        { title: "Low Aerial Study Group", img: hands, date: '2019-07-16 9:00' },
        { title: "Handstand Study Group", img: aerial, date: '2019-07-16 9:00' },
        { title: "Low Aerial Study Group", img: hands, date: '2019-07-16 9:00' },
      ]
    }
  }
}


</script>