<template>
  <div>
    <q-btn color="positive" icon="help">
      <q-popover>
        <p>
          <q-list>
            <q-item>
              <b>Ótimo</b> Quando a arvore é vigorosa e sadia. Sem sinais aparentes de ataque de insetos, doenças ou injurias mecânicas,
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
              <b>Morta</b> Árvore seca ou com morte iminente.
            </q-item>
          </q-list>
        </p>
      </q-popover>
    </q-btn>
  </div>
</template>

<script>
export default {
    name: 'EstadoGeral'
}
</script>
