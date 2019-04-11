import Index from 'pages/index'
import Admin from 'pages/admin/admin'
import AdminResult from 'pages/admin/result'
import Auth from 'layouts/auth'
import SingIn from 'pages/auth/sign-in'
import SingUp from 'pages/auth/sign-up'
import Default from 'layouts/default'
import DefaultAdmin from 'layouts/defaultAdmin'
import Sobre from 'pages/sobre.vue'

export default [
  { // Auth Routes
    path: '/auth',
    redirect: 'auth/sign-in',
    component: Auth,
    children: [
      {
        path: 'sign-in',
        name: 'signIn',
        component: SingIn
      },
      {
        path: 'sign-up',
        name: 'signUp',
        component: SingUp
      }
    ]
  },

  { // Main Routes
    path: '/',
    component: Default,
    meta: { authRequired: true },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: Index
      },
      {
        path: 'sobre',
        name: 'sobre',
        component: Sobre
      }
    ]
  },
  { // Main Routes
    path: '/admin',
    component: DefaultAdmin,
    meta: { authRequired: true },
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: Admin
      }, {
        path: 'result',
        name: 'result',
        component: AdminResult
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
