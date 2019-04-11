<template>
  <q-page class="flex flex-center">
    <div style="position:fixed">
      <q-card style="background-color:rgba(255, 255, 255, 0.76);border-radius:10px">
        <q-card-main>
          <h4>Single: <q-spinner-gears v-if="loadingSingle"></q-spinner-gears> <small>{{single}}</small></h4>
          <h4>Collective: <q-spinner-gears v-if="loadingGroup"></q-spinner-gears> <small>{{group}}</small></h4>
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
        loadingSingle: true,
        loadingGroup: true,
        single: '',
        group: '',
        send: false
      }
    },

    mounted() {
      this.pegaSingle()
      this.pegaGroup()
    },
    methods:{
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
