<template>
  <q-page padding>
    <span class="text-weight-thin">Visualizar Árvores   </span>
    <!-- <q-btn round icon="autorenew" color="positive" @click="atualizarLocal"></q-btn> -->
    <br>
    <br>
    <q-table
      grid
      :data="arvore"
      :columns="columns"
      class="tabela"
      style="color:white"
      row-key="nome"
      :pagination.sync="paginationControl"
      loading-label="Carregando"
      :loading="loading"
      no-data-label="Carregando"
      rows-per-page-label="Linhas por página"
      :filter="filter"
    >
    <template slot="top-left" slot-scope="props">
      <div class="row gutter-xs" >
        <q-search
        color="primary"
        v-model="filter"  
        placeholder="Pesquisar"
        style="color:white"
      />
      <q-btn  color="secondary"><q-icon name="update"></q-icon></q-btn>
      </div>
    </template>
      <q-tr style="color:white" slot="body" slot-scope="props" :props="props" class="cursor-pointer">
        <q-td v-for="col in props.cols" :key="col.name" :props="props">
          {{ col.value }}
        </q-td>
        <q-td>
          <q-icon name="visibility" @click.native="visualizar(props.row)"></q-icon>
          <span style="margin-left:1em"></span>
          <q-icon name="edit" @click.native="editar(props.row)"></q-icon>
        </q-td>
      </q-tr>
    </q-table>
  </q-page>
</template>

<script>
import { LocalStorage , Notify} from 'quasar'
import columns from '../../services/columns.json'
import getArvores from '../../services/getDataFirebase.js'

export default {
  data() {
    return {
      arvore            : [],
      arvores           : getArvores(),
      filter            : '',
      paginationControl : { rowsPerPage: 50, page: 1 },
      falta_foto        : '',
      columns           : columns.columns,
      loading           : false
    };
  },
  created() {
  },
  mounted() {
    this.pegaArvores()
  },
  methods: {
    pegaArvores() {
      this.loading = true
      this.$firebase
        .firestore()
        .collection("arvores")
        .orderBy("numero")
        .where("ativo", "==", 'S')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let dado = doc.data()
              dado.primeira_foto ?  this.falta_fotos = 'Sim' : this.falta_fotos = 'Não'
              let dados = dado.data_atual_enviada
              let data_formatada
              dados ? data_formatada = this.dataFormatada(dados) : data_formatada = 'Não registrado'
              let nome_popular = ''
              dado.nome_popular ? nome_popular = dado.nome_popular : nome_popular = 'Não registrado'
              this.arvore.push({
                nome_popular    : nome_popular,
                setor           : dado.setor,
                identificacao   : dado.numero,
                id              : dado.id,
                falta_campos    : dado.falta_campos,
                falta_fotos     : this.falta_fotos,
                data_enviado    : data_formatada
              })
              this.arvores = this.arvore
              this.loading = false

          })
        })
        this.alerta('positive', 'bottom', 'Dados Atualizados', 'info')
    },
    alerta(cor, posicao, mensagem, icone){
      Notify.create({
        color     : cor,
        position  : posicao,
        message   : mensagem,
        icon      : icone,
        timeout   : 3000
      })
    },
    baixarLocal(){
      let local = LocalStorage.get.item('banco_arvores')
      local ? this.arvore = local : this.pegaArvores()
    },
    atualizarLocal(){
      this.arvores = {}
      this.arvore = []
      this.pegaArvores()
    },
    dataFormatada(dados){
      let data = dados.split('-')
      let dia = data[0]
      let mes = data[1]
      let ano = dados.split('-')[2].split('T')[0]
      let data_formatada = dia+ '/' +mes+ '/' +ano
      return data_formatada
    },
    visualizar (row) {
      let rota = row.id
      this.$router.push({name: 'visualizar-arvore-detalhe', params:{rota: rota}})
    },
    editar (row) {
      let rota = row.id
      this.$router.push({name: 'editar-arvore', params:{rota: rota}})
    },
  }
};
</script>

<style>
  .tabela{
    border-radius:10px ;
    background-color: #BC9422;
    background: rgb(131, 221, 131);  /* fallback for old browsers */
    background: -webkit-linear-gradient(left top , #b78905, #e2b83f);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom right, #b78905,#e2b83f);
    color: white;
  }
</style>
