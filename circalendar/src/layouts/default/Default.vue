<template>
  <v-app>
    <default-bar />

    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';

const appStore =  useAppStore();
try{
if ( new Date(appStore.calendar.lastUpdated).getTime() < new Date().getTime() - (6000*20) ) {
  console.log("refreshing calendar");
  localStorage.removeItem('cal');
  //appStore.reset();
  appStore.getCalendar();
}
} catch (e) {
  console.log(e);
  console.log(appStore.calendar)
}
</script>
