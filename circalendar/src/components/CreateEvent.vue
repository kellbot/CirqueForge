<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Event</h3>

  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="handleSubmitForm">
      <v-text-field
        v-model="experience.title"
        label="Title"
      ></v-text-field>
      <v-text-field
        v-model="experience.description"
        label="Description"
      ></v-text-field>
      <v-date-picker v-model="experience.start"
        color="primary"
        input-mode="keyboard"
        show-adjacent-months
      ></v-date-picker>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { VDatePicker } from 'vuetify/labs/VDatePicker'

    export default {
        data() {
            return {
                experience: {
                   title: '',
                   description: '',
                   start: [new Date()],
                   end: null, 
                   linkedId: null
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/experience/create-experience';
                console.log(this.experience);
                axios.post(apiURL, this.experience).then(() => {
                  this.$router.push('/events')
                  this.experience =  {
                   title: '',
                   description: '',
                   start: '',//,Date.now(),
                   end: {}, 
                   linkedId: null
                }
                }).catch(error => {
                    console.log(error)
                });
            }
        },
        components: {
    VDatePicker,
  }
    };
</script>