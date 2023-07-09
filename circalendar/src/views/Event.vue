
<template>
  <v-container>
    <v-row no-gutters>
        <v-col cols="12"><h2>Upcoming Events</h2></v-col>
    </v-row>
    <v-row no-gutters>
        
      <v-col
        v-for="experience in Experiences" 
        :key="experience._id"
        cols="12"
        sm="4"
      > 

         <v-card class="ma-4">
            <v-img
            height="200"
            :src="`https://picsum.photos/200/100?random=${experience._id}`"><v-card-actions>
              <v-spacer></v-spacer>

              <router-link :to="{name: 'edit', params: { id: experience._id }}" class="btn btn-success">
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-pencil"></v-btn>
        </router-link>
              <v-btn  @click.prevent="deleteExperience(experience._id)" class="btn btn-danger" size="small" color="surface-variant" variant="text" icon="mdi-trash-can"></v-btn>

            </v-card-actions></v-img>
                    <v-card-title>{{ experience.title }}</v-card-title>
                    <v-card-text>{{ experience.description }}
                        {{ experience.start }}</v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn>Sign Up</v-btn>
                        </v-card-actions>
                        
                    </v-card>
                    </v-col>
                    </v-row>
                    </v-container>

</template>
<script>
   import axios from "axios";
    export default {
        data() {
            return {
                Experiences: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api/experience';
            axios.get(apiURL).then(res => {
                this.Experiences = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteExperience(id){
                let apiURL = `http://localhost:4000/api/experience/delete-experience/${id}`;
                let indexOfArrayItem = this.Experiences.findIndex(i => i._id === id);
                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Experiences.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>
