<template>
  <q-page class="flex flex-center">
    <div style="position:fixed">
      <q-card v-if="receive" style="background-color:rgba(255, 255, 255, 0.76);border-radius:10px">
        <q-card-main>
          <h4>Sozinho: <small>{{single}}</small></h4>

          <h4>Coletivo: <small>{{group}}</small></h4>
        </q-card-main>
      </q-card>
    </div>
    <div style="position:fixed">
      <q-card v-if="!receive" style="background-color:rgba(255, 255, 255, 0.76);border-radius:10px">
        <q-card-main>
          <h4>Não há respostas para serem exibidas!</h4>
        </q-card-main>
      </q-card>
    </div>

  </q-page>
</template>

<style>

</style>

<script>
  export default {
    name: 'PageIndex',

    data() {
      return {
        loading: true,
        user: {},
        single: '',
        group: '',
        send: false,
        receive: false,
      }
    },
    mounted(){
      this.pegaMostrar()
      if(this.receive){
        this.pegaSingle()
        this.pegaGroup()
      }
    },
    methods:{
      pegaMostrar(){
        var ref = this.$firebase.database().ref('/mostrar')
        ref.on("value", (snapshot) => {
          this.receive = snapshot.val().mostrar
        },(error) => {
          console.log(error.code);
        }
        )
      },
      pegaSingle(){
        var ref = this.$firebase.database().ref('/single')
        ref.on("value", (snapshot) => {
          this.single = snapshot.val().media
          this.loadingSingle = false
        },(error) => {
          console.log(error.code);
        }
        )
      },
      pegaGroup(){
        var ref = this.$firebase.database().ref('/groups')
        ref.on("value", (snapshot) => {
          this.group = snapshot.val().media
          this.loadingGroup = false
        },(error) => {
          console.log(error.code);
        }
        )
      }
    }
  }
</script>
