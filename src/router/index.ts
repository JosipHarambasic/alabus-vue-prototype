import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    name:"home",
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue'),
        beforeEnter: (to, from, next) => {
          console.log(to, from);
          console.log(to.fullPath, from.fullPath);
          if(!sessionStorage.username) {
            next({
              path: 'login',
              query: { redirect: to.fullPath },
            });
          } else{
            next();
          }
          
          
        }
      },
      {
        path: 'login',
        component: () => import('@/views/Login.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
