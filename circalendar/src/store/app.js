// Utilities
import { defineStore } from 'pinia'
import hands from '@/assets/woman-doing-sport-exercises.jpg';
import aerial from '@/assets/leg-stretching-with-red-linen.jpg';
import meeting from '@/assets/19198014.jpg';

export const useAppStore = defineStore('cal', {
  state: () => {
    if (localStorage.getItem("cal")) 
      return JSON.parse(localStorage.getItem("cal"));
    console.log('no data found');
    return {
      calendar: {
        data: [],
        loading: false,
        lastUpdated: new Date(0)
      }
    }
  },
  getters: {
    getEvents: (state) => {
      return state.calendar.data;
    },
    getRelatedEvents: (state) => {
      return (recurrenceId) => state.calendar.data.filter(event => event.recurringEventId == recurrenceId);
    },
    getEventsByMonth: (state) => {
      return (month) => state.calendar.data.filter(event=> new Date(event.start.dateTime).getMonth() == month);
    }
  },
  actions:
{
    reset() {
      this.calendar = {calendar: {
        data: [],
        loading: false,
        lastUpdated: new Date(0)
      }}
    },
    async getCalendar() {
      localStorage.removeItem('cal');
      this.calendar.loading = true;
      console.log('Fetching calendar data');
      // TODO: Deduplicate this
      const appScriptUrl = 'https://script.google.com/macros/s/AKfycbwOSpw-zlGKEQoA8GUmohEdmk1hqszaW6qqG3Pei-E6vOGNnZkBAB-rx66NnS9ywoVcoA/exec?run=ok';

      fetch(appScriptUrl).then(response => response.json())
        .then((data) => {
          this.calendar.data = data.map(d => {
            switch (d.summary) {
              case "Handstand Study Group":
                d.img = hands;
                break;
              case "Low Aerial Study Group":
                d.img = aerial;
                break;
              case "Test":
                d.img = meeting
            }
            return d;
          });
          this.calendar.loading = false;
          this.calendar.lastUpdated = new Date();
        });
            }
}
});



