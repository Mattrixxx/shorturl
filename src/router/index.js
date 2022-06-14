import Vue from 'vue'
import VueRouter from 'vue-router'
import ShortUrl from '../views/shortUrl.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/shortUrl',
    name: 'ShortUrl',
    component: ShortUrl,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
