import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/Auth/SignIn'
import SignUp from '@/components/Auth/SignUp'
import NotFound from '@/components/NotFound'
import Admin from '@/components/Admin'
import Products from '@/components/views/Products'
import TopUp from '@/components/views/TopUp'
import Transactions from '@/components/views/Transactions'


Vue.use(Router)

export default new Router({
  hasbang:false,
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    },
    {
      path:'/admin',
      component:Admin,
      name:'admin',
      children:[
        {
          path:'/Products',
          component:Products,
          name:'Products'
        },
        {
          path:'/Top-Up',
          component:TopUp,
          name:'TopUp'
        },
        {
          path:'/Transactions',
          component:Transactions,
          name:'Transactions'
        }
      ]
    },

  ]
})
