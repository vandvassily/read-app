import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bookshelf',
      name: 'bookshelf',
      component: () => import(/* webpackChunkName: "bookshelf" */ './views/BookShelf.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('./views/Category.vue')
    },
    {
      path: '/category/details',
      name: 'categoryDetails',
      component: () => import('./views/CategoryDetails.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
