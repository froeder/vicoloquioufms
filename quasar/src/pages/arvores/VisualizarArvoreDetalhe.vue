<template>
  <q-page padding>
    <span class="text-weight-thin">Visualizar Árvore Detalhe</span>
    <br>
    <div v-if="!arvore.numero" class="text-center">
      <q-spinner color="secondary" :size="size" /><br>
      Baixando Dados
    </div>
    <q-card style="background-color:white!important ; color:black">
      <q-card-title class="text-center"><strong>Identificação e Informação</strong></q-card-title>
        <small>Adicionada em </small><span class="text-grey"> {{data_final}}</span>
        <br>
        <br>
        <div class="row gutter-xs">
          <div class="col-xs-6 col-md-6">
            <span><small> Número: </small> </span><span class="text-grey">{{arvore.numero}}</span>
          </div>
          <div v-if="arvore.setor" class="col-xs-6 col-md-6">
            <span><small> Setor: </small> </span><span class="text-grey">{{arvore.setor}}</span>
          </div>
          <div v-if="arvore.latitude_utm" class="col-xs-6 col-md-6">
            <small>UTM:</small> <br>
            <span class="text-grey">{{arvore.latitude}}</span> <br>
            <small>Latitude: </small><br>
            <span class="text-grey">{{arvore.latitude_utm}}</span>
          </div>
          <div v-if="arvore.longitude_utm" class="col-xs-6 col-md-6">
            <small>UTM: </small><br>
            <span class="text-grey">{{arvore.longitude}}</span> <br>
            <small>Longitude:</small> <br>
            <span class="text-grey">{{arvore.longitude_utm}}</span>
          </div>
          <br>
          <br>
          <div class="col-md-12 text-center">
            <span class="headline"><strong>Dados da árvore</strong> </span>
          </div>
          <div v-if="arvore.nome_popular" class="col-md-4">
            <span><small>Nome Popular: </small></span>  <br>
            <span class="text-grey">{{arvore.nome_popular}}</span>
          </div>
          <div v-if="arvore.nome_cientifico" class="col-md-4">
            <span><small>Nome Científico: </small></span>  <br>
            <span class="text-grey">{{arvore.nome_cientifico}}</span>
          </div>
          <div v-if="arvore.familia" class="col-xs-4 col-md-4">
            <span><small>Família: </small></span> <br>
            <span class="text-grey">{{arvore.familia}}</span>
          </div>
          <div v-if="arvore.genero" class="col-xs-4 col-md-4">
            <span><small>Gênero: </small></span> <br>
            <span class="text-grey">{{arvore.genero}}</span>
          </div>
          <div v-if="arvore.especie" class="col-xs-4 col-md-4">
            <span><small>Espécie: </small></span> <br>
            <span class="text-grey">{{arvore.especie}}</span>
          <br>
          </div>
          <span style="margin-bottom:1em ; margin-top:1em" class="text-center col-xs-12"><strong>Circunferências:</strong> </span>
          <div v-if="arvore.c90" class="col-xs-4 col-md-4">
            <span><small>C90 cm:</small> </span><br>
            <span class="text-grey">{{arvore.c90}}</span>
          </div>
          <div v-if="arvore.c130" class="col-xs-4 col-md-4">
            <span><small>C130 cm: </small></span><br>
            <span class="text-grey">{{arvore.c130}}</span>
          </div>
          <div v-if="arvore.c150" class="col-xs-4 col-md-4">
            <span><small>C150 cm:</small> </span><br>
            <span class="text-grey">{{arvore.c150}}</span>
          </div>
          <div v-if="arvore.altura_primeira_ramificacao" class="col-xs-12 col-md-6">
            <span><small>Altura primeira ramificação: </small></span> <br>
            <span class="text-grey">{{arvore.altura_primeira_ramificacao}}</span>
          </div>
          <div v-if="arvore.altura_opcao" class="col-xs-12 col-md-6">
            <span>Altura opção: </span><span class="text-grey">{{arvore.altura_opcao}}</span>
          </div>
          <div v-if="arvore.rua" class="col-xs-6 col-md-6">
            <span>Distância Rua (m)</span><span class="text-grey">{{arvore.rua}}</span>
          </div>
          <div v-if="arvore.calcada" class="col-xs-6 col-md-6">
            <span>Distância Calçada (m): </span><span class="text-grey">{{arvore.calcada}}</span>
          </div>
          <div v-if="arvore.arq_copa" class="col-md-12">
            <span><small> Arquitetura da Copa: </small></span> <br>
            <span class="text-grey">{{arvore.arq_copa}}</span>
          </div>
          <div v-if="arvore.palmeira">
            <span><small>É palmeira?</small></span> <br>
            <span v-if="arvore.palmeira === 'nao'" class="text-grey">Não</span>
            <span v-if="arvore.palmeira === 'sim'" class="text-grey">Sim</span>
          </div>
      </div>
    </q-card>
    <br>
    <q-card v-if="arvore.numero" style="background-color:white ; color:black">
      <q-card-title class="text-center"><strong>Biologia</strong></q-card-title>
        <div class="row gutter-xs">
          <div v-if="arvore.estado_geral" class="col-md-6">
            <span><small>Estado Geral: </small></span> <br>
            <span class="text-grey">{{arvore.estado_geral}}</span>
          </div>
          <div v-if="arvore.equilibrio" class="col-md-6">
            <span><small>Equilíbrio: </small></span> <br>
            <span class="text-grey">{{arvore.equilibrio}}</span>
          </div>
          <div v-if="arvore.equilibrio_geral" class="col-md-6">
            <span><small>Equilíbrio Geral:</small> </span> <br> 
            <ul v-for="equilibrios in arvore.equilibrio_geral">
              <li class="text-grey">{{equilibrios}}</li>
            </ul>
          </div>
          <div v-if="arvore.fito" class="col-md-6">
            <span><small>Fitossanidade: </small></span> <br>
            <ul v-for="fitos in fito">
              <li class="text-grey">{{fitos}}</li>
            </ul>
          </div>
          <div v-if="arvore.intensidade" class="col-md-6">
            <span><small>Intensidade: </small></span> <br>
            <span class="text-grey">{{arvore.intensidade}}</span>
          </div>
          <div v-if="arvore.fito!='Sadia'" class="cols-xs-6 col-md-3">
            <span><small>Local do Ataque: </small></span> <br>
            <ul v-for="local_ataque in arvore.local_ataque">
              <li class="text-grey">{{local_ataque}}</li>
            </ul>
          </div>
          <div v-if="arvore.injurias" class="col-xs-12 col-md-3">
            <span><small>Injúrias:</small> </span> <br>
            <ul v-for="injurias in arvore.injurias">
              <li class="text-grey">{{injurias}}</li>
            </ul>
          </div>
          <div v-if="arvore.ecologia" class="col-xs-12 col-md-3">
            <span><small>Ecologia:</small> </span> <br>
            <ul v-for="ecologia in arvore.ecologia">
              <li class="text-grey">{{ecologia}}</li>
            </ul>

          </div>
          <div v-if="arvore.fenologia" class="col-xs-12 col-md-3">
            <span><small>Fenologia: </small></span> <br>
            <ul v-for="fenologia in arvore.fenologia">
              <li class="text-grey">{{fenologia}}</li>
            </ul>

          </div>
        </div>
    </q-card>
    <br>
    <q-card v-if="arvore.numero" style="background-color:white ; color:black">
      <q-card-title class="text-center"><strong>Entorno e Inteferências</strong></q-card-title>
        <div class="row gutter-xs">
          <div v-if="arvore.local_geral" class="col-md-3">
            <small> <span>Local Geral: </span></small> <br>
            <span class="text-grey">{{arvore.local_geral}}</span>
          </div>
          <div v-if="arvore.localizacao_relativa" class="col-md-3">
            <small> <span>Localização Relativa: </span></small> <br>
            <span class="text-grey">{{arvore.localizacao_relativa}}</span>
          </div>
          <div v-if="arvore.pavimento" class="col-md-3">
            <small> <span>Pavimento: </span></small> <br>
            <span class="text-grey">{{arvore.pavimento}}</span>
          </div>
          <div v-if="arvore.afloram_raiz" class="col-md-3">
            <small> <span>Afloramento de raiz: </span></small> <br>
            <span class="text-grey">{{arvore.afloram_raiz}}</span>
          </div>
          <div v-if="arvore.participacao" class="col-md-3">
            <small> <span>Participação na paisagem: </span></small> <br>
            <span class="text-grey">{{arvore.participacao}}</span>
          </div>
          <div v-if="arvore.participacao_distancia" class="col-md-4">
            <small> <span>Distância da mais próxima (m): </span></small> <br>
            <span class="text-grey">{{arvore.participacao_distancia}}</span>
          </div>
          <div v-if="arvore.ficao" class="col-md-3">
            <small> <span>Fiação: </span></small> <br>
            <span class="text-grey">{{arvore.ficao}}</span>
          </div>
          <div v-if="arvore.posteamento" class="col-md-3">
            <small> <span>Posteamento: </span></small> <br>
            <span class="text-grey">{{arvore.posteamento}}</span>
          </div>
          <div v-if="arvore.iluminacao" class="col-md-3">
            <small> <span>Iluminação: </span></small> <br>
            <span class="text-grey">{{arvore.iluminacao}}</span>
          </div>
          <div v-if="arvore.sinalizacao" class="col-md-3">
            <small> <span>Placas: </span></small> <br>
            <span class="text-grey">{{arvore.sinalizacao}}</span>
          </div>
          <div v-if="arvore.trafego_veiculos" class="col-md-3">
              <small> <span>Tráfego de Veículos: </span></small> <br>
              <span class="text-grey">{{arvore.trafego_veiculos}}</span>
          </div>
          <div v-if="arvore.trafego_pedestres" class="col-md-3">
            <small> <span>Tráfego de Pedestres: </span></small> <br>
            <span class="text-grey">{{arvore.trafego_pedestres}}</span>
          </div>
          <div v-if="arvore.recuo"  class="col-md-3">
            <small> <span>Recuo: </span></small> <br>
            <span class="text-grey">{{arvore.recuo}}</span>
          </div>
          <div v-if="arvore.manilha" class="col-md-3">
            <small> <span>Manilha: </span></small> <br>
            <span class="text-grey">{{arvore.manilha}}</span>
          </div>
          <div v-if="arvore.colo_pavimentado" class="col-md-3">
            <small> <span>Colo Pavimentado: </span></small> <br>
            <span class="text-grey">{{arvore.colo_pavimentado}}</span>
          </div>
          <div v-if="arvore.muro_construcao" class="col-md-3">
            <small> <span>Muro/Construção: </span></small> <br>
            <span class="text-grey">{{arvore.muro_construcao}}</span>
          </div>
        </div>
    </q-card>
    <br>
    <q-card v-if="arvore.numero" style="background-color:white ; color:black">
      <q-card-title class="text-center"><strong>Definição de Ações</strong></q-card-title>
        <div class="row gutter-xs">
          <div v-if="arvore.acao_executada" class="col-md-4">
            <small><span>Ação Executada: </span></small>  <br>
            <ul v-for="acao_executada in arvore.acao_executada">
              <li class="text-grey">{{acao_executada}}</li>
            </ul>
          </div>
          <div v-if="arvore.qualidade_acao" class="col-md-4">
            <small> <span>Qualidade da Ação: </span></small> <br>
            <span class="text-grey">{{arvore.qualidade_acao}}</span>
          </div>
          <div v-if="arvore.acao_recomendada" class="col-md-4">
            <small><span>Ação Recomendada: </span></small>  <br>
            <ul v-for="acao_recomendada in arvore.acao_recomendada">
              <li class="text-grey">{{acao_recomendada}}</li>
            </ul>
          </div>
          <div v-if="arvore.observacoes_gerais" class="col-md-4">
            <small><span>Observações Gerais: </span></small> <br>
            <span class="text-grey">{{arvore.observacoes_gerais}}</span>
          </div>
        </div>
    </q-card>
    <br>

    <!-- Fórmulas -->
    <q-card v-if="papel=='admin'" style="background-color:white ; color:black">
      <q-card-title class="text-center"><strong>Fórmulas</strong> </q-card-title>
      <q-card-main>
        <p>
          <span class="text-grey">C90: </span><strong>{{arvore.c90}}</strong> +
          <span class="text-grey">C130:</span><strong>{{arvore.c130}}</strong> =
          <span>{{arvore.c90 + arvore.c130}}</span>
        </p>
      </q-card-main>
    </q-card>
    <br>
    <!-- Fim Fŕommulas -->
    <q-btn v-if="arvore.primeira_foto" style="margin-bottom:1em" class="col-12" color="positive" @click="exibirFotos">Exibir Fotos</q-btn>
    <q-carousel v-if="arvore.primeira_foto" arrows quick-nav	class="text-white">
      <q-carousel-slide class="bg-primary">
        <img id="primeiraFoto" width="100%" height="100%" >
      </q-carousel-slide>
      <q-carousel-slide class="bg-secondary">
        <img id="segundaFoto" width="100%" height="100%" >
      </q-carousel-slide>
      <q-carousel-slide class="bg-tertiary">
        <img id="terceiraFoto" width="100%" height="100%" >
      </q-carousel-slide>
    </q-carousel>
    <br>
    <br>
    <q-card v-if="arvore.primeira_foto" >
      <div class="row gutter-xs">
        <q-btn icon="cloud_download" style="margin-bottom:1em" class="col-12" color="positive" @click="baixarPrimeiraFoto(arvore.primeira_foto)">Baixar Foto 1</q-btn>
        <a v-if="linkPrimeira" :href="linkPrimeira" target="_blank">Clique para baixar a primeira foto</a>

        <q-btn icon="cloud_download" style="margin-bottom:1em" class="col-12" color="positive" @click="baixarSegundaFoto(arvore.primeira_foto)">Baixar Foto 2</q-btn>
        <a v-if="linkSegunda" :href="linkSegunda" target="_blank">Clique para baixar a segunda foto</a>

        <q-btn icon="cloud_download" style="margin-bottom:1em" class="col-12" color="positive" @click="baixarTerceiraFoto(arvore.primeira_foto)">Baixar Foto 3</q-btn>
        <a v-if="linkTerceira" :href="linkTerceira" target="_blank">Clique para baixar a terceira foto</a>
      </div>
    </q-card>
    <br>
    <q-layout-footer reveal style="margin-bottom:1.3em ; box-shadow: 0px 0px 0px white ; padding:.4em">
      <div class="row gutter-xs">
        <div class="col-6">
          <q-btn class="full-width" to="/arvores/visualizar-arvores" color="info" icon="arrow_back_ios">Voltar</q-btn>
        </div>
        <div class="col-6">
          <q-btn class="full-width" color="positive" icon="edit" @click="editarArvore()">Editar</q-btn>
        </div>
      </div>
    </q-layout-footer>
  </q-page>
</template>

<script>
import { Notify, date } from "quasar"
import arvores from "../../store/arvores.json"
import getUser from '../../services/getUserLocal.js'

export default {
  data() {
    return {
      arvore            : {},
      arvore_banco      : {},
      primeira_foto     : false,
      item              : arvores,
      local_ataque      : [],
      equilibrio_geral  : [],
      fito              : [],
      ecologia          : [],
      injurias          : [],
      acao_executada    : [],
      acao_recomendada  : [],
      dispositivo       : {},
      arvore_id         : "",
      doc_id            : "",
      linkPrimeira      : false,
      linkSegunda       : false,
      linkTerceira      : false,
      data_final        : "",
      size              : '5em',
      papel             : getUser().usuario.papel
    };
  },
  created() {
    this.pegaArvore()
  },
  mounted() {
  },
  methods: {
    pegaArvore() {
      this.$firebase
        .firestore()
        .collection("arvores")
        .where("id", "==", this.pegaIdRota())
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let dado = doc.data()
            this.atribuiDados(dado)
            this.doc_id = doc.id
          })
        })
    },
    atribuiDados(dado){
      this.arvore = dado
      this.arvore_id = dado.id
      this.formataData(dado)
      this.primeira_foto = dado.primeira_foto

      this.verificaDadosNulo(dado)
    },
    verificaDadosNulo(dado){
      //If's para verificar se o campo existe, sem isso dá erro ao atribuir
      if (dado.fito) {
        this.fito = dado.fito;
      }
      if (dado.acao_executada) {
        this.acao_executada = dado.acao_executada;
      }
      if (dado.acao_recomendada) {
        this.acao_recomendada = dado.acao_recomendada;
      }
      if (dado.equilibrio_geral) {
        this.equilibrio_geral = dado.equilibrio_geral
      }
    },
    editarArvore(){
      this.$router.push({name: 'editar-arvore', params:{rota: this.arvore.id}})
    },
    pegaIdRota() {
      return this.$route.params.rota;
    },
    exibePrimeiraFoto(id) {
      var storageRef = this.$firebase.storage();
      var starsRef = storageRef.ref("/" + id + "/arvore1.jpeg");
      // Get the download URL
      starsRef.getDownloadURL().then(function(url) {
        var img = document.getElementById("primeiraFoto");
        console.log(url)
        img.src = url;
      });
    },
    exibeSegundaFoto(id) {
      var storageRef = this.$firebase.storage();
      var starsRef = storageRef.ref("/" + id + "/arvore2.jpeg");
      // Get the download URL
      starsRef.getDownloadURL().then(function(url) {
        var img = document.getElementById("segundaFoto");
        img.src = url;
      });
    },
    exibeTerceiraFoto(id) {
      var storageRef = this.$firebase.storage();
      var starsRef = storageRef.ref("/" + id + "/arvore3.jpeg");
      // Get the download URL
      starsRef.getDownloadURL().then(function(url) {
        var img = document.getElementById("terceiraFoto");
        img.src = url;
      });
    },
    baixarPrimeiraFoto(id) {
      let self = this;
      var storageRef = this.$firebase.storage();
      var starsRef = storageRef.ref("/" + id + "/arvore1.jpeg");

      starsRef
        .getDownloadURL()
        .then(function(url) {
          self.linkPrimeira = url;
        })
        .catch(function(error) {
          console.log(error);
          Notify.create({
            color: "negative",
            position: "bottom",
            message: "Foto 1 não pode ser baixada",
            icon: "report_problem",
            timeout: 3000,
            actions: [
              { label: "Tentar", handler: () => this.baixarTerceiraFoto() }
            ]
          });
        });
    },
    baixarSegundaFoto(id) {
      let self = this;
      var storageRef = this.$firebase.storage();
      var starsRef = storageRef.ref("/" + id + "/arvore2.jpeg");

      starsRef
        .getDownloadURL()
        .then(function(url) {
          self.linkSegunda = url;
        })
        .catch(function(error) {
          console.log(error);
          Notify.create({
            color: "negative",
            position: "bottom",
            message: "Foto 2 não pode ser baixada",
            icon: "report_problem",
            timeout: 3000,
            actions: [
              { label: "Tentar", handler: () => this.baixarSegundaFoto() }
            ]
          });
        });
    },
    baixarTerceiraFoto(id) {
      let self = this;
      var storageRef = this.$firebase.storage();
      var starsRef = storageRef.ref("/" + id + "/arvore3.jpeg");

      starsRef
        .getDownloadURL()
        .then(function(url) {
          self.linkTerceira = url;
        })
        .catch(function(error) {
          console.log(error);
          Notify.create({
            color: "negative",
            position: "bottom",
            message: "Foto 3 não pode ser baixada",
            icon: "report_problem",
            timeout: 3000,
            actions: [
              { label: "Tentar", handler: () => this.baixarTerceiraFoto() }
            ]
          });
        });
    },
    exibirFotos() {
      let id = this.arvore.primeira_foto

      this.exibePrimeiraFoto(id)
      this.exibeSegundaFoto(id)
      this.exibeTerceiraFoto(id)
      console.log('exibiu')
    },
    pegaHoraAtual() {
      let timeStamp = Date.now();
      let formattedString = date.formatDate(
        timeStamp,
        "DD-MM-YYYYTHH:mm:ss.SSSZ"
      );
      this.arvore.data_atual_editada = formattedString;
    },
    formataData(dado){
      let datas = ''
      let dia = ''
      let mes = ''
      let ano = ''
      if(dado.data){
        datas = dado.data.split("-")
        dia = datas[2].split("T")[0]
        mes = datas[1]
        ano = datas[0]
      } else if(dado.data_atual_enviada) {
        datas = dado.data_atual_enviada.split('-')
        dia = datas[0]
        mes = datas[1]
        ano = datas[2].split("T")[0]
      }

      this.data_final = dia + "/" + mes + "/" + ano
    }
  }
};
</script>

<style>
ul {
  list-style-type: none;
}
li{
  margin-left: -2em ;
  margin-top: -1em ;
  margin-bottom: -1em
}
</style>
