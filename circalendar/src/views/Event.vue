
<template>
    <v-container v-if="currentEvent">

        <v-row no-gutters>

            <v-col cols="6"><v-card elevation="3" color="white">
                    <v-img height="200" :src="currentEvent.img" cover class="text-white"></v-img>
                    <v-card-title>{{ currentEvent.summary }}</v-card-title>
                    <v-card-subtitle>{{ new Date(currentEvent.start.dateTime).format('l, F j g:i a') }}</v-card-subtitle>

                    <v-card-subtitle><v-icon icon="mdi-map-marker"></v-icon>{{ currentEvent.location }}</v-card-subtitle>
                    <v-card-text>{{ currentEvent.description }}</v-card-text>

                </v-card></v-col>
            <v-col class="ml-4">
                <v-btn v-if="isLoggedIn" size="x-large" class="w-50 mx-auto my-4"
                    @click="doRsvp(currentEvent.id, !going())">
                    <span v-if="going()">Cancel</span>
                    RSVP</v-btn>
                <h2>Related Events</h2>
                <template v-for="e in getRelatedEvents(currentEvent.recurringEventId)">
                    <v-card class="d-flex mb-2 pa-2"><v-sheet class="d-flex align-center text-black">{{
                        niceDate(e.start.dateTime) }}</v-sheet>
                        <v-btn color="primary" class="ml-auto">RSVP</v-btn></v-card>
                </template>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="12">
                <h2>Upcoming Events</h2>
            </v-col>
            <EventSlider />
        </v-row>

    </v-container>
    <v-container v-else>
        <v-row no-gutters>
            <v-col class="text-h2">Upcoming Events</v-col>
        </v-row>

        <template v-for="month in displayedMonths">
            <v-row>
                <h2>{{ monthNameFromNumber(month) }}</h2>
            </v-row>
            <v-row class="d-flex">
                <v-card class="ma-2 d-flex flex-no-wrap justify-space-between" v-for="event in getEventsByMonth(month)">
                    <v-avatar  class="ma-0"
                size="125"
                rounded="0"><v-img cover :src="event.img"></v-img></v-avatar>
                    <div><v-card-title>
                        {{ event.summary }}
                    </v-card-title>
                    <v-card-subtitle>
                        {{ niceDate(event.start.dateTime) }}
                    </v-card-subtitle>
                    <v-card-actions><v-btn elevation="0" :to="`/events/id/${event.id}`">More
                            Info</v-btn></v-card-actions>
                            </div>
                </v-card>
            </v-row>
        </template>
    </v-container>
</template>
<script setup>
import { useRoute } from 'vue-router'
import EventSlider from '@/components/EventSlider.vue'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';
import { ref, watch, computed } from 'vue'

import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';
const appStore = useAppStore();
const { getEvents, calendar } = useAppStore();
const { getRelatedEvents, getEventsByMonth } = storeToRefs(useAppStore());
const isLoggedIn = ref(false);

const route = useRoute()
const currentEvent = ref(null);
const rsvps = ref([]);
let activeUser = ref(null);

const displayedMonths = computed(() => {
    let thisMonth = new Date().getMonth();
    let monthsChecked = 0;
    let months = [];
    let eventCount = 1;
    while (eventCount > 0 && monthsChecked < 12) {
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

function going() {
    return (rsvps.value[route.params.id] && rsvps.value[route.params.id].going)
}


async function getRsvps() {
    var rsvpRef = await firebase
        .firestore()
        .collection("users")
        .doc(firebase.auth().currentUser.uid)
        .collection("rsvps");

    rsvpRef.onSnapshot(snap => {
        rsvps.value = [];
        snap.forEach(doc => {

            rsvps.value[doc.id] = doc.data();

        });
    });
}


function doRsvp(eventId, register) {
    if (!firebase.auth().currentUser.uid) return;
    if (register) {
        firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("rsvps")
            .doc(eventId).set({
                going: true
            })
    } else {
        firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("rsvps")
            .doc(eventId)
            .delete().then(function () {
                console.log("Document successfully deleted!");

            }).catch(
                function (error) {
                    console.error("Error removing document: ", error);
                });
    }

}


firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        isLoggedIn.value = true // if we have a user
        activeUser = user;
        getRsvps();
    } else {
        isLoggedIn.value = false // if we do not
    }
})

watch(
    route,
    (newRoute) => {

        currentEvent.value = getEvents.filter((e) => e.id == newRoute.params.id)[0];
    }
);


currentEvent.value = getEvents.filter((e) => e.id == route.params.id)[0];

</script>
