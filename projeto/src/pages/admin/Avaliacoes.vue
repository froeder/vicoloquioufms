<template>
    <q-page padding>
        <q-card>
            <q-card-title>
                Média das Avaliações Palestra Magna
            </q-card-title>
            <q-card-main>
                Relevância do conteúdo apresentado:
                <br>
                {{media_relevancia}}
                <br>
                <br>
                Domínio técnico sobre o assunto tratado (embasamento teórico):
                <br>
                {{media_dominio}}
                <br>
                <br>
                Metodologia utilizada para a apresentação do conteúdo:
                <br>
                {{media_metodologia}}
                <br>
                <br>
                Qualidade dos questionamentos e intervenções do público participante desta Palestra:
                <br>
                {{media_questionamento}}
            </q-card-main>
        </q-card>
    </q-page>
</template>

<script>
import Firebase from 'firebase'

export default {
    data(){
        return{
            media_dominio: 0,
            dominio: 0,
            media_relevancia: 0,
            relevancia: 0,
            media_metodologia: 0,
            metodologia: 0,
            media_questionamento: 0,
            questionamento: 0,
            tamanho: 0,
        }
    },
    mounted(){
        this.calculaMedia()
        
        // console.log(this.tamanho)
    },
    methods:{
        calculaMedia(){
            Firebase.firestore().collection('avaliacao1').get().then(
                query => {
                    query.forEach(doc => {
                        // console.log(doc.data())
                        let dado = doc.data()
                        this.dominio = this.dominio + dado.dominio
                        this.relevancia = this.relevancia + dado.relevancia
                        this.metodologia = this.metodologia + dado.metodologia
                        this.questionamento = this.questionamento + dado.qualidade_questionamento
                        this.tamanho ++  
                    })
                    this.media_dominio = this.dominio / this.tamanho
                    this.media_relevancia = this.relevancia / this.tamanho
                    this.media_metodologia = this.metodologia / this.tamanho
                    this.media_questionamento = this.questionamento / this.tamanho
                }
            )
            
        }
    }
}
</script>

<style>

</style>
