import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import todo from '@/components/todo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
        path:'/profile',
        name:'profile',
        component:todo
    }
     
  ]
})
