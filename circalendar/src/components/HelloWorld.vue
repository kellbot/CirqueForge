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
        <span v-if="!loggedIn">
          <v-btn>REIGSTER

          <v-dialog v-model="dialog" activator="parent" width="auto">
            <v-card>
              <v-card-text v-if="!registartionSubmitted">
                After registration click the link in the email to log in.
                
                <v-sheet max-width="300" class="mx-auto">
                  <v-form>
                    <v-text-field class="bg-grey-lighten-3 text-black" v-model="firstName" label="First name"></v-text-field>
                    <v-text-field class="bg-grey-lighten-3 text-black" v-model="lastName" label="Last name"></v-text-field>
                    <v-text-field class="bg-grey-lighten-3 text-black" v-model="emailAddress" label="Email"></v-text-field>

                    <v-btn type="submit" block class="mt-2" text="Submit" @click.prevent="doSubmit"></v-btn>
                  </v-form>
                </v-sheet>
              </v-card-text>
              <v-card-text v-else>
                Please check your email for the login link. [<a  href='' @click.prevent="login">Link from email</a>]
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" block @click="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-btn> to RSVP
        </span>
      </div>
      <h2 class="text-center">Upcoming Events</h2>
      <EventSlider />
    </v-responsive>
  </v-container>
</template>

<script>
import EventSlider from '@/components/EventSlider.vue'
export default {
  data() {
    return {
      dialog: false,
      registartionSubmitted: false,
      loggedIn: false,
      firstName: '',
      lastName: '',
      emailAddress: '',
    }
  },
  methods: {
        doSubmit() {
          console.log("Some behind-the-scenes submission action...");
          this.registartionSubmitted = true;
        },
        login() {
          this.loggedIn = true
        }
      },
  components: {
    EventSlider
  }
}
</script>