import Vue from 'vue';
import VueRouter from 'vue-router';
import CreateMatterPage from '@/views/CreateMatterPage.vue';
import ContentListPage from '@/views/ContentListPage.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/contents',
    name: 'contents',
    component: ContentListPage,
    props: true,
  },
  {
    path: '/create-matter',
    name: 'create-matter',
    component: CreateMatterPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
