
<template>
  <v-container  v-if="currentEvent" >

    <v-row no-gutters>
        
  <v-col cols="6"><v-card  elevation="3" color="white" >
    <v-img height="200" :src="currentEvent.img" cover class="text-white"></v-img>
    <v-card-title>{{currentEvent.summary}}</v-card-title>
    <v-card-subtitle>{{ new Date(currentEvent.start.dateTime).format('l, F j g:i a') }}</v-card-subtitle>
    
    <v-card-subtitle><v-icon icon="mdi-map-marker"></v-icon>{{ currentEvent.location }}</v-card-subtitle>
    <v-card-text>{{ currentEvent.description }}</v-card-text>
 
  </v-card></v-col>
  <v-col class="ml-4">  
    <v-btn size="x-large" class="w-50 mx-auto my-4">RSVP</v-btn>
    <h2>Related Events</h2>
    <template v-for="e in getRelatedEvents(currentEvent.recurringEventId)">
       <v-card class="d-flex mb-2 pa-2"><v-sheet class="d-flex align-center text-black">{{  niceDate(e.start.dateTime) }}</v-sheet>
    <v-btn color="primary" class="ml-auto">RSVP</v-btn></v-card>
    </template></v-col>
                    </v-row>
                    <v-row no-gutters>
        <v-col cols="12"><h2>Upcoming Events</h2></v-col>    <EventSlider />
    </v-row>

                    </v-container>
                    <v-container v-else>
<v-row no-gutters>
    <v-col class="text-h2">Upcoming Events</v-col>
    </v-row>
    
  <v-timeline>
<template v-for="month in displayedMonths">
    <v-timeline-item><h2>{{ monthNameFromNumber(month)  }}</h2></v-timeline-item>
        <v-timeline-item v-for="event in getEventsByMonth(month)"
      dot-color="purple-lighten-2"
      fill-dot
    >
      <v-card>
        <v-card-title>
            {{ event.summary }}
        </v-card-title>
        <v-card-subtitle>
            {{  niceDate(event.start.dateTime) }}
        </v-card-subtitle>
        <v-card-action><v-btn elevation="0">More Info</v-btn></v-card-action>
      </v-card>
    </v-timeline-item>
</template>

  </v-timeline>



                    </v-container>

</template>
<script setup>
import { useRoute } from 'vue-router'
import EventSlider from '@/components/EventSlider.vue'

import {ref, computed} from 'vue'

import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';
const appStore =  useAppStore();
const {getEvents, calendar} = useAppStore();
const {getRelatedEvents, getEventsByMonth } = storeToRefs(useAppStore());

const displayedMonths = computed(() => {
  let thisMonth = new Date().getMonth();
  let monthsChecked = 0;
  let months = [];
  let eventCount = 1;
  while (eventCount > 0 && monthsChecked < 12 ) {
    let eventCount = appStore.getEventsByMonth(thisMonth + monthsChecked).length;
    if (eventCount > 1) months.push(thisMonth + monthsChecked)
    monthsChecked++
  }
  return months;
})

function monthNameFromNumber(monthNo) {
    let m = new Date();
    m.setMonth(monthNo);
    return m.toLocaleString('en-US', { month: 'long' });
}

function niceDate(time) {
    return new Date(time).format('l, F j g:i a')
}
const route = useRoute()
const currentEvent = ref(null);

    currentEvent.value = getEvents.filter((e) => e.id == route.params.id)[0];
   const loading = calendar.loading;

</script>
