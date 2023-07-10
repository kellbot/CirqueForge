<template>
  <v-app-bar flat color="primary">
    <v-app-bar-title>
      <v-icon icon="mdi-circle-slice-6" />

      CirquePlexForge
    </v-app-bar-title>
    <v-btn href="">Events</v-btn>
    <v-btn>About Us</v-btn>
    <v-spacer></v-spacer>
    <v-divider vertical></v-divider>

    <v-btn v-if="!isAuthenticated" @click="login">
      Log In / Register
    </v-btn>
 
    <profile v-if="isAuthenticated" />
    <v-divider vertical></v-divider>
    <v-btn href="" icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>



  </v-app-bar>
  <v-system-bar window color="background-darken-1" class="elevation-1">

    CircusForge > Home
    <v-spacer></v-spacer>
  </v-system-bar>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';
import profile from '@/components/profile.vue';
export default {
  name: "NavBar",
  setup() {
    const auth0 = useAuth0();
    
    return {
      isAuthenticated: auth0.isAuthenticated,
      isLoading: auth0.isLoading,
      user: auth0.user,
      login() {
        auth0.loginWithRedirect();
      },
      logout() {
        auth0.logout({
          logoutParams: {
            returnTo: window.location.origin
          }
        });
      }
    }
  },
  components: {
    profile
  }
};

</script>

