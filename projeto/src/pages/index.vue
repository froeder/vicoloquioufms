<template>
  <q-page padding>
    <q-card>
      <q-card-title>Seja Bem Vindo(a) <small>{{usuario.nome}}</small> </q-card-title>
      <q-card-main>
        Em breve traremos mais informações para você
      </q-card-main>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import Firebase from 'firebase'

export default {
  name: "PageIndex",

  data() {
    return {
      loading   : false,
      usuario  : {}
    };
  },
  mounted() {
    this.pegaUsuarioAtual()
  },
  methods: {
    pegaUsuarioAtual() {
      let email = this.$store.state.auth.user.email
      console.log(email)
      Firebase.firestore().collection('usuarios').where('email_pessoal', '==', email).get().then(
        query => {
          query.forEach(doc => {
            let dados = doc.data()
            this.usuario = {
              nome: dados.nome_completo
            }
            console.log(this.usuario)
          })
        }
      )
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

