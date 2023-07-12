// Utilities
import { defineStore } from 'pinia'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      user: null,
      loading: false,
      userProfile: null,
      listenerUnsubscribe: null
    }
  },

});
  
