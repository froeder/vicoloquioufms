import Auth from 'layouts/auth'
import AuthSignIn from 'pages/auth/sign-in'
import CriarConta from 'pages/auth/criar-conta'
import EsqueciSenha from 'pages/auth/esqueci-senha'

import PerfilUsuario from 'pages/usuarios/PerfilUsuario'
import EditarUsuario from 'pages/usuarios/EditarUsuario'
import VisualizarUsuarios from 'pages/usuarios/VisualizarUsuarios'

import Index from 'pages/index'
import Sobre from 'pages/sobre'
import Default from 'layouts/default'
import NotFound from 'pages/404'

import AdminIndex from 'pages/admin/Admin'

export default [
  { // Auth Routes
    path: '/auth',
    redirect: 'auth/sign-in',
    component: Auth,
    children: [
      {
        path: 'sign-in',
        name: 'signIn',
        component: AuthSignIn
      },
      {
        path: 'criar-conta',
        name: 'criarConta',
        component: CriarConta
      },
      {
        path: 'esqueci-senha',
        name: 'esqueciSenha',
        component: EsqueciSenha
      }
    ]
  },

  { // Main Routes
    path: '/',
    component: Default,
    meta: { authRequired: true },
    children: [
      {
        path: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/usuario/perfil-usuario',
        name: 'perfil-usuario',
        component: PerfilUsuario
      },
      {
        path: '/usuario/editar-usuario/:id',
        name: 'editar-usuario',
        component: EditarUsuario
      },
      {
        path: '/usuario/visualizar-usuarios',
        name: 'visualizar-usuarios',
        component: VisualizarUsuarios
      },
      
      {
        path: '/admin/index',
        name: 'admin-index',
        component: AdminIndex
      },
      {
        path: '/sobre',
        name: 'sobre',
        component: Sobre
      },
    
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: NotFound
  }
]
