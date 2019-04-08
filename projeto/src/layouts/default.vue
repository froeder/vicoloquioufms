<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="tertiary"
        style="height:2.5em"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          IVColoquioUFMS<small>  v{{versao_banco}}  </small>
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          @click="perfil"
          aria-label="Person"
        >
          <q-icon name="person" />
        </q-btn>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      style="color:white"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>{{usuario_logado}}</q-list-header>

          <q-item style="color:white" :to="{ name: 'index' }">
            <q-item-main>
              <big><q-icon name="home"></q-icon></big> Home
            </q-item-main>
          </q-item>
          
          <q-item style="color:white" :to="{ name: 'sobre' }">
            <q-item-main>
              <big><q-icon name="help_outline"></q-icon></big> Sobre
            </q-item-main>
          </q-item>

          <!-- <q-item style="color:white" @click.native="signOut()">
            <q-item-main>
              <big><q-icon name="exit_to_app"></q-icon></big> Sair
            </q-item-main>
          </q-item> -->

      </q-list>
    </q-layout-drawer>

    <q-page-container class="fundo">
      <q-slide-transition appear enter="fadeInRight" leave="fadeInRight" mode="fadeInRight">
        <router-view />
      </q-slide-transition>
    </q-page-container>

    <q-layout-footer style="padding:0.1em ; background-color:#C1002B">
      <small> Desenvolvido por Jhonatan Froeder</small>
    </q-layout-footer>

  </q-layout>
</template>

<script>
import { LocalStorage } from 'quasar'
import getUserLocal from '../services/getUserLocal'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen  : true,
      usuario_logado  : '',
      versao_banco    : '',
      papel           : getUserLocal().usuario.papel
    }
  },
  mounted(){
    this.pegaVersaoBanco()
  },
  methods: {
    signOut () {
      this.$store.dispatch('auth/signOut')
    },
    usuarioAtual(){
      this.usuario_logado = getUserLocal().usuario.email

      let usuario_cache = LocalStorage.get.item('usuario_email')

      if(this.usuario_logado != usuario_cache){
        this.$router.push({name: 'signIn'})
      }
    },
    pegaVersaoBanco(){
      let database = this.$firebase.database().ref('/dev')
      database.on("value", (snapshot) => {
        this.versao_banco = snapshot.node_.value_
      })
    },
    pegaUsuarioFirebase(){
      this.$firebase.collection('usuarios').where('email', '==', 'froeder3@gmail.com').get().then(
        querySnapshot(

        )
      )
    },
    perfil(){
      this.$router.push({name: 'perfil-usuario'})
    },
    editar(){
      this.$router.push({name: 'adicionar-arvore', params:{rota: 'sim'}})
    }
  },
  created(){
    this.usuarioAtual()
  }
}
</script>

<style>
.fundo{
  font-size: 1.2em ;
  background-color: #D8D3BE
}
.q-layout-drawer{
  background: rgba(172, 32, 37, 0.8);  /* fallback for old broW3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
   opacity: .9;
}
.q-item{
  color: black
}
</style>
