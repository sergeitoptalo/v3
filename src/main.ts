import { createApp } from 'vue';
import App from './app.component.vue';
/* import router from "./router"; */
import router from './app.routing';

createApp(App)
  .use(router)
  .mount('#app');
