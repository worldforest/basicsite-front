import { createRouter, createWebHistory } from 'vue-router';
import JaenHome from "@/views/JaenHome";
import JaenContact from "@/views/JaenContact.vue";
import JaenSystem from "@/views/JaenSystem.vue"
import ClassAll from "@/views/class/ClassAll.vue";
import ClassDetail from "@/views/class/ClassDetail.vue";
import AllCategories from "@/views/class/AllCategories.vue";
import JaenCompany from "@/views/company/JaenCompany.vue";
import JaenCurriculum from "@/views/company/JaenCurriculum.vue";
import JaenRoadmap from "@/views/company/JaenRoadmap.vue";
import JaenHistory from "@/views/company/JaenHistory.vue";


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
    path: '/class_all',
    name: 'ClassAll',
    component: ClassAll
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
  },
  {
    path: '/company',
    name: 'JaenCompany',
    component: JaenCompany
  },
  {
    path: '/curriculum',
    name: 'JaenCurriculum',
    component: JaenCurriculum
  },
  {
    path: '/roadmap',
    name: 'JaenRoadmap',
    component: JaenRoadmap
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});


export default router;
