import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory  } from 'vue-router'

import JaenHome from "./views/JaenHome.vue";
import JaenHistory from "./views/JaenHistory.vue";


const routes = [
  { path: '/', component: JaenHome },
  { path: '/history', component: JaenHistory }
];
const router = createRouter({
  history: createWebHashHistory (),
  routes
})

const app = createApp(App);
app.use(router)

app.mount('#app')
