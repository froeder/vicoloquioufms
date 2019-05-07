<template>
  <q-page padding class="content">
    <q-card>
      <q-card-title>Inscrições:</q-card-title>
      <q-card-main>
        <span>{{quantidade_inscricoes}}</span>
      </q-card-main>
    </q-card>

    <q-table
      title="Usuários"
      separator="cell"
      :data="tableData"
      :columns="columns"
      row-key="nome"
      style="margin-top:1em"
      class="q-card"
      rows-per-page-label="Exibir:"
      loading-label="Carregando"
      no-data-label="Carregando"
      color="secondary"
      :pagination.sync="paginationControl"
    />

  </q-page>
</template>

<style>

</style>

<script>
import Firebase from 'firebase'
import { LocalStorage } from 'quasar'

  export default {
    name: 'PageIndex',

    data() {
      return {
        quantidade_inscricoes: 0,
        paginationControl : { rowsPerPage: 50, page: 1 },
        columns: [
          {
            name: 'nome',
            required: true,
            label: 'Nome',
            align: 'left',
            field: 'nome',
            sortable: true
          },
          {
            name: 'email',
            required: true,
            label: 'E-mail',
            align: 'left',
            field: 'email',
            sortable: true
          },
          {
            name: 'categoria',
            required: true,
            label: 'Categoria',
            align: 'left',
            field: 'categoria',
            sortable: true
          }
        ],
        tableData: [],
        usuarios: {}
      }
    },
    mounted(){
      this.contaUsuarios()
    },
    methods: {
      contaUsuarios(){
        this.$firebase.firestore().collection('usuarios').orderBy("nome_completo").get().then(query =>{
          query.forEach(doc => {
              this.usuarios = doc.data()
              let users = new Array()
              users.push(doc.data())
              LocalStorage.set('users', users)

              this.quantidade_inscricoes++
              this.tableData.push({
                nome: doc.data().nome_completo.toUpperCase(),
                email: doc.data().email_pessoal,
                categoria: 
                  doc.data().categoria_ufms !== 'Não' ? 
                  doc.data().categoria_ufms : doc.data().categoria
              })
          })
        })
        let banco = 'userLocal'
        LocalStorage.set(banco, this.usuarios)
      }
    }
  }
</script>
