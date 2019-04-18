<template>
  <q-page padding>
    <q-card>
      <q-card-title>Seja Bem Vindo(a) <small>{{usuario.nome_completo}}</small> </q-card-title>
      <q-card-main>
        Agora já é possível alterar seus dados. Clique no ícone à direita.
      </q-card-main>
    </q-card>
    <br>
    <q-card>
      <q-card-title>Minhas inscrições</q-card-title>
      <q-card-main>
        <div v-if="usuario.palestra1">
            23/04 - período noturno <br>
            <strong>Palestra magna: Direitos Humanos – da ética natural à ética do compartilhamento </strong> <br>
            Profª Drª Maria de Lourdes Jeffery Contini <br>
          </div>
          <br><br>
           
          <div v-if="usuario.palestra2">
            24/04 - primeira metade da manhã  <br>
            <strong>Painel 1: Direitos Humanos, Educação e Antropologia Social </strong> <br>
            Profª Drª Constantina Xavier Filha <br>
            Prof. Dr. Guilherme Rodrigues Passamani <br>
            Prof. Me. Leandro Henrique Araújo Leite <br>
          </div><br><br>

          <div v-if="usuario.palestra3">
            24/04 - segunda metade da manhã  <br>
            <strong>Painel 2: Direitos Humanos, Psicologia e Comunicação</strong>  <br>
            Profª Drª Lívia Gaigher Bósio Campello  <br>
            Profª Maª Sandra Maria Francisco de Amorim  <br>
            Ma. Lynara Ojeda de Souza  <br>
            Profª Drª Rosemeire Lopes da Silva Farias <br>
          </div> <br><br>
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
            this.usuario = doc.data()
            console.log(this.usuario)
          })
        }
      )
    },
    pegaPainesCadastrados(){
      Fireba
    }
    
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

