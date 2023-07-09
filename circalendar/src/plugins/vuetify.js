/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import colors from 'vuetify/lib/util/colors'

const myCustomLightTheme = {
  dark: false,
  colors: 
  {
    primary: colors.lightGreen.darken3,
    secondary: colors.teal.lighten1,
    accent: colors.cyan.base,
    error: colors.blueGrey.base,
    warning: colors.amber.base,
    info: colors.yellow.base,
    success: colors.lightGreen.base,
    background: "#666666",
    cardBackground: '#f6f6f6'
    }
  
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    variations: {
      colors: ['background', 'primary', 'secondary'],
      lighten: 1,
      darken: 3,
    },
    themes: {
      myCustomLightTheme,
    },
  },
})
