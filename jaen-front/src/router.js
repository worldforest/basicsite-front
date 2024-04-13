import { createRouter, createWebHistory } from 'vue-router';
import JaenHome from "@/views/JaenHome";
import JaenHistory from "@/views/JaenHistory.vue";
import JaenContact from "@/views/JaenContact.vue";
import JaenSystem from "@/views/JaenSystem.vue"
import ClassAll from "@/views/class/ClassAll.vue";
import ClassDetail from "@/views/class/ClassDetail.vue";
import AllCategories from "@/views/class/AllCategories.vue";
import SubCategories from "@/views/class/SubCategories.vue";


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
    path: '/categories',
    name: 'AllCategories',
    component: AllCategories
  },
  {
    path: '/subcategories',
    name: 'SubCategories',
    component: SubCategories
  },
  {
    path: '/class_all',
    name: 'ClassAll',
    component: ClassWhole
  },
  {
    path: '/class_detail',
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
