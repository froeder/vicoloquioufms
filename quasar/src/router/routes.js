import Auth from 'layouts/auth'
import AuthSignIn from 'pages/auth/sign-in'
import CriarConta from 'pages/auth/criar-conta'
import EsqueciSenha from 'pages/auth/esqueci-senha'

import PerfilUsuario from 'pages/usuarios/PerfilUsuario'
import EditarUsuario from 'pages/usuarios/EditarUsuario'
import VisualizarUsuarios from 'pages/usuarios/VisualizarUsuarios'

import Index from 'pages/index'
import Sobre from 'pages/sobre'
import AdicionarArvore from 'pages/arvores/AdicionarArvore'
import VisualizarArvores from 'pages/arvores/VisualizarArvores'
import VisualizarArvoreDetalhe from 'pages/arvores/VisualizarArvoreDetalhe'
import EditarArvore from 'pages/arvores/EditarArvore'
import Default from 'layouts/default'
import NotFound from 'pages/404'

import AdicionarArvorePrimeira from 'pages/arvores/AdicionarArvorePrimeira'
import AdicionarArvoreSegunda from 'pages/arvores/AdicionarArvoreSegunda'

import TesteOutro from 'pages/arvores/teste_outro'

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
        path: '/arvores/adicionar-arvore',
        name: 'adicionar-arvore',
        component: AdicionarArvore
      },
      {
        path: '/arvores/visualizar-arvores',
        name: 'visualizar-arvores',
        component: VisualizarArvores
      },
      {
        path: '/arvores/visualizar-arvore-detalhe/:rota',
        name: 'visualizar-arvore-detalhe',
        component: VisualizarArvoreDetalhe
      },
      {
        path: '/arvores/editar-arvore/:rota',
        name: 'editar-arvore',
        component: EditarArvore
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
      {
        path: '/arvores/adicionar-arvore-primeira',
        name: 'adicionar-arvore-primeira',
        component: AdicionarArvorePrimeira,
        props: true
      },
      {
        path: '/arvores/adicionar-arvore-segunda',
        name: 'adicionar-arvore-segunda',
        component: AdicionarArvoreSegunda,
        props: true
      },
      {
        path: '/testeOutro',
        name: 'testeOutro',
        component: TesteOutro,
        props: true
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: NotFound
  }
]
