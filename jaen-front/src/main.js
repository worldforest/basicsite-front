import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(router)
app.use(store)
app.mount('#app')