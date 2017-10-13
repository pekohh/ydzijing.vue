import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '@/components/content/content'

Vue.use(VueRouter)

const Router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: {path: '/yw'}
    },
    {
      path: '/:id?',
      component: Content
    }
  ]
})
// 导航钩子 导航进入之前
// Router.beforeEach((to, from, next) => {
//  if (to.path)
//  console.log(to)
// })
export default Router
