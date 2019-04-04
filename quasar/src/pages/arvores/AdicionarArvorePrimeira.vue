<template>
  <q-page padding>
    <q-card style="background-color:white">
      <q-card-title>Identificação e Informação</q-card-title>
      <q-card-main>
        <form class="row gutter-xs">
          <q-field class="col-xs-6 col-md-6">
            <q-input
              readonly
              type="number"
              v-model="arvore.numero"
              float-label="Número"
              :attributes="{tabindex: '2'}"
            />
          </q-field>
          <q-field class="col-xs-6 col-md-6">
            <q-input v-model="arvore.setor" float-label="Setor" :attributes="{tabindex: '3'}"/>
          </q-field>
          <q-field :count="9" class="col-xs-12 col-md-6">UTM:
            <q-input
              type="number"
              max-length="9"
              v-model="arvore.latitude"
              :attributes="{tabindex: '4'}"
            />
            <br>Latitude
            <q-input v-model="arvore.latitude_utm" :attributes="{tabindex: '5'}"/>
          </q-field>
          <q-field :count="9" class="col-xs-12 col-md-6">UTM:
            <q-input type="number" v-model="arvore.longitude" :attributes="{tabindex: '6'}"/>
            <br>Longitude
            <q-input v-model="arvore.longitude_utm" :attributes="{tabindex: '7'}"/>
          </q-field>
          <br>
          <q-field class="col-md-12">
            <br>
            <span class="headline">Dados da árvore</span>
          </q-field>
          <q-field v-if="!obter_foto_nome_popular" class="col-xs-10 col-md-4">
            <q-input v-model="arvore.nome_popular" float-label="Nome Popular"/>
          </q-field>
          <span v-if="obter_foto_nome_popular">Obter Nome por foto</span>
          <q-toggle
            true-value="true"
            label
            leftLabel
            v-model="arvore.obter_foto_nome_popular"
            checked-icon="photo_camera"
            unchecked-icon="edit"
          />
          <!-- FAMILIA -->
          <q-field v-if="!obter_foto_familia" class="col-xs-12 col-md-6">
            <q-input v-model="arvore.familia" float-label="Família"/>
          </q-field>
          <span v-if="obter_foto_familia">Obter Família por foto</span>
          <q-toggle
            true-value="true"
            label
            leftLabel
            v-model="arvore.obter_foto_familia"
            checked-icon="photo_camera"
            unchecked-icon="edit"
          />
          <!-- FIM FAMILIA -->
          <!-- GENERO -->
          <q-field v-if="!obter_foto_genero" class="col-xs-12 col-md-4">
            <q-input v-model="arvore.genero" float-label="Gênero" class="text-italic"/>
          </q-field>
          <span v-if="obter_foto_genero">Obter Gênero por foto</span>
          <q-toggle
            true-value="true"
            label
            leftLabel
            v-model="arvore.obter_foto_genero"
            checked-icon="photo_camera"
            unchecked-icon="edit"
          />
          <!-- FIM GENERO -->
          <!-- ESPECIE -->
          <q-field v-if="!obter_foto_especie" class="col-xs-12 col-md-4">
            <q-input v-model="arvore.especie" float-label="Espécie" class="text-italic"/>
          </q-field>
          <span v-if="obter_foto_especie">Obter Espécie por foto</span>
          <q-toggle
            true-value="true"
            label
            leftLabel
            v-model="arvore.obter_foto_especie"
            checked-icon="photo_camera"
            unchecked-icon="edit"
          />
          <!-- FIM ESPECIE -->
          <br>
          <br>
          <br>
          <span style="margin-bottom:1px" class="col-xs-12">Circunferências:</span>
          <q-field class="col-xs-4 col-md-4">
            <q-input type="number" v-model="arvore.c90" float-label="C90 cm"/>
          </q-field>
          <q-field class="col-xs-4 col-md-4">
            <q-input type="number" v-model="arvore.c130" float-label="C130 cm"/>
          </q-field>
          <q-field class="col-xs-4 col-md-4">
            <q-input type="number" v-model="arvore.c150" float-label="C150 cm"/>
          </q-field>
          <q-field v-if="!obter_foto_altura_ramificacao" class="col-xs-10 col-md-6">
            <q-input
              type="number"
              v-model="arvore.altura_primeira_ramificacao"
              float-label="Altura primeira ramificação m"
            />
          </q-field>
          <span v-if="obter_foto_altura_ramificacao">Obter Altura Ramificacao por foto</span>
          <q-toggle
            true-value="true"
            label
            leftLabel
            v-model="arvore.obter_foto_altura_ramificacao"
            checked-icon="photo_camera"
            unchecked-icon="edit"
          />
          <q-field class="col-xs-12 col-md-6">Formato
            <q-radio v-model="arvore.altura_opcao" val="V" label="V"/>
            <q-radio v-model="arvore.altura_opcao" val="U" label="U"/>
            <q-btn color="positive" icon="help">
              <q-popover>
                <p>
                  Altura da primeira ramificação. É a medida a partir do chão, onde a árvore forma seu galho mais baixo. O formato.
                  V. é quando o galho está enviesado, lembrando um “V”. U, quando o galho está inserido em formato mais seguro, de U.
                </p>
              </q-popover>
            </q-btn>
          </q-field>
          <q-field class="col-xs-6 col-md-6">
            <span>Rua</span>
            <br>
            <q-toggle
              true-value="true"
              label="Ausente"
              left-label
              v-model="arvore.ruaAusente"
              checked-icon="visibility"
              unchecked-icon="visibility_off"
            />
            <q-input v-if="ruaAusente" type="number" v-model="arvore.rua" float-label="Rua (m)"/>
          </q-field>
          <q-field class="col-xs-6 col-md-6">
            <span>Calçada</span>
            <br>
            <q-toggle
              true-value="true"
              label="Ausente"
              leftLabel
              v-model="arvore.calcadaAusente"
              checked-icon="visibility"
              unchecked-icon="visibility_off"
            />
            <q-input
              v-if="calcadaAusente"
              type="number"
              v-model="arvore.calcada"
              float-label="Calçada (m)"
            />
          </q-field>
          <q-field class="col-md-12">
            <br>
            <span style="margin-bottom:1px" class="headline">Arquitetura da Copa</span>
            <q-select
              v-model="arvore.arq_copa"
              :options="arquitetura"
              float-label="Arquitetura da Copa"
            />
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
      </q-card-main>
      <q-card-actions class="row gutter-xs">
          <q-btn class="full-width" color="primary" @click="proximo()">Próximo
            <q-icon name="arrow_forward"></q-icon>
          </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import arquitetura from "../../store/arquitetura_copa.json";
import LocalStorage from 'quasar'

export default {
  data() {
    return {
      arvore: {},
      ruaAusente: false,
      calcadaAusente: false,
      palmeira: 'Nao',
      arquitetura: arquitetura,
      arq_copa: '',
      numero : '',
      setor: '',
      latitude: '',
      latitude_utm: '',
      longitude: '',
      longitude_utm: '',
      obter_foto_nome_popular: '',
      nome_popular: '',
      obter_foto_familia: '',
      familia: '',
      obter_foto_genero: '',
      genero: '',
      obter_foto_especie: '',
      especie: '',
      c90: 0,
      c130: 0,
      c150: 0, 
      obter_foto_altura_ramificacao: '',
      altura_opcao: '', 
      altura_primeira_ramificacao: 0,
      rua: 0, 
      calcada: 0
    }
  },
  methods: {
    salvarLocal(){
      let name = "arvore"
      let dado = this.arvore
      LocalStorage.set(name, dado);
    },
    proximo(){
      // this.atribuirCamposArvore()
      this.salvarLocal()
      this.$router.push({name: 'adicionar-arvore-segunda', params: this.arvore})
    },
    atribuirCamposArvore(){
      this.arvore = {
        ruaAusente: this.ruaAusente,
        rua: this.rua,
        calcadaAusente: this.calcadaAusente,
        calcada: this.calcada,
        palmeira: this.palmeira,
        arq_copa: this.arq_copa,
        numero : this.numero,
        setor: this.setor,
        latitude: this.latitude,
        latitude_utm: this.latitude_utm,
        longitude: this.longitude,
        longitude_utm: this.longitude_utm,
        obter_foto_nome_popular: this.obter_foto_nome_popular,
        nome_popular: this.nome_popular,
        obter_foto_familia: this.obter_foto_familia,
        familia: this.familia,
        obter_foto_genero: this.obter_foto_genero,
        genero: this.genero,
        obter_foto_especie: this.obter_foto_especie,
        especie: this.especie,
        c90: this.c90 ,
        c130: this.c130,
        c150: this.c150, 
        obter_foto_altura_ramificacao: this.obter_foto_altura_ramificacao,
        altura_opcao: this.altura_opcao, 
        altura_primeira_ramificacao: this.altura_primeira_ramificacao
      }
    }
  },
  mounted(){
    if(this.$route.params) {
      this.arvore = this.$route.params
    }
    
  }
};
</script>

<style>
.q-card {
  color: black;
  border-radius: 10px;
  background-color: #bc9422;
}
</style>
