import Index from 'pages/index'
import Admin from 'pages/admin/admin'
import AdminAvaliacoes from 'pages/admin/Avaliacoes'
import Auth from 'layouts/auth'
import SingIn from 'pages/auth/sign-in'
import SingUp from 'pages/auth/sign-up'
import Default from 'layouts/default'
import DefaultAdmin from 'layouts/defaultAdmin'
import Sobre from 'pages/sobre.vue'
import PerfilUsuario from 'pages/usuario/PerfilUsuario'
import RegistrarChamada from 'pages/usuario/Chamada'
import RealizarAvaliacao from 'pages/usuario/Avaliar'
import AdminPresencas from 'pages/admin/Presencas'
import AdminSorteio from 'pages/admin/Sorteio'

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
        path: '/usuario/perfil',
        name: 'perfil',
        component: PerfilUsuario
      },
      {
        path: '/usuario/chamada',
        name: 'chamada',
        component: RegistrarChamada
      },
      {
        path: '/usuario/avaliar',
        name: 'avaliar',
        component: RealizarAvaliacao
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
      }, 
      {
        path: 'avaliacoes',
        name: 'avaliacoes',
        component: AdminAvaliacoes
      }, 
      {
        path: 'presencas',
        name: 'presencas',
        component: AdminPresencas
      },
      {
        path: 'sorteio',
        name: 'sorteio',
        component: AdminSorteio
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
