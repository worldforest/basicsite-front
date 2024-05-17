import { createApp } from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'
import router from './router';
// import store from './store';
import store from '@/store/index.js';
import axios from "axios";
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
const app = createApp(App);
app.config.globalProperties.axios = axios;
app.use(router)
app.use(store)
// app.use(Vuex)
app.mount('#app')