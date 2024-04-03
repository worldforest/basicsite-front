import Vue from "vue";
import { createRouter, createWebHashHistory  } from 'vue-router'
// import VueRouter from "vue-router";
import JaenHome from "./views/JaenHome";
import JaenHistory from "./views/JaenHistory";

Vue.use(VueRouter)

// const router = new VueRouter({
//     mode: "history",
//     routes: [
//         {path:"/", component: JaenHome},
//         {path:"/history", component: JaenHistory}
//     ]
// });


const routes = [
    { path: '/', component: JaenHome },
    { path: '/history', component: JaenHistory }
  ];