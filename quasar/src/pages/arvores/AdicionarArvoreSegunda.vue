<template>
  <q-page padding>
    <q-card style="background-color:white">
      <q-card-title>Biologia</q-card-title>
      <q-card-main>
        <form class="row gutter-xs">
          <q-field class="col-xs-12 col-md-6">
            <q-select
              v-model="estado_geral"
              :options="item_estado_geral"
              float-label="Estado Geral"
            />
            <br>
            <EstadoGeral></EstadoGeral>
          </q-field>
          <q-field class="col-xs-12 col-md-6">
            <br>
            <q-select
              v-model="equilibrio"
              :options="item_equilibrio"
              float-label="Equilíbrio"
            />
          </q-field>
          <q-field v-if="equilibrio==='Não'" class="col-md-6">
            <br>
            <q-select multiple v-model="equilibrio_geral" :options="item_equilibrio_geral" float-label="Equilíbrio Geral" />
          </q-field>
        </form>
      </q-card-main>
      <q-card-actions class="row gutter-xs">
        <div class="col-xs-6">
          <q-btn color="info" class="full-width" @click="anterior()">
            <q-icon name="arrow_back"></q-icon>Anterior
          </q-btn>
        </div>
        <div class="col-xs-6">
          <q-btn color="primary" class="full-width">Próximo
            <q-icon name="arrow_forward"></q-icon>
          </q-btn>
        </div>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import json_estado_geral from "../../store/estado_geral.json"
import EstadoGeral from "./componentes/EstadoGeral.vue"

import json_equilibrio from "../../store/equilibrio.json"
import json_equilibrio_geral from '../../store/equilibrio_geral.json'

export default {
  data() {
    return {
      arvore: {},
      equilibrio: '',
      equilibrio_geral: [],
      estado_geral: '',
      item_estado_geral: json_estado_geral,
      item_equilibrio: json_equilibrio,
      item_equilibrio_geral: json_equilibrio_geral,
      fito: [], 
    };
  },
  components: {
    EstadoGeral
  },
  mounted() {
    this.arvore = this.$route.params;
    console.log(this.arvore);
  },
  methods: {
    atribuirCamposArvores(){
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
        altura_primeira_ramificacao: this.altura_primeira_ramificacao,
        equilibrio: this.equilibrio,
        equilibrio_geral: this.equilibrio_geral, 
        estado_geral: this.estado_geral
      }
    },
    anterior() {
      this.$router.push({
        name: "adicionar-arvore-primeira",
        params: this.arvore
      });
    }
  }
};
</script>

