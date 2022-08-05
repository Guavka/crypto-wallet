import App from './App.vue';
import router from './router'
import { loadFonts } from '@plugins/vuetify/webfontloader'
import { createMetaManager } from 'vue-meta'
import Vue3Storage from "vue3-storage";
import vuetify from '@plugins/vuetify/vuetify';
import i18n from '@plugins/i18n';


loadFonts()
const app = createApp(App)
  .use(createMetaManager())
  .use(createPinia())
  .use(router)
  .use(i18n)
  .use(vuetify)
  .use(Vue3Storage);

app.mount('#app');
