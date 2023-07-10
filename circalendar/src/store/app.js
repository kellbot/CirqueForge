// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    // if (localStorage.getItem("app"))
    //   return JSON.parse(localStorage.getItem("app"));
    return {
      user : {
        loggedIn: false,
        registerOpen: false,
        experiences: [],
        fullName: "Ned Flanders",
      }
    }
  },
})
