
<template>
  <div>
      <v-list-item-group class="d-flex"><list-item v-for="r in rsvps" class="d-flex"><EventCard :card-event="getEvent(r.id)" :logged-in="isLoggedIn" :is-selected="true"/></list-item></v-list-item-group>

  </div>
  {{  activeUser }}
</template>

<script setup>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getCurrentInstance , watch, ref} from 'vue';
import { getRsvps } from '@/rsvp.js'
import { useAppStore  } from '@/store/app'
import EventCard from '@/components/EventCard.vue'

const { getEvent } = useAppStore();
const vm = getCurrentInstance().appContext.config.globalProperties;
const  isLoggedIn = vm.$isLoggedIn;
const  activeUser = vm.$activeUser;
let rsvps = [];
rsvps =  getRsvps(activeUser)

watch(activeUser, 
(user) => {
   rsvps =  getRsvps(user)
});
</script>