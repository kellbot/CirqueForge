<template>
  <v-sheet class="pa-0 mx-auto" max-width="1100px" color="background">
    <div v-if="loading" class="text-center">
      Loading events<br/>
      <v-progress-circular indeterminate></v-progress-circular></div>
    <v-slide-group multiple show-arrows>
      <v-slide-group-item v-for="n in realEvents" :key="n" v-slot="{ isSelected, toggle, selectedClass }">

        <eventCard :logged-in="isAuthenticated" :card-event="n" :is-selected="isSelected" :selected-class="selectedClass"
          :rsvp="rsvp" :toggle="toggle" />

      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
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

import { useAuth0 } from '@auth0/auth0-vue';

import EventCard from '@/components/EventCard.vue';

const appScriptUrl = 'https://script.google.com/macros/s/AKfycbwOSpw-zlGKEQoA8GUmohEdmk1hqszaW6qqG3Pei-E6vOGNnZkBAB-rx66NnS9ywoVcoA/exec?run=ok';

export default {
  setup() {
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
    return {
      login: () => {
        loginWithRedirect();
      },
      logout() {
        logout()
      },
      user,
      isAuthenticated
    };
  },
  data() {
    return {
      myEvents: [],
      realEvents: '',
      loading: true
    }
  },
  components: {
    EventCard,
  },
  methods: {
    rsvp(eventId) {
      const rsvpurl = appScriptUrl + `&add=${encodeURIComponent(this.user.name)}&id=${encodeURIComponent(eventId)}`;

      fetch(rsvpurl).then(response => response.json());

    },
  },
  created() {
    fetch(appScriptUrl).then(response => response.json())
      .then(data => {
        this.realEvents = data.map(d => {
          switch (d.summary) {
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
        this.loading = false;
      });
  }

}

</script>