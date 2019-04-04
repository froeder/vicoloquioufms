<template>
    <q-page padding>
        <span class="text-weight-thin">Editar Árvore</span>
        <br>
        <div v-if="!arvore.numero" class="text-center">
          <q-spinner color="secondary" :size="size" /><br>
          Baixando Dados
        </div>
        <q-stepper v-if="!excluido" color="secondary" ref="stepper" alternative-labels>
            <q-step default name="first" title="Identificação e Informação">
                <div>
                <form class="row gutter-xs">
                      <q-field class="col-xs-6 col-md-4">
                    <q-input type="number" v-model="arvore.numero" float-label="Número" :attributes="{tabindex: '2'}" />
                    </q-field>
                    <q-field class="col-xs-6 col-md-4">
                      <q-input v-model="arvore.setor" float-label="Setor" :attributes="{tabindex: '3'}" />
                    </q-field>
                    <q-field class="col-xs-12 col-md-4">
                      UTM:
                      <the-mask v-model="arvore.latitude" :mask="['-##.######']"  :attributes="{tabindex: '4'}" />
                      <br>Latitude
                      <the-mask v-model="arvore.latitude_utm" :mask="['-##.######']"  :attributes="{tabindex: '5'}" />
                    </q-field>
                    <q-field class="col-xs-12 col-md-4">
                      UTM:
                      <the-mask :mask="['-##.######']"  v-model="arvore.longitude" :attributes="{tabindex: '6'}"/>
                      <br>Longitude
                      <the-mask v-model="arvore.longitude_utm" :mask="['-##.######']"  :attributes="{tabindex: '7'}" />
                    </q-field>
                    <q-field class="col-md-12">
                      <span class="headline">Dados da árvore</span>
                    </q-field>
                    <q-field v-if="!arvore.obter_foto_nome_popular" class="col-xs-10 col-md-4">
                      <q-input v-model="arvore.nome_popular" float-label="Nome Popular" />
                    </q-field>
                    <span v-if="arvore.obter_foto_nome_popular">Obter Nome por foto</span>
                    <q-toggle
                        true-value="true"
                        label=""
                        leftLabel
                        v-model="arvore.obter_foto_nome_popular"
                        checked-icon="photo_camera"
                        unchecked-icon="edit"
                    />
                    <!-- FAMILIA -->
                    <q-field v-if="!arvore.obter_foto_familia" class="col-xs-10 col-md-4">
                      <q-input v-model="arvore.familia" float-label="Família" />
                    </q-field>
                    <span v-if="arvore.obter_foto_familia">Obter Família por foto</span>
                    <q-toggle
                        true-value="true"
                        label=""
                        leftLabel
                        v-model="arvore.obter_foto_familia"
                        checked-icon="photo_camera"
                        unchecked-icon="edit"
                      />
                    <autocomplete
                      v-if="!arvore.familia"
                      :source="familias"
                      resultsValue="name"
                      placeholder="Pesquisar Família"
                      v-model="arvore.familia">
                    </autocomplete>
                    <!-- FIM FAMILIA -->
                    <!-- GENERO -->
                    <q-field v-if="!arvore.obter_foto_genero" class="col-xs-10 col-md-4">
                      <q-input v-model="arvore.genero" float-label="Gênero" class="text-italic" />
                    </q-field>
                    <span v-if="arvore.obter_foto_genero">Obter Gênero por foto</span>
                    <q-toggle
                        true-value="true"
                        label=""
                        leftLabel
                        v-model="arvore.obter_foto_genero"
                        checked-icon="photo_camera"
                        unchecked-icon="edit"
                      />
                    <autocomplete
                      v-if="!arvore.genero"
                      :source="generos"
                      resultsValue="name"
                      placeholder="Pesquisar Genêro"
                      v-model="arvore.genero">
                    </autocomplete>
                    <!-- FIM GENERO -->
                    <!-- ESPECIE -->
                    <q-field v-if="!arvore.obter_foto_especie" class="col-xs-10 col-md-4">
                      <q-input v-model="arvore.especie" float-label="Espécie" class="text-italic" />
                    </q-field>
                    <span v-if="arvore.obter_foto_especie">Obter Espécie por foto</span>
                    <q-toggle
                        true-value="true"
                        label=""
                        leftLabel
                        v-model="arvore.obter_foto_especie"
                        checked-icon="photo_camera"
                        unchecked-icon="edit"
                      />
                    <autocomplete
                      v-if="!arvore.obter_foto_especie"
                      :source="especies"
                      resultsValue="name"
                      placeholder="Pesquisar Espécie"
                      v-model="arvore.especie">
                    </autocomplete>
                    <!-- FIM ESPECIE -->
                    <br>
                    <br>
                    <br>
                    <span style="margin-bottom:1px" class="col-xs-12">Circunferências: </span>
                    <q-field class="col-xs-4 col-md-4">
                    <q-input type="number" v-model="arvore.c90" float-label="C90 cm" />
                    </q-field>
                    <q-field class="col-xs-4 col-md-4">
                    <q-input type="number" v-model="arvore.c130" float-label="C130 cm" />
                    </q-field>
                    <q-field  class="col-xs-4 col-md-4">
                      <q-input type="number" v-model="arvore.c150" float-label="C150 cm" />
                    </q-field>
                    <q-field class="col-xs-12 col-md-6">
                     <q-input type="number" v-model="arvore.altura_primeira_ramificacao" float-label="Altura primeira ramificação m" />
                    </q-field>
                    <q-field class="col-xs-12 col-md-6">
                      <q-radio v-model="arvore.altura_opcao" val="V" label="V" />
                      <q-radio v-model="arvore.altura_opcao" val="U" label="U" />
                    </q-field>
                    <q-field class="col-xs-6 col-md-6">
                     <q-input type="number" v-model="arvore.rua" float-label="Rua (m)" />
                    </q-field>
                    <q-field class="col-xs-6 col-md-6">
                      <q-input type="number" v-model="arvore.calcada" float-label="Calçada (m)" />
                    </q-field>
                    <q-field class="col-md-12">
                      <br>
                      <span style="margin-bottom:1px" class="headline">Arquitetura da Copa</span>
                      <q-select v-model="arvore.arq_copa" :options="item.arq_copa" float-label="Arquitetura da Copa" />
                    </q-field>
                    <q-field>
                    <br>
                    <span>É palmeira?</span>
                    <br>Não
                    <q-toggle
                        v-model="arvore.palmeira"
                        color="secondary"
                        label="Sim"
                        true-value="sim"
                        false-value="não"
                    />
                    </q-field>
                </form>

                </div>
                <!-- Navigation for this step at the end of QStep-->
                <q-stepper-navigation>
                <q-btn color="secondary" icon="arrow_forward_ios" @click="$refs.stepper.next()" label="Próximo" />
                </q-stepper-navigation>
            </q-step>

            <q-step default name="second" title="Biologia">
                <div class="row gutter-xs">
                <q-field class="col-md-6">
                    <br>
                    <q-select v-model="arvore.estado_geral" :options="item.estadoGeral" float-label="Estado Geral" />
                </q-field>
                <q-field class="col-md-6">
                    <br>
                    <q-select v-model="arvore.equilibrio" :options="item.equilibrio" float-label="Equilíbrio" />
                </q-field>
                <q-field v-if="arvore.equilibrio==='Não'" class="col-md-6">
                    <br>
                    <q-select multiple v-model="equilibrio_geral" :options="item.equilibrioGeral" float-label="Equilíbrio Geral" />
                </q-field>
                <q-field class="col-md-6">
                    <br>
                    <!-- <q-select  :options="item.fito" v-model="fito"  float-label="Fitossanidade" multiple/> -->
                    <q-select :options="item.fito" v-model="fito" float-label="Fitossanidade" multiple />

                </q-field>
                <div v-if="this.fito!='Sadia'" class="col-md-6">
                    <br>
                    <q-select v-model="arvore.intensidade" :options="item.intensidade" float-label="Intensidade" />
                </div>
                <div v-if="this.fito!='Sadia'" class="cols-xs-6 col-md-3">
                    <br>
                    <q-select :options="item.ataque" v-model="arvore.local_ataque" float-label="Local do Ataque" multiple />
                </div>
                <q-field class="col-xs-12 col-md-3">
                    <br>
                    <q-select :options="item.lesao" v-model="arvore.injurias" float-label="Injúrias" multiple />
                </q-field>
                <q-field class="col-xs-12 col-md-3">
                    <br>
                    <q-select :options="item.eco" v-model="arvore.ecologia" float-label="Ecologia" multiple />
                </q-field>

                <q-field class="col-xs-12 col-md-3">
                    <br>
                    <q-select :options="item.fenologia" v-model="arvore.fenologia" float-label="Fenologia" multiple />
                </q-field>
                </div>
                <q-stepper-navigation>
                <q-btn color="secondary" icon="arrow_forward_ios" @click="$refs.stepper.next()" label="Próximo" />
                <q-btn color="secondary" icon="arrow_back_ios" flat @click="$refs.stepper.previous()" label="Voltar" />
                </q-stepper-navigation>
            </q-step>
            <q-step name="third" title="Entorno e Inteferências">
                <div class="row gutter-xs">
                <q-field class="col-md-3">
                    <q-select :options="item.localGeral" v-model="arvore.local_geral" float-label="Local Geral" />
                </q-field>
                <q-field class="col-md-3">
                    <q-select :options="item.localizacaoRelativa" v-model="arvore.localizacao_relativa" float-label="Localização Relativa" />
                </q-field>
                <q-field class="col-md-3">
                    <q-select :options="item.pavimento" v-model="arvore.pavimento" float-label="Pavimento" />
                </q-field>
                <q-field class="col-md-3">
                    <q-select :options="item.afloramRaiz" v-model="arvore.afloram_raiz" float-label="Afloramento de raiz" />
                </q-field>
                <q-field class="col-md-3">
                    <q-select :options="item.participacao" v-model="arvore.participacao" float-label="Participação na paisagem" />
                </q-field>
                <q-field class="col-md-4">
                    <q-input type="number" v-if="arvore.participacao!='Copa Isolada'" v-model="arvore.participacao_distancia" float-label="Distância da mais próxima (m)" />
                </q-field>
                <q-field class="col-md-3">
                    <q-select :options="item.fiacao" v-model="arvore.ficao" float-label="Fiação" />
                </q-field>
                <q-field class="col-md-3">
                    <q-select :options="item.posteamento" v-model="arvore.posteamento" float-label="Posteamento" />
                </q-field>
                <q-field class="col-md-3">
                    <q-select :options="item.iluminacao" v-model="arvore.iluminacao" float-label="Iluminação" />
                </q-field>
                <q-field class="col-md-3">
                    <q-select :options="item.sinalizacao" v-model="arvore.sinalizacao" float-label="Placas" />
                </q-field>
                <q-field class="col-md-3">
                    <q-select :options="item.trafego" v-model="arvore.trafego_veiculos" float-label="Tráfego de Veículos" />
                </q-field>
                <q-field class="col-md-3">
                    <q-select :options="item.trafego" v-model="arvore.trafego_pedestres" float-label="Tráfego de Pedestres" />
                </q-field>
                <q-field class="col-md-3">
                    <q-select :options="item.recuo" v-model="arvore.recuo" float-label="Recuo" />
                </q-field>
                <q-field class="col-md-3">
                    <q-select :options="item.manilha" v-model="arvore.manilha" float-label="Manilha" />
                </q-field>
                <q-field class="col-md-3">
                    <q-select :options="item.coloPavimentado" v-model="arvore.colo_pavimentado" float-label="Colo Pavimentado" />
                </q-field>
                <q-field class="col-md-3">
                    <q-select :options="item.muroConstrucao" v-model="arvore.muro_construcao" float-label="Muro/Construção" />
                </q-field>
                </div>
                <q-stepper-navigation>
                <q-btn color="secondary" icon="arrow_forward_ios" @click="$refs.stepper.next()" label="Próximo" />
                <q-btn color="secondary" icon="arrow_back_ios" flat @click="$refs.stepper.previous()" label="Voltar" />
                </q-stepper-navigation>
            </q-step>
            <q-step name="fifth" default title="Definição de Ações">
                <div class="row gutter-xs">
                <q-field class="col-md-4">
                    <br>
                    <q-select :options="item.acaoExecutada" v-model="arvore.acao_executada" float-label="Ação Executada" multiple/>
                </q-field>
                <q-field class="col-md-4">
                    <br>
                    <q-select :options="item.qualidadeAcao" v-model="arvore.qualidade_acao" float-label="Qualidade da Ação" />
                </q-field>
                <q-field class="col-md-4">
                    <br>
                    <q-select :options="item.acaoRecomendada" v-model="arvore.acao_recomendada" float-label="Ação Recomendada" multiple/>
                </q-field>
                <q-field class="col-md-4">
                    <br>
                    <q-input v-model="arvore.observacoes_gerais" float-label="Observações Gerais" />
                </q-field>
                <q-field class="col-md-4">
                    <br>
                    Foto 1 <q-icon v-if="!enviadaPrimeira" style="color:green" size="30px" name="done"></q-icon>
                    <div v-if="enviadaPrimeira">
                    <q-uploader
                        method="POST"
                        :url-factory="sendFilePrimeira"
                        :send-raw="true"
                    />
                    <div id="myProgress">
                        <div id="primeira"></div>
                    </div>
                    </div>
                    <br>
                    Foto 2 <q-icon v-if="!enviadaSegunda" style="color:green" size="30px" name="done"></q-icon>
                    <div v-if="enviadaSegunda">
                    <q-uploader
                        method="POST"
                        :url-factory="sendFileSegunda"
                        :send-raw="true"
                    />
                    <div id="myProgress">
                        <div id="segunda"></div>
                    </div>
                    </div>
                    <br>
                    Foto 3 <q-icon v-if="!enviadaTerceira" style="color:green" size="30px" name="done"></q-icon>
                    <div v-if="enviadaTerceira">
                    <q-uploader
                        method="POST"
                        :url-factory="sendFileTerceira"
                        :send-raw="true"
                    />
                    <div id="myProgress">
                        <div id="terceira"></div>
                    </div>
                    </div>
                </q-field>
                </div>
                <q-stepper-navigation>
                <q-btn color="secondary" icon="save" @click="salvaArvore()" label="Salvar" />
                <q-btn color="secondary" icon="arrow_back_ios" flat @click="$refs.stepper.previous()" label="Voltar" />
                </q-stepper-navigation>
            </q-step>
            </q-stepper>
            <br>
            <q-card v-if="primeira_foto">
              <div class="row gutter-xs">
                <q-btn style="margin-bottom:1em" class="col-12" color="positive" @click="exibirFotos">Exibir Fotos</q-btn>

                <img id="primeiraFoto" width="100%" height="100%" >
                <q-btn icon="cloud_download" style="margin-bottom:1em" class="col-12" color="positive" @click="baixarPrimeiraFoto(arvore.primeira_foto)">Baixar Foto 1</q-btn>
                <a v-if="linkPrimeira" :href="linkPrimeira" target="_blank">Clique para baixar a primeira foto</a>

                <img id="segundaFoto" width="100%" height="100%" >
                <q-btn icon="cloud_download" style="margin-bottom:1em" class="col-12" color="positive" @click="baixarSegundaFoto(arvore.primeira_foto)">Baixar Foto 2</q-btn>
                <a v-if="linkSegunda" :href="linkSegunda" target="_blank">Clique para baixar a segunda foto</a>

                <img id="terceiraFoto" width="100%" height="100%" >
                <q-btn icon="cloud_download" class="col-12" color="positive" @click="baixarTerceiraFoto(arvore.primeira_foto)">Baixar Foto 3</q-btn>
                <a v-if="linkTerceira" :href="linkTerceira" target="_blank">Clique para baixar a terceira foto</a>
              </div>
            </q-card>
            <br>
            <q-layout-footer reveal style="margin-bottom:1.3em ; box-shadow: 0px 0px 0px white ; padding:.4em">
              <div class="row gutter-xs">
                <div class="col-6">
                  <q-btn class="full-width" color="info" icon="arrow_back_ios" @click="voltar()">Voltar</q-btn>
                </div>
                <div class="col-6">
                  <q-btn class="full-width" color="negative" icon="delete" @click="excluirArvore()">Excluir</q-btn>
                </div>
              </div>
            </q-layout-footer>
    </q-page>
</template>

<script>
import { uid, Notify, date, LocalStorage } from "quasar";
import Firebase from "firebase";
import { TheMask } from "vue-the-mask";
import arvores from "../../store/arvores.json";
import Autocomplete from 'vuejs-auto-complete'

export default {
  components: { TheMask , Autocomplete},
  data() {
    return {
      arvore: {},
      arvoreBanco: {},
      arvore_id: "",
      primeira_foto: false,
      item: arvores,
      local_ataque: [],
      equilibrio_geral: [],
      fito: [],
      ecologia: [],
      injurias: [],
      acao_executada: [],
      acao_recomendada: [],
      dispositivo: {},
      arvoreId: "",
      palmeira: "nao",
      step: "first",
      step2: "first",
      options: ["contractable", "disable_payment", "step_error"],
      doc_id: "",
      loadingPrimeira: false,
      enviadaPrimeira: true,
      loadingSegunda: false,
      enviadaSegunda: true,
      loadingTerceira: false,
      enviadaTerceira: true,
      linkPrimeira: false,
      linkSegunda: false,
      linkTerceira: false,
      size: "5em",
      familias: [],
      especies: [],
      generos: [],
      excluido: false
    };
  },
  created() {
    // this.fito = this.arvore.fito
    this.pegaArvore()
    let familia = 'familia'
    this.autoComplete(familia)

    let genero = 'genero'
    this.autoComplete(genero)

    let especie = 'especie'
    this.autoComplete(especie)
  },
  mounted() {},
  methods: {
    pegaArvore() {
      console.log("baixando")
      this.$firebase
        .firestore()
        .collection("arvores")
        .where("id", "==", this.pegaIdRota())
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let dado = doc.data();
            this.arvoreBanco = doc.data();
            this.doc_id = doc.id;
            this.arvore = dado;
            this.arvore_id = dado.id;
            this.primeira_foto = doc.data().primeira_foto;

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
              this.equilibrio_geral = dado.equilibrio_geral;
            }
          });
        });
    },
    exibePrimeiraFoto(id) {
      var storageRef = this.$firebase.storage();
      var starsRef = storageRef.ref("/" + id + "/arvore1.jpeg");
      // Get the download URL
      starsRef.getDownloadURL().then(function(url) {
        var img = document.getElementById("primeiraFoto");
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
      let id = this.arvore.primeira_foto;

      this.exibePrimeiraFoto(id);
      this.exibeSegundaFoto(id);
      this.exibeTerceiraFoto(id);
    },
    excluirArvore() {
      Notify.create({
        color: "negative",
        position: "bottom",
        message: "Tem certeza que deseja excluir essa árvore?",
        icon: "report_problem",
        timeout: 6000,
        actions: [{ label: "Sim", handler: () => this.excluirArvoreConfirma() }]
      });
    },
    excluirArvoreConfirma() {
      const rota_id = this.pegaIdRota();
      this.$firebase
        .firestore()
        .collection("arvores")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            if (doc.data().id === this.pegaIdRota()) {
              var temp_id = doc.data().id;
              this.$firebase
                .firestore()
                .collection("arvores")
                .where("id", "==", temp_id)
                .get()
                .then(querySnapshot => {
                  querySnapshot.forEach(doc => {
                    doc.ref.update({ ativo: "N" });
                  });
                });
            }
          });
        })
        .then(
          Notify.create({
            color: "negative",
            position: "bottom",
            message: "Excluido com sucesso",
            icon: "info",
            timeout: 5000,
            actions: [
              { label: "Desfazer", handler: () => this.desfazExclusao() }
            ]
          })
          // this.$router.push({name: 'visualizar-arvores'})
        );
      this.excluido = false;
    },
    desfazExclusao() {
      this.$firebase
        .firestore()
        .collection("arvores")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            var temp_id = doc.data().id;
            if (temp_id === this.pegaIdRota()) {
              this.$firebase
                .firestore()
                .collection("arvores")
                .where("id", "==", temp_id)
                .get()
                .then(querySnapshot => {
                  querySnapshot.forEach(doc => {
                    doc.ref.update({ ativo: "S" });
                  });
                });
            }
          });
        });
    },
    pegaIdRota() {
      return this.$route.params.rota;
    },
    pegaHoraAtual() {
      let timeStamp = Date.now();
      let formattedString = date.formatDate(
        timeStamp,
        "DD-MM-YYYYTHH:mm:ss.SSSZ"
      );
      this.arvore.data_atual_editada = formattedString;
    },
    pegaDispositivo() {
      let platform = this.$q.platform.is;
      this.dispositivo.plataforma = platform.platform;
      this.dispositivo.nome = platform.name;
      this.dispositivo.versao = platform.version;

      //Atribui Plataforma ao objeto
      this.arvore.dispositivo = this.dispositivo;
    },
    pegaUsuarioLogado() {
      //Chama o usuário logado do Store
      let user = this.$store.state.auth.user.email;
      this.arvore.editado_por = user;
    },
    atribuiMultiplos() {
      this.arvoreBanco = this.arvore;

      //Para atribuir os arrays dento do objeto arvore
      this.arvore.local_ataque.push(this.arvoreBanco.local_ataque);

      this.arvore.ecologia = this.ecologia;
      this.arvore.injurias = this.injurias;
      this.arvore.fenologia = this.fenologia;
      this.arvore.acao_executada = this.acao_executada;
      this.arvore.acao_recomendada = this.acao_recomendada;
      this.arvore.palmeira = this.palmeira;
      this.arvore.fito = this.fito;
      this.arvore.equilibrio_geral = this.equilibrio_geral;
      this.arvore.palmeira = this.palmeira;
    },
    conversoesString() {
      if (this.arvore.genero) {
        this.arvore.genero = this.arvore.genero.toUpperCase();
      }
      if (this.arvore.familia) {
        this.arvore.familia = this.arvore.familia.toUpperCase();
      }
      if (this.arvore.nome_popular) {
        this.arvore.nome_popular = this.arvore.nome_popular.toLowerCase();
      }
      if (this.arvore.especie) {
        this.arvore.especie = this.arvore.especie.toLowerCase();
      }
    },
    nomeCientifico() {
      this.arvore.nome_cientifico =
        this.arvore.genero + " " + this.arvore.especie;
    },
    geraID() {
      return uid();
    },
    sendFilePrimeira(file, updateProgress) {
      if (this.arvore.primeira_foto === undefined) {
        let primeira_foto = this.geraID();
        this.arvore.primeira_foto = primeira_foto;
      }

      let name = "arvore1.jpeg";

      var uploadTask = Firebase.storage()
        .ref(this.arvore.primeira_foto + "/" + name)
        .put(file);
      var width = 0;
      uploadTask.on(
        "state_changed",
        function(snapshot) {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          updateProgress = progress;
          switch (snapshot.state) {
            case Firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case Firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
          }
          var elem = document.getElementById("primeira");

          var id = setInterval(frame, 10);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
            } else {
              width = parseFloat(updateProgress).toFixed(2);
              elem.style.width = width + "%";
              elem.innerHTML = width * 1 + "%";
            }
          }
        },
        function(error) {
          // Handle unsuccessful uploads
          Notify.create({
            color: "negative",
            position: "bottom",
            message: "Foto 1 não foi enviada",
            icon: "danger",
            timeout: 2000
          });
        },
        function() {
          var self = this;
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            Notify.create({
              color: "positive",
              position: "bottom",
              message: "Foto 1 foi enviada",
              icon: "info",
              timeout: 2000
            });
            this.enviadaPrimeira = false;
            console.log("File available at", downloadURL);
          });
        }
      );
    },
    sendFileSegunda(file, updateProgress) {
      if (this.arvore.primeira_foto === undefined) {
        let primeira_foto = this.geraID();
        this.arvore.primeira_foto = primeira_foto;
      }

      let name = "arvore2.jpeg";

      var uploadTask = Firebase.storage()
        .ref(this.arvore.primeira_foto + "/" + name)
        .put(file);
      var width = 0;
      uploadTask.on(
        "state_changed",
        function(snapshot) {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          updateProgress = progress;
          switch (snapshot.state) {
            case Firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case Firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
          }
          var elem = document.getElementById("segunda");

          var id = setInterval(frame, 10);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
            } else {
              width = parseFloat(updateProgress).toFixed(2);
              elem.style.width = width + "%";
              elem.innerHTML = width * 1 + "%";
            }
          }
        },
        function(error) {
          // Handle unsuccessful uploads
          Notify.create({
            color: "negative",
            position: "bottom",
            message: "Foto 2 não foi enviada",
            icon: "danger",
            timeout: 2000
          });
        },
        function() {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            Notify.create({
              color: "positive",
              position: "bottom",
              message: "Foto 2 foi enviada",
              icon: "info",
              timeout: 2000
            });
            this.enviadaSegunda = false;
            console.log("File available at", downloadURL);
          });
        }
      );
    },
    sendFileTerceira(file, updateProgress) {
      if (this.arvore.primeira_foto === undefined) {
        let primeira_foto = this.geraID();
        this.arvore.primeira_foto = primeira_foto;
      }
      this.loadingTerceira = true;

      let name = "arvore3.jpeg";

      var uploadTask = Firebase.storage()
        .ref(this.arvore.primeira_foto + "/" + name)
        .put(file);
      var width = 0;
      uploadTask.on(
        "state_changed",
        function(snapshot) {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
          updateProgress = progress;
          switch (snapshot.state) {
            case Firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log("Upload is paused");
              break;
            case Firebase.storage.TaskState.RUNNING: // or 'running'
              console.log("Upload is running");
              break;
          }
          var elem = document.getElementById("terceira");

          var id = setInterval(frame, 10);
          function frame() {
            if (width >= 100) {
              clearInterval(id);
            } else {
              width = parseFloat(updateProgress).toFixed(2);
              elem.style.width = width + "%";
              elem.innerHTML = width * 1 + "%";
            }
          }
        },
        function(error) {
          // Handle unsuccessful uploads
          Notify.create({
            color: "negative",
            position: "bottom",
            message: "Foto 3 não foi enviada",
            icon: "danger",
            timeout: 2000
          });
        },
        function() {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            Notify.create({
              color: "positive",
              position: "bottom",
              message: "Foto 3 foi enviada",
              icon: "info",
              timeout: 2000
            });
            this.enviadaTerceira = false;
            console.log("File available at", downloadURL);
          });
        }
      );
    },
    confereVazios() {
      let tamanho = Object.keys(this.arvore).length;
      console.log(tamanho);
      if (tamanho <= 56) {
        this.arvore.falta_campos = "Sim";
        Notify.create({
          color: "negative",
          position: "bottom",
          message: "Faltam Campos!",
          icon: "info",
          timeout: 3500
        });
      } else {
        this.arvore.falta_campos = "Não";
      }
    },
    salvarReal(arvore) {
      this.$firebase
        .database()
        .ref("avores/" + this.arvore.id)
        .update({
          arvore: arvore
        });
      console.log("salvo realtime");
    },
    salvarFirestore(arvore) {
      let collection = this.$firebase
        .firestore()
        .collection("arvores")
        .doc(this.doc_id);
      collection.update(arvore).then(
        Notify.create({
          color: "positive",
          position: "bottom",
          message: "Árvore Atualizada",
          icon: "thumb_up",
          timeout: 2000
        })
      );
      console.log("salvo firestore");
    },
    salvaBancos() {
      this.salvarFirestore(this.arvore);
      this.salvarReal(this.arvore);
    },
    salvarArvoreLocal(dado) {
      let name = "arvore" + dado.id;
      LocalStorage.set(name, dado);
    },
    salvaArvore() {
      this.salvarArvoreLocal(this.arvore);
      this.arvore.fito = this.fito;
      this.arvore.equilibrio_geral = this.equilibrio_geral;
      this.arvore.ativo = "S";
      this.conversoesString();
      this.pegaUsuarioLogado();
      this.pegaHoraAtual();
      this.nomeCientifico();
      this.confereVazios();
      this.salvaBancos();
      this.voltar();
    },
    voltar() {
      this.$router.push({
        name: "visualizar-arvore-detalhe",
        params: { rota: this.arvore_id }
      });
    },
    autoComplete(tipo){
      this.$firebase
        .firestore()
        .collection("arvores")
        .orderBy(tipo)
        .where("ativo", '==', 'S')
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            let dado = doc.data()
            if(tipo === 'familia'){
              if(dado.familia){
                this.familias.push({
                'id'    : dado.numero,
                'name'  : dado.familia
                })
              }
            } else if(tipo === 'genero'){
              if(dado.genero){
                this.generos.push({
                  'id' : dado.numero,
                  'name' : dado.genero
                })
              }
            }
            else if(tipo === 'especie'){
              if(dado.especie){
                this.especies.push({
                  'id' : dado.numero,
                  'name' : dado.especie
                })
              }
            }
          })
        })
    }
  }
};
</script>

<style>
</style>
