<template>
  <q-page padding>
    <span class="text-weight-thin">Perfil do Usuário</span>
    <div class="row gutter-xs">
      <div class="col-xs-12">
        <q-card style="background-color: white">
          <q-card-title class="text-center">Informações</q-card-title>
          <q-card-main>
            <div class="row -gutter-xs">
              <q-field
                label="Nome"
                class="col-xs-12"
              >
              <p>{{usuario.nome}}</p>
              </q-field>
              <q-field
                label="Foto"
                class="hidden col-xs-12"
              >
                <img id="fotoPerfil" width="100%" height="100%">
              </q-field>
              <q-field
                label="E-mail"
                class="col-xs-12"
              >
                <p>{{usuario.email}}</p>
              </q-field>
              <q-field
                label="Instituição"
                class="col-xs-12"
              >
                <p>{{usuario.instituicao}}</p>
              </q-field>
              <q-field
                label="Curso"
                class="col-xs-12"
              >
                <p>{{usuario.curso}}</p>
              </q-field>
              <q-field
                label="Data Nascimento"
                class="col-xs-12"
              >
                <p>{{usuario.data_nascimento}}</p>
              </q-field>
            </div>
          </q-card-main>
        </q-card>
        <br>
        <div class="row gutter-xs">
          <div class="col-xs-12">
            <q-btn
              color="positive"
              icon="edit"
              @click="editar"
              class="full-width"
            >
              Editar
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import getUserLocal from '../../services/getUserLocal'
import convertData from '../../services/convertDataFormat'

export default {
  name: "PerfilUsuario",

  data() {
    return {
      user: {},
      usuario: {},
      id: "",
      source: "../assets/arbo.jpg"
    };
  },
  created() {
    this.pegaUsuarioBancoLocal()
    this.id = this.usuario.id;
    // this.pegFoto()
  },
  mounted(){
    this.usuario.data_nascimento = convertData(this.usuario.data_nascimento)
  },
  methods: {
    pegaUsuarioBancoLocal(){
      //this.user = LocalStorage.get.item("usuario");
      //console.log(this.user)
      this.usuario = getUserLocal();
      this.usuario = this.usuario.usuario
      console.log(this.usuario)
    },
    editar() {
      this.$router.push({ name: "editar-usuario", params: { id: this.id } });
    },
    pegFoto() {
      var storageRef = this.$firebase.storage();
      var starsRef = storageRef.ref(
        "/19812b31-5bfd-33cf-5663-a3d0b24e8989/IMG-20181009-WA0029.jpeg"
      );
      // var starsRef = storageRef.ref('/19812b31-5bfd-33cf-5663-a3d0b24e8989/')
      console.log(starsRef);
      // Get the download URL
      starsRef.getDownloadURL().then(function(url) {
        var img = document.getElementById("fotoPerfil");
        img.src = url;
      });
    },
    formatarData(){

    }
  }
};
</script>

<style scoped>
.q-card {
  background-color: white;
  color: black;
}
</style>


