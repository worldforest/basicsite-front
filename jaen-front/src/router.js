import { createRouter, createWebHistory } from 'vue-router';
import JaenHome from "@/views/JaenHome";
import JaenHistory from "@/views/JaenHistory.vue";
import JaenContact from "@/views/JaenContact.vue";
import JaenSystem from "@/views/JaenSystem.vue"
import ClassWhole from "@/views/class/ClassAll.vue";
import ClassDetail from "@/views/class/ClassDetail.vue";


const routes= [
  {
    path: '/',
    name: 'JaenHome',
    component: JaenHome
  },
  {
    path: '/history',
    name: 'JaenHistory',
    component: JaenHistory
  },
  {
    path: '/class-all',
    name: 'ClassAll',
    component: ClassWhole
  },
  {
    path: '/class-detail',
    name: 'ClassDetail',
    component: ClassDetail
  },
  {
    path: '/contact',
    name: 'JaenContact',
    component: JaenContact
  },
  {
    path: '/system',
    name: 'JaenSystem',
    component: JaenSystem
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
