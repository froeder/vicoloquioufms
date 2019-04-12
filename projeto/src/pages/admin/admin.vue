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
        tableData: []
      }
    },
    mounted(){
      this.contaUsuarios()
    },
    methods: {
      contaUsuarios(){
        this.$firebase.firestore().collection('usuarios').orderBy("nome_completo").get().then(query =>{
          query.forEach(doc => {
              this.quantidade_inscricoes++
              this.tableData.push({
                nome: doc.data().nome_completo,
                email: doc.data().email_pessoal,
                categoria: 
                  doc.data().categoria_ufms !== 'Não' ? 
                  doc.data().categoria_ufms : doc.data().categoria
              })
          })
        })
      }
    }
  }
</script>
