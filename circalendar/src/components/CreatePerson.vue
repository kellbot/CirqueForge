<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create Person</h3>

  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="handleSubmitForm">
      <v-text-field
        v-model="person.name"
        label="Name"
      ></v-text-field>
      <v-text-field
        v-model="person.email"
        label="Email"
      ></v-text-field>
      <v-text-field
        v-model="person.phone"
        label="Phone"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
    export default {
        data() {
            return {
                person: {
                   name: '',
                   email: '',
                   phone: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:4000/api/create-person';
                
                axios.post(apiURL, this.person).then(() => {
                  this.$router.push('/view')
                  this.person = {
                    name: '',
                    email: '',
                    phone: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>