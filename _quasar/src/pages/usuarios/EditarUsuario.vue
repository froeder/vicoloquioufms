<template>
  <q-page padding>
    <span class="text-weight-thin">Editar Usuário</span>
    <div class="row gutter-xs">
      <div class="col-xs-12">
        <q-card style="background-color: white">
          <q-card-title class="text-center">Informações</q-card-title>
          <q-card-main>
            <div class="row gutter-xs">
              <q-field
                class="col-xs-12 col-md-6"
              >
                <q-input type="text" v-model="usuario.nome" float-label="Nome"/>
              </q-field>
              <!--
              <q-field
                label="Foto"
                class="col-xs-12 col-md-6"
              >
                <img src="../../statics/icons/tree-128x128.png" alt="">
                <img src="~assets/arbo.jpg" width="100px" height="100px">
              </q-field>
              -->
              <q-field
                class="col-xs-12 col-md-6"
              >
                <q-input type="text" v-model="usuario.email" float-label="E-mail"/>
              </q-field>
              <q-field
                class="col-xs-12 col-md-6"
              >
                <q-input type="text" v-model="usuario.instituicao" float-label="Instituição"/>
              </q-field>
              <q-field
                class="col-xs-12 col-md-6"
              >
                <q-input type="text" v-model="usuario.curso" float-label="Curso"/>
              </q-field>
              <q-field
                class="col-xs-12 col-md-6"
              >
                <q-input type="password" v-model="usuario.password" float-label="Senha"/>
              </q-field>
              <q-field
                class="col-xs-12 col-md-6"
              >
                <q-datetime v-model="usuario.data_nascimento" type="date" float-label="Data Nascimento" />
              </q-field>
            </div>
          </q-card-main>
        </q-card>
        <br>
        <div class="row gutter-xs">
          <div class="col-xs-4">
            <q-btn class="full-width" color="info" icon="arrow_back_ios" to="/usuario/perfil-usuario">
              Voltar
            </q-btn>
          </div>
          <div class="col-xs-4">
            <q-btn class="full-width" color="negative" icon="delete" @click="exibeAlertaExcluir">
              Excluir
            </q-btn>
          </div>
          <div class="col-xs-4">
            <q-btn class="full-width" color="positive" icon="save" @click="editarUsuario">
              Salvar
            </q-btn>
          </div>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script>
    import Firebase from 'firebase'
    import { LocalStorage , Notify} from 'quasar'

  export default {
    name: 'EditarlUsuario',

    data() {
      return {
        usuario : {},
        id  : ''
      }
    },
    created(){
        this.pegaId()
        // this.pegaUsuario()
    },
    methods:{
        exibeAlertaExcluir(){
          Notify.create({
            color     : 'negative',
            position  : 'bottom',
            message   : 'Tem certeza que deseja excluir seu perfil?',
            icon      : 'report_problem',
            timeout   : 7000,
            actions   :  [
                { label: 'Sim', handler: () => this.excluirUsuario(this.id) }
            ]
          })
        },
        pegaId() {
          let usuarioBanco   = LocalStorage.get.item('usuario')
          console.log(usuarioBanco)
          this.id       = usuarioBanco.id
          this.usuario  = usuarioBanco.usuario
          console.log(this.id)
        },
        pegaUsuario(){
          this.$firebase.firestore().collection('usuarios').get().then(query => {
              query.forEach(doc => {
                  if(this.id === doc.id){
                      this.usuario = doc.data()
                  }
              })
          })
        },
        excluirUsuario(id){
          this.$firebase.firestore().collection('usuarios').where('email', '==', this.usuario.email).get().then(query => {
              query.forEach(doc => {
                  console.log(doc.data())
                  doc.ref.update({'ativo' : 'N'})
              })
          }).then(this.$router.push({name: 'signIn'}))

        },
        salvarLocal(usuario){
          let usuarioBanco = "usuario";
          LocalStorage.set(usuarioBanco, usuario);
        },
        editarUsuario(){
          this.$firebase.firestore().collection('usuarios').where('email', '==', this.usuario.email).get().then(query => {
            query.forEach(doc => {
              doc.ref.update({
                'nome'            : this.usuario.nome ,
                'data_nascimento' : this.usuario.data_nascimento ,
                'email'           : this.usuario.email ,
                'instituicao'     : this.usuario.instituicao,
                'curso'           : this.usuario.curso,
                'password'        : this.usuario.password
              })
            })
            // console.log(doc.data())
          })
          Notify.create({
              color     : 'positive',
              position  : 'bottom',
              message   : 'Usuário editado com sucesso',
              icon      : 'info',
              timeout   : 3000,
          })
          this.salvarLocal(this.usuario)
        }
    }
  }
</script>

<style scoped>
  .q-card{
    background-color: white ;
    color: black
  }
</style>


