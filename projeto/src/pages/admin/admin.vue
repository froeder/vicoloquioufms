<template>
  <q-page padding class="content">
    <div >
      <q-card>
        <q-card-title>Inscrições:</q-card-title>
        <q-card-main>
          <span>{{quantidade_inscricoes}}</span>
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
        quantidade_inscricoes: 0
      }
    },
    mounted(){
      this.contaUsuarios()
    },
    methods: {
      contaUsuarios(){
        this.$firebase.firestore().collection('usuarios').get().then(query =>{
          query.forEach(doc => {
              this.quantidade_inscricoes++
          })
        })
      }
    }
  }
</script>
