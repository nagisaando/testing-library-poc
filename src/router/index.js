import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    component: () => import('@/page/HomePage.vue'),
  },
  {
    path: '/another-page',
    name: 'another-page',
    component: () => import('@/page/AnotherPage.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

router.beforeEach((to, from, next) => {
  return next()
})
export default router
