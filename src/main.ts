import App from './App.vue';
import router from './router'
import vuetify from './plugins/vuetify/vuetify'
import { loadFonts } from './plugins/vuetify/webfontloader'
import { createMetaManager } from 'vue-meta'

loadFonts()

const app = createApp(App)
  .use(createMetaManager())
  .use(createPinia())
  .use(router)
  .use(vuetify);

app.mount('#app');
