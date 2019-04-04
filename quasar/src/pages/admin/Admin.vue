<template>
  <q-page padding>
    <span class="text-weight-thin">Página Admin</span>
    <div class="row gutter-xs">
      <div class="col-xs-12">
        <q-card>
          <span class="subtitle">Exportar para CSV</span>
          <br>
          <q-btn v-if="!download" color="positive" @click.native="exportar()">Exportar</q-btn>
          <br>
          <vue-json-to-csv v-if="download" :json-data="dado" separator=";">
          </vue-json-to-csv>
          </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import firebase from 'firebase'
import VueJsonToCsv from 'vue-json-to-csv'
import {Notify} from 'quasar'

export default {
  data() {
    return {
      arvores: {},
      dado: [],
      download: false
    }
  },
  methods: {
    exportar(){
      const dados = []
      firebase
        .firestore()
        .collection('arvores')
        .where('ativo', '==', 'S')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            dados.push(doc.data())
          })
        })
      this.arvores = dados
      this.dado = dados
      this.exibeAlerta()
      this.download = true
    } ,
    exibeAlerta(){
      Notify.create({
        color: "positive",
        position: "bottom",
        message: "Arquivo pronto para download",
        icon: "info",
        timeout: 2000
      });
    }
  },
  created(){

  } ,
  mounted() {

  },
  components: {
    VueJsonToCsv
  }
}
</script>

<style>

</style>
