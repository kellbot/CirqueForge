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
        Our study groups are offered on a "pay what you can" basis with a suggested donation of $5. 

        <span v-if="!isAuthenticated">
          <v-btn @click="login">REGISTER
        </v-btn> to RSVP
        </span>
      </div>
      <h2 class="text-center">Upcoming Events</h2>
      
    </v-responsive>
        <EventSlider />

  </v-container>
</template>

<script>
import EventSlider from '@/components/EventSlider.vue'
import { useAuth0 } from '@auth0/auth0-vue';

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
  components: {
    EventSlider
  }
}
</script>