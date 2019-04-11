<template>
  <q-page padding>
    <span class="text-weight-thin">Página Inicial</span>
    <div class="row gutter-xs">
      <div class="col-xs-12">
        
          <p>Seja Bem Vindo(a) <br>
            <small>{{usuarioLogado}}</small></p>

            <br>
            <br>
            Em breve traremos mais informações para você.

        
      </div>
      
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import Firebase from "firebase";
import { LocalStorage } from 'quasar'
import axios from "axios";

export default {
  name: "PageIndex",

  data() {
    return {
      loading             : false,
      enviada             : true,
      qtde_arvore         : 0,
      qtde_arvore_usuario : 0,
      usuarioLogado       : "",
      msg                 : "Arbo+ UFMS",
      url                 : "",
      temperatura_maxima  : "",
      temperatura_minima  : "",
      descricao_tempo     : "",
      nome                : "",
      data                : "",
      arvore              : [],
      arvores             : {},
    };
  },
  mounted() {
    this.pegaUsuarioAtual()
    this.contaArvores()
  },
  methods: {
    pegaUsuarioAtual() {
      // return this.$store.state.auth.user.email;
      this.usuarioLogado = LocalStorage.get.item('usuario_nome')
      this.usuarioLogadoEmail = LocalStorage.get.item('usuario_email')
    },
    
  }
};
</script>

<style scoped>
#myProgress {
  width: 100%;
  background-color: grey;
}
#myBar {
  width: 1%;
  height: 30px;
  background-color: green;
  color: white;
}
</style>

