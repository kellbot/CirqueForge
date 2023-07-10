/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import { createAuth0 } from '@auth0/auth0-vue';
import App from './App.vue'

// Composables
import { createApp } from 'vue'


// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)


app.use(
    createAuth0({
      domain: "dev-krqmjv60a1pp30yx.us.auth0.com",
      clientId: "oh8S7aGKo8PAmgcIsrH4TYXmD45a5IhZ",
      authorizationParams: {
        redirect_uri: window.location.origin + '/CirqueForge/'
      }
    })
  );

registerPlugins(app)

app.mount('#app')