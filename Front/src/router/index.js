import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import fileupload from '@/components/fileupload'
import Home from '@/components/Home'
import cart from '@/components/cart'
import product from '@/components/product'
import catalog from '@/components/catalog'
import login from '@/components/login'
import register from '@/components/register'
import logout from '@/components/logout'
import passwordReset from '@/components/passwordReset'
import projects from '@/components/projects'
import contact from '@/components/contact'
import catalogcat from '@/components/catalogcat'
import market from '@/components/market'
import blog from '@/components/blog'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '*',
      name: '/Home',
      component: Home
    },
    {
      path: '/projects/:id',
      name: 'projects',
      component: projects,
      props: true
    },
    {
      path: '/dashboard/market/:user',
      name: 'market',
      component: market,
      props: true,
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog,
    },
    {
      path: '/categories/:id',
      name: 'catalogcat',
      component: catalogcat,
      props: true,
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: catalog,
    },
    {
      path: '/dashboard/:user',
      name: 'dashboard',
      component: dashboard,
      props: true,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: product,
      props: true
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        requiresVisitor: true,
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout
    },
    {
      path: '/passwordReset',
      name: 'passwordReset',
      component: passwordReset
    },
    {
      path: '/upload',
      name: 'fileupload',
      component: fileupload,
      meta: {
        requiresAuth: true,
      }
    }
  ]
})
