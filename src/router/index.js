import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: 'dataURI',
  },
  {
    path: '/dataURI',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dataURI/:tokenId',
    name: 'Home',
    component: Home,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
