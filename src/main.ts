import App from './App.vue';
import router from './router'
import vuetify from './plugins/vuetify/vuetify'
import { loadFonts } from './plugins/vuetify/webfontloader'
import { createMetaManager } from 'vue-meta'
import Vue3Storage from "vue3-storage";

loadFonts()

const app = createApp(App)
  .use(createMetaManager())
  .use(createPinia())
  .use(router)
  .use(vuetify)
  .use(Vue3Storage);

app.mount('#app');
