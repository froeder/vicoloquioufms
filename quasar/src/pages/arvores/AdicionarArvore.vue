<template>
  <q-page padding>
    <span class="text-weight-thin">Adicionar Árvores</span>
    <q-stepper color="secondary" ref="stepper" alternative-labels>
      <q-step default name="first" title="Identificação e Informação">
        <div>
          <form class="row gutter-xs">
           <!-- <q-field class="col-xs-12 col-md-4">
              <q-datetime v-model="arvore.data" type="date" float-label="Data" :attributes="{tabindex: '1'}" />
            </q-field> -->
            <q-field class="col-xs-6 col-md-6">
              <q-input readonly	 type="number" v-model="arvore.numero" float-label="Número" :attributes="{tabindex: '2'}" />
            </q-field>
            <q-field class="col-xs-6 col-md-6">
              <q-input v-model="arvore.setor" float-label="Setor" :attributes="{tabindex: '3'}" />
            </q-field>
            <q-field :count="9" class="col-xs-12 col-md-6">
              UTM:
              <q-input type="number" max-length="9" v-model="arvore.latitude" :attributes="{tabindex: '4'}" />
              <br> Latitude
              <q-input v-model="arvore.latitude_utm" :attributes="{tabindex: '5'}" />
            </q-field>
            <q-field :count="9" class="col-xs-12 col-md-6">
              UTM:
              <q-input type="number" v-model="arvore.longitude" :attributes="{tabindex: '6'}"/>
              <br>  Longitude
              <q-input v-model="arvore.longitude_utm" :attributes="{tabindex: '7'}" />
            </q-field>
            <br>
            <q-field class="col-md-12">
              <br>
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
            <q-field v-if="!arvore.obter_foto_familia" class="col-xs-12 col-md-6">
              <q-input v-model="arvore.familia" float-label="Família" />
            </q-field><!--
            <autocomplete
              v-if="!arvore.obter_foto_familia"
              :source="familias"
              resultsValue="name"
              placeholder="Pesquisar Família"
              v-model="arvore.familia">
            </autocomplete> -->
            <span v-if="arvore.obter_foto_familia">Obter Família por foto</span>
            <q-toggle
                true-value="true"
                label=""
                leftLabel
                v-model="arvore.obter_foto_familia"
                checked-icon="photo_camera"
                unchecked-icon="edit"
              />
            <!-- FIM FAMILIA -->

            <!-- GENERO -->
            <q-field v-if="!arvore.obter_foto_genero" class="col-xs-12 col-md-4">
              <q-input v-model="arvore.genero" float-label="Gênero" class="text-italic" />
            </q-field><!--
            <autocomplete
              v-if="!arvore.obter_foto_genero"
              :source="generos"
              resultsValue="name"
              placeholder="Pesquisar Gênero"
              v-model="arvore.genero">
            </autocomplete>-->
            <span v-if="arvore.obter_foto_genero">Obter Gênero por foto</span>
            <q-toggle
                true-value="true"
                label=""
                leftLabel
                v-model="arvore.obter_foto_genero"
                checked-icon="photo_camera"
                unchecked-icon="edit"
              />
            <!-- FIM GENERO -->
            <!-- ESPECIE -->
            <q-field v-if="!arvore.obter_foto_especie" class="col-xs-12 col-md-4">
              <q-input v-model="arvore.especie" float-label="Espécie" class="text-italic" />
            </q-field><!--
            <autocomplete
              v-if="!arvore.obter_foto_especie"
              :source="especies"
              resultsValue="name"
              placeholder="Pesquisar Espécie"
              v-model="arvore.especie">
            </autocomplete>-->
            <span v-if="arvore.obter_foto_especie">Obter Espécie por foto</span>
            <q-toggle
                true-value="true"
                label=""
                leftLabel
                v-model="arvore.obter_foto_especie"
                checked-icon="photo_camera"
                unchecked-icon="edit"
              />
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
            <q-field v-if="!arvore.obter_foto_altura_ramificacao" class="col-xs-10 col-md-6">
              <q-input type="number" v-model="arvore.altura_primeira_ramificacao" float-label="Altura primeira ramificação m" />
            </q-field>
            <span v-if="arvore.obter_foto_altura_ramificacao">Obter Altura Ramificacao por foto</span>
            <q-toggle
                true-value="true"
                label=""
                leftLabel
                v-model="arvore.obter_foto_altura_ramificacao"
                checked-icon="photo_camera"
                unchecked-icon="edit"
              />
            <q-field class="col-xs-12 col-md-6">
              Formato
              <q-radio v-model="arvore.altura_opcao" val="V" label="V" />
              <q-radio v-model="arvore.altura_opcao" val="U" label="U" />
              <q-btn color="positive" icon="help">
                <q-popover>
                  <p>Altura da primeira ramificação. É a medida a partir do chão, onde a árvore forma seu galho mais baixo. O formato.
                    V. é quando o galho está enviesado, lembrando um “V”. U, quando o galho está inserido em formato mais seguro, de U.
                  </p>
                </q-popover>
              </q-btn>
            </q-field>
            <q-field class="col-xs-6 col-md-6">
              <span>Rua</span><br>
              <q-toggle
                true-value="true"
                label="Ausente"
                left-label
                v-model="ruaAusente"
                checked-icon="visibility"
                unchecked-icon="visibility_off"
              />
              <q-input v-if="ruaAusente" type="number" v-model="arvore.rua" float-label="Rua (m)" />
            </q-field>
            <q-field class="col-xs-6 col-md-6">
              <span>Calçada</span><br>
              <q-toggle
                true-value="true"
                label="Ausente"
                leftLabel
                v-model="calcadaAusente"
                checked-icon="visibility"
                unchecked-icon="visibility_off"
              />
              <q-input v-if="calcadaAusente" type="number" v-model="arvore.calcada" float-label="Calçada (m)" />
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
                v-model="palmeira"
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
          <q-field class="col-xs-12 col-md-6">
            <br>
            <q-select
              v-model="arvore.estado_geral"
              :options="item.estadoGeral"
              float-label="Estado Geral"
            />
            <q-btn color="positive" icon="help">
              <q-popover>
                <p>
                  <q-list>
                    <q-item><b>Ótimo </b> Quando a arvore é vigorosa e sadia. Sem sinais aparentes de ataque de insetos, doenças ou injurias mecânicas,
pouca ou nenhuma necessidade de manutenção, e tem a forma ou arquitetura característica da espécie.
                    </q-item>
                    <q-item>
                      <b>Bom</b> Médias condições de vigor e saúde. Necessita de pequenos reparos ou poda. Apresenta descaracterização da
forma. Sinais de ataque de inseto. Doença ou problemas fisiológicos.
                    </q-item>
                    <q-item>
                      <b>Regular</b> Estado geral de início de declínio (galhos secos nas extremidades). Apresenta ataque severo por insetos,
doença ou injuria mecânica descaracterizando sua arquitetura ou desequilibrando o vegetal, problemas fisiológicos
requerendo reparo.
                    </q-item>
                    <q-item>
                      <b>Péssimo</b> Avançado e irreversível declínio. Apresenta ataque muito severo de insetos, doença ou injuria mecânica
descaracterizando sua arquitetura ou desequilibrando o vegetal, problemas fisiológicos cujos reparos não resultarão
em benefício para o indivíduo.
                    </q-item>
                    <q-item>
                     <b> Morta </b> Árvore seca ou com morte iminente.
                    </q-item>
                  </q-list>
                </p>
              </q-popover>
            </q-btn>
          </q-field>
          <q-field class="col-xs-12 col-md-6">
            <br>
            <q-select  v-model="arvore.equilibrio" :options="item.equilibrio" float-label="Equilíbrio" />
          </q-field>
          <q-field v-if="arvore.equilibrio==='Não'" class="col-md-6">
            <br>
            <q-select multiple v-model="equilibrio_geral" :options="item.equilibrioGeral" float-label="Equilíbrio Geral" />
          </q-field>
          <q-field class="col-xs-12 col-md-6">
            <br>
            <q-select radio multiple v-model="fito" :options="item.fito" float-label="Fitossanidade" />
          </q-field>
          <div v-if="this.fito!='Sadia'" class="col-xs-12 col-md-6">
            <br>
            <q-select v-model="arvore.intensidade" :options="item.intensidade" float-label="Intensidade" />
            <q-btn color="positive" icon="help">
              <q-popover>
                <q-list>
                  <q-item><b>LEVE</b>Quando o organismo está presente porem sem causar danos para a arvore</q-item>
                  <q-item><b>MÉDIA</b>Quando o organismo ou agente está presente causando danos reparáveis pela arvore</q-item>
                  <q-item><b>PESADO</b>Quando o organismo ou agente está causando danos graves que podem levar a arvore a um
declínio irremediável.</q-item>
                </q-list>
              </q-popover>
            </q-btn>
          </div>
          <div v-if="this.fito!='Sadia'" class="col-xs-12 col-md-3">
            <br>
            <q-select :options="item.ataque" v-model="local_ataque" float-label="Local do Ataque" multiple />
          </div>
          <q-field class="col-xs-12 col-md-3">
            <br>
            <q-select :options="item.lesao" v-model="injurias" float-label="Injúrias" multiple />
            <q-btn color="positive" icon="help">
              <q-popover>
                <q-list>
                  <q-item><b>Lesão Grave</b> Quando a lesão compromete a sobrevivência da árvore.</q-item>
                  <q-item>
                    <b>Lesão media</b> Quando a injuria é considerável, mas a arvore ode ser recuperada mediante ações de
controle.         </q-item>
                  <q-item>
                    <b>Lesão leve</b> Quando a injuria é de pequena proporção e a arvore pode promover a recuperação sem
qualquer auxilio
                  </q-item>
                  <q-item>
                    <b>Vandalismo</b> Sinal de ataque humano (fogo, pregos, inscrição de nomes com objetos pontiagudos,
quebra intencional de partes da arvore. etc)
                  </q-item>
                  <q-item>
                    <b>Inexistente</b> Este item só é marcado se o item injúrias for “sadia”
                  </q-item>
                </q-list>
              </q-popover>
            </q-btn>
          </q-field>
          <q-field class="col-xs-12 col-md-3">
            <br>
            <q-select :options="item.eco" v-model="ecologia" float-label="Ecologia" multiple />
          </q-field>

          <q-field class="col-xs-12 col-md-3">
            <br>
            <q-select :options="item.fenologia" v-model="fenologia" float-label="Fenologia" multiple />
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
            <q-btn color="positive" icon="help">
              <q-popover>
                <q-list>
                  <q-item> <b>Campo</b> Quando a arvore não está em logradouro.</q-item>
                  <q-item><b>Centrada</b> Quando a arvore está no centro da calçada.</q-item>
                  <q-item><b>Junto a divisa</b> Quando a arvore está próxima de um muro ou cerca de imóvel.</q-item>
                  <q-item><b>Junto a guia</b> Quando está próxima à guia da calçada.</q-item>
                </q-list>
              </q-popover>
            </q-btn>
          </q-field>
          <q-field class="col-md-3">
            <q-select :options="item.pavimento" v-model="arvore.pavimento" float-label="Pavimento" />
          </q-field>
          <q-field class="col-md-3">
            <q-select :options="item.afloramRaiz" v-model="arvore.afloram_raiz" float-label="Afloramento de raiz" />
            <q-btn color="positive" icon="help">
              <q-popover>
                <q-list>
                  <q-item><b>Leve</b> Quando o pavimento apresenta pequenas rachaduras por causa das rizes superficiais, porém sem causar riscos para
pedestres ou construções.
                  </q-item>
                  <q-item>
                    <b>Médio</b> Quando as rachaduras causarem algum risco para pedestres porem sem danos para construção e vias publicas.
                  </q-item>
                  <q-item>
                    <b>Pesado</b> Quando o risco é evidente e os anos também, com necessidade de refazer pisos, e até mesmo eliminar parte das raízes a
uma boa distância do colo da arvore.
                  </q-item>
                </q-list>
              </q-popover>
            </q-btn>
          </q-field>
          <q-field class="col-md-3">
            <q-select :options="item.participacao" v-model="arvore.participacao" float-label="Participação na paisagem" />
            <q-btn color="positive" icon="help">
              <q-popover>
                <q-list>
                  <q-item>
                    <b>Copa isolada</b> quando a arvore estiver isolada como representante único de sua espécie no local.
                  </q-item>
                  <q-item>
                    <b>Duas ou mais</b> Quando existir um ou mais indivíduos da mesma espécie próximos.
                  </q-item>
                </q-list>
              </q-popover>
            </q-btn>
          </q-field>
          <q-field class="col-md-4">
            <q-input type="number" v-if="arvore.participacao!='Copa Isolada'" v-model="arvore.participacao_distancia" float-label="Distância da mais próxima (m)" />
          </q-field>
          <q-field class="col-md-3">
            <q-select :options="item.fiacao" v-model="arvore.fiacao" float-label="Fiação" />
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
            <q-btn color="positive" icon="help">
              <q-popover>
                <q-list>
                  <q-item></q-item>
                  <q-item><b>Ótima</b> Ação correta, necessária para a adequada manutenção da arvore executada com técnica.</q-item>
                  <q-item><b>Boa</b> Ação correta, porém sem técnica.</q-item>
                  <q-item><b>Regular</b> Ação executada sem a observância de normas técnicas, porém sem causar danos graves.</q-item>
                  <q-item><b>Péssima</b> Ação incorreta, com consequências graves para a árvore.</q-item>
                </q-list>
              </q-popover>
            </q-btn>
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
            <q-select select="Inexistente" :options="item.muroConstrucao" v-model="arvore.muro_construcao" float-label="Muro/Construção" />
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
            <q-select :options="item.acaoExecutada" v-model="acao_executada" float-label="Ação Executada" multiple/>
          </q-field>
          <q-field class="col-md-4">
            <br>
            <q-select :options="item.qualidadeAcao" v-model="arvore.qualidade_acao" float-label="Qualidade da Ação" />
          </q-field>
          <q-field class="col-md-4">
            <br>
            <q-select :options="item.acaoRecomendada" v-model="acao_recomendada" float-label="Ação Recomendada" multiple/>
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
          <q-btn color="positive" icon="cloud_upload" @click="salvaArvore()" label="Salvar" />
          <q-btn color="secondary" icon="arrow_back_ios" flat @click="$refs.stepper.previous()" label="Voltar" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-page>
</template>

<script>
import { uid, Notify, date } from "quasar";
import Firebase from "firebase";
import { TheMask } from "vue-the-mask";
import arvores from "../../store/arvores.json";
import Autocomplete from 'vuejs-auto-complete'
import getData from '../../services/getDataFirebase'

export default {
  components: { TheMask , Autocomplete},
  data() {
    return {
      ultimo_id: null,
      fito: [],
      local_ataque: [],
      equilibrio_geral: [],
      ecologia: [],
      injurias: [],
      fenologia: [],
      dispositivo: {},
      items: {},
      item: arvores,
      acao_recomendada: ['Não Especificado'],
      acao_executada: ['Não Especificado'],
      arvore: {
        afloram_raiz: "Inexistente",
        muro_construcao: "Inexistente",
        colo_pavimentado: "Inexistente",
        manilha: "Inexistente",
        recuo: "Inexistente",
        sinalizacao: "Inexistente",
        posteamento: "Inexistente",
        iluminacao: "Inexistente",
        fiacao: "Inexistente",
        observacoes_gerais: "Inexistente",
        qualidade_acao: "Não Especificado"
      },
      arvoreId: "",
      ruaAusente: false,
      calcadaAusente: false,
      palmeira: "nao",
      step: "first",
      step2: "first",
      file: "",
      options: ["contractable", "disable_payment", "step_error"],
      loadingPrimeira: false,
      enviadaPrimeira: true,
      loadingSegunda: false,
      enviadaSegunda: true,
      loadingTerceira: false,
      enviadaTerceira: true,
      leftlabel: true,
      excluido: false,
      familias: [],
      generos : [],
      especies : [],
      terms: '',
      bbanco: []
    };
  },
  mounted() {
    this.pegaHoraAtual();
    this.pegaUltimoID() ;

    let familia = 'familia'
    this.autoComplete(familia)

    let genero = 'genero'
    this.autoComplete(genero)

    let especie = 'especie'
    this.autoComplete(especie)

    this.bbanco = getData()
    console.log(this.bbanco)
  },
  created(){
    this.pegaUltimoID() 
     this.pegaDispositivo();
  },
  methods: {
    pegaUltimoID(){
      this.$firebase
        .firestore()
        .collection("arvores")
        .orderBy("numero")
        .where("ativo", '==', 'S')
        .get()
        .then(querySnapshot => {
          this.ultimo_id = querySnapshot.size + 1
          this.arvore.numero = this.ultimo_id
        })
    },
    pegaHoraAtual() {
      let timeStamp = Date.now();
      let formattedString = date.formatDate(
        timeStamp,
        "DD-MM-YYYYTHH:mm:ss.SSSZ"
      );
      this.arvore.data_atual_enviada = formattedString;
      let data = date.formatDate(timeStamp, "YYYY-MM-DD");
    },
    pegaDispositivo() {
      let platform = this.$q.platform.is;
      this.dispositivo.plataforma = platform.platform;
      this.dispositivo.nome = platform.name;
      this.dispositivo.versao = platform.version;

      //Atribui Plataforma ao objeto
      this.arvore.dispositivo = this.dispositivo;
    },
    pegaDataAtual() {
      var data = Data();
      this.arvore.data_envio = data;
    },
    pegaUsuarioLogado() {
      //Chama o usuário logado do Store
      let user = this.$store.state.auth.user.email;
      this.arvore.enviado_por = user;
    },
    atribuiMultiplos() {
      //Para atribuir os array dento do objeto arvore
      this.arvore.local_ataque = this.local_ataque;
      this.arvore.ecologia = this.ecologia;
      this.arvore.injurias = this.injurias;
      this.arvore.fenologia = this.fenologia;
      this.arvore.acao_executada = this.acao_executada;
      this.arvore.acao_recomendada = this.acao_recomendada;
      this.arvore.palmeira = this.palmeira;
      this.arvore.fito = this.fito;
      this.arvore.equilibrio_geral = this.equilibrio_geral;
      this.arvore.ativo = "S";
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
    novaArvore() {
      //Limpa todos os campos
      this.arvore = {};
      this.fito = [];
      this.local_ataque = [];
      this.ecologia = [];
      this.injurias = [];
      this.fenologia = [];
      this.acao_recomendada = ['Não Especificado']
      this.acao_executada = ['Não Especificado']
      this.equilibrio_geral = [];
      this.arvore = {
        ativo: "",
        afloram_raiz: "Inexistente",
        muro_construcao: "Inexistente",
        colo_pavimentado: "Inexistente",
        manilha: "Inexistente",
        recuo: "Inexistente",
        sinalizacao: "Inexistente",
        posteamento: "Inexistente",
        iluminacao: "Inexistente",
        fiacao: "Inexistente",
        qualidade_acao: "Não Especificado"
      };

      //Voltar para o primeiro Step
      this.$refs.stepper.goToStep("first");

      this.pegaUltimoID()
    },
    geraID() {
      return uid();
    },
    atribuIdArvore() {
      this.arvore.id = this.geraID();
    },
    sendFilePrimeira(file, updateProgress) {
      if (this.arvore.primeira_foto === undefined) {
        let primeira_foto = this.geraID();
        this.arvore.primeira_foto = primeira_foto;
      }
      this.loadingPrimeira = true;
      // file.name = 'arvore1.jpeg'
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
              Notify.create({
                color: "negative",
                position: "bottom",
                message: "Foto 1 não foi enviada",
                icon: "danger",
                timeout: 2000
              });
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
              message: "Foto 1 enviada",
              icon: "info",
              timeout: 2000
            });
            this.enviadaPrimeira = false;
            console.log("File available at", downloadURL);
            this.arvore.foto_segunda_link = downloadURL;
          });
        }
      );
    },
    sendFileSegunda(file, updateProgress) {
      if (this.arvore.primeira_foto === undefined) {
        let primeira_foto = this.geraID();
        this.arvore.primeira_foto = primeira_foto;
      }
      this.loadingSegunda = true;
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
              Notify.create({
                color: "negative",
                position: "bottom",
                message: "Upload pausado",
                icon: "danger",
                timeout: 2000
              });
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
              message: "Foto 2 enviada",
              icon: "info",
              timeout: 2000
            });
            this.enviadaSegunda = false;
            console.log("File available at", downloadURL);
            this.arvore.foto_segunda_link = downloadURL;
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
              message: "Foto 3 enviada",
              icon: "info",
              timeout: 2000
            });
            this.enviadaTerceira = false;
            console.log("File available at", downloadURL);
            this.arvore.foto_terceira_link = downloadURL;
          });
        }
      );
    },
    confereVazios() {
      let tamanho = Object.keys(this.arvore).length;
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
        .set({
          arvore: arvore
        });
      console.log("salvo realtime");
    },
    salvarFirestore(arvore) {
      let collection = this.$firebase.firestore().collection("arvores");
      collection.add(arvore).then(
        Notify.create({
          color: "positive",
          position: "bottom",
          message: "Árvore Cadastrada",
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
    salvaArvore() {
      this.arvore.ativo = "S";
      this.conversoesString();
      this.atribuiMultiplos();
      this.pegaUsuarioLogado();
      this.pegaHoraAtual();
      this.atribuIdArvore();
      this.nomeCientifico();
      this.confereVazios();
      this.salvaBancos();
      this.novaArvore();
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
  },
  computed: {
    alt() {
      return this.options.includes("alt");
    },
    contractable() {
      return this.options.includes("contractable");
    },
    globalNavigation() {
      return this.options.includes("global_navigation");
    },
    stepError() {
      return this.options.includes("step_error");
    },
    disabledStep() {
      return this.options.includes("disable_payment");
    },
    progress() {
      return this.options.includes("progress");
    }
  }
};
</script>

<style>
.q-stepper {
  background-color: #ffffff;
  border-radius: 10px;
  color: black;
}
#myProgress {
  width: 100%;
  background-color: grey;
}
#primeira,
#segunda,
#terceira {
  width: 1%;
  height: 30px;
  background-color: green;
  color: white;
}
</style>
