<template>
  <v-app>
    <default-bar />

    <default-view />
  </v-app>
</template>
<style>
a {
  color: white
}
 .v-card-text a {
    color: rgb(var(--v-theme-secondary))
 }
 .pointer {
  cursor: pointer;
 }
</style>
<script setup>
import store from '@/store';
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import { useAppStore } from '@/store/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
try {
  if (new Date(appStore.calendar.lastUpdated).getTime() < Date.now() - (6000 * 20)) {
    console.log("refreshing calendar");
    localStorage.removeItem('cal');
    //appStore.reset();
    appStore.getCalendar();
  } else {
    console.log(appStore.calendar);
    console.log(Date.now());
    console.log(appStore.calendar.lastUpdated);
    const diff = Date.now() - new Date(appStore.calendar.lastUpdated).getTime();
    console.log (`${new Date(diff).getMinutes()}:${new Date(diff).getSeconds()}`); 
  }
} catch (e) {
  console.log(e);
  console.log(appStore.calendar)
}
</script>
