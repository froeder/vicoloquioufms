<template>
    <q-page padding>
        <q-card>
            <q-card-title>
                Média das Avaliações <strong>Palestra Magna</strong> 
            </q-card-title>
            <q-card-main>
                Relevância do conteúdo apresentado:
                <br>
                {{media_relevancia_magna.toFixed(2)}}
                <br>
                <br>
                Domínio técnico sobre o assunto tratado (embasamento teórico):
                <br>
                {{media_dominio_magna.toFixed(2)}}
                <br>
                <br>
                Metodologia utilizada para a apresentação do conteúdo:
                <br>
                {{media_metodologia_magna.toFixed(2)}}
                <br>
                <br>
                Qualidade dos questionamentos e intervenções do público participante desta Palestra:
                <br>
                {{media_questionamento_magna.toFixed(2)}}
            </q-card-main>
        </q-card>
        <q-card style="margin-top:1em">
            <q-card-title>
                Média das Avaliações <strong>Painel 1</strong>
            </q-card-title>
            <q-card-main>
               <section>
                   <strong>Palestra 1</strong> <br><br>
                     Relevância do conteúdo apresentado:
                    <br>
                    {{media_relevancia_painel1_palestra1.toFixed(2)}}
                    <br>
                    <br>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <br>
                    {{media_dominio_painel1_palestra1.toFixed(2)}}
                    <br>
                    <br>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <br>
                    {{media_metodologia_painel1_palestra1.toFixed(2)}}
                    <br>
                    <br>
               </section>
               <section>
                   <strong>Palestra 2</strong> <br><br>
                     Relevância do conteúdo apresentado:
                    <br>
                    {{media_relevancia_painel1_palestra2.toFixed(2)}}
                    <br>
                    <br>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <br>
                    {{media_dominio_painel1_palestra2.toFixed(2)}}
                    <br>
                    <br>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <br>
                    {{media_metodologia_painel1_palestra2.toFixed(2)}}
                    <br>
                    <br>
                </section>
                <section>
                   <strong>Palestra 3</strong> <br><br>
                     Relevância do conteúdo apresentado:
                    <br>
                    {{media_relevancia_painel1_palestra3.toFixed(2)}}
                    <br>
                    <br>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <br>
                    {{media_dominio_painel1_palestra3.toFixed(2)}}
                    <br>
                    <br>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <br>
                    {{media_metodologia_painel1_palestra3.toFixed(2)}}
                    <br>
                    <br>
                </section>
                Qualidade dos questionamentos e intervenções do público participante desta Painel:
                {{media_questionamento_painel1.toFixed(2)}}
                <br>
            </q-card-main>
        </q-card>
        <q-card style="margin-top:1em">
            <q-card-title>
                Média das Avaliações <strong>Painel 2</strong>
            </q-card-title>
            <q-card-main>
               <section>
                   <strong>Palestra 1</strong> <br><br>
                     Relevância do conteúdo apresentado:
                    <br>
                    {{media_relevancia_painel2_palestra1.toFixed(2)}}
                    <br>
                    <br>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <br>
                    {{media_dominio_painel2_palestra1.toFixed(2)}}
                    <br>
                    <br>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <br>
                    {{media_metodologia_painel2_palestra1.toFixed(2)}}
                    <br>
                    <br>
               </section>
               <section>
                   <strong>Palestra 2</strong> <br><br>
                     Relevância do conteúdo apresentado:
                    <br>
                    {{media_relevancia_painel2_palestra2.toFixed(2)}}
                    <br>
                    <br>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <br>
                    {{media_dominio_painel2_palestra2.toFixed(2)}}
                    <br>
                    <br>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <br>
                    {{media_metodologia_painel2_palestra2.toFixed(2)}}
                    <br>
                    <br>
                </section>
                <section>
                   <strong>Palestra 3</strong> <br><br>
                     Relevância do conteúdo apresentado:
                    <br>
                    {{media_relevancia_painel2_palestra3.toFixed(2)}}
                    <br>
                    <br>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <br>
                    {{media_dominio_painel2_palestra3.toFixed(2)}}
                    <br>
                    <br>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <br>
                    {{media_metodologia_painel2_palestra3.toFixed(2)}}
                    <br>
                    <br>
                </section>
                 <section>
                   <strong>Palestra 4</strong> <br><br>
                     Relevância do conteúdo apresentado:
                    <br>
                    {{media_relevancia_painel2_palestra4.toFixed(2)}}
                    <br>
                    <br>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <br>
                    {{media_dominio_painel2_palestra4.toFixed(2)}}
                    <br>
                    <br>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <br>
                    {{media_metodologia_painel2_palestra4.toFixed(2)}}
                    <br>
                    <br>
                </section>
                Qualidade dos questionamentos e intervenções do público participante desta Painel:
                {{media_questionamento_painel2.toFixed(2)}}
                <br>
            </q-card-main>
        </q-card>
        <q-card style="margin-top:1em">
            <q-card-title>Comentários</q-card-title>
            <q-card-main>
                <section>
                    <big>Questão 1:</big>
                    
                    <q-field class="align-left">
                        <q-input
                            type="textarea"
                            rows="7"
                            v-for="comentario in comentarios"
                            disable
                        >
                        {{comentario.questao1 ? comentario.questao1 : 'Nao informado'}} 
                        </q-input>
                    </q-field>
                </section>
                <br>
                <br>
                <section>
                    <big> Questão 2:</big>
                    <q-field class="align-left">
                        <q-input
                            type="textarea"
                            rows="7"
                            v-for="comentario in comentarios"
                            disable
                        >
                        {{comentario.questao2 ? comentario.questao2 : 'Nao informado'}} 
                        </q-input>
                    </q-field>
                </section>
                <br><br>
                <section>
                   <big>Questão 3:</big> 
                    <q-field class="align-left">
                        <q-input
                            type="textarea"
                            rows="7"
                            v-for="comentario in comentarios"
                            disable
                        >
                        {{comentario.questao3 ? comentario.questao3 : 'Nao informado'}} 
                        </q-input>
                    </q-field>
                </section>
            </q-card-main>
        </q-card>
    </q-page>
</template>

<script>
import Firebase from 'firebase'

export default {
    data(){
        return{
            media_dominio_magna: 0,
            dominio_magna: 0,
            media_relevancia_magna: 0,
            relevancia_magna: 0,
            media_metodologia_magna: 0,
            metodologia_magna: 0,
            media_questionamento_magna: 0,
            questionamento_magna: 0,
            tamanho_magna: 0,

            media_dominio_painel1_palestra1: 0,
            dominio_painel1_palestra1: 0,
            media_relevancia_painel1_palestra1: 0,
            relevancia_painel1_palestra1: 0,
            media_metodologia_painel1_palestra1: 0,
            metodologia_painel1_palestra1: 0,
            tamanho_painel1_palestra1: 0,

            media_dominio_painel1_palestra2: 0,
            dominio_painel1_palestra2: 0,
            media_relevancia_painel1_palestra2: 0,
            relevancia_painel1_palestra2: 0,
            media_metodologia_painel1_palestra2: 0,
            metodologia_painel1_palestra2: 0,
            tamanho_painel1_palestra2: 0,

            media_dominio_painel1_palestra3: 0,
            dominio_painel1_palestra3: 0,
            media_relevancia_painel1_palestra3: 0,
            relevancia_painel1_palestra3: 0,
            media_metodologia_painel1_palestra3: 0,
            metodologia_painel1_palestra3: 0,
            tamanho_painel1_palestra3: 0,

            questionamento_painel1: 0,
            media_questionamento_painel1: 0,

            media_dominio_painel2_palestra1: 0,
            dominio_painel2_palestra1: 0,
            media_relevancia_painel2_palestra1: 0,
            relevancia_painel2_palestra1: 0,
            media_metodologia_painel2_palestra1: 0,
            metodologia_painel2_palestra1: 0,
            tamanho_painel2_palestra1: 0,

            media_dominio_painel2_palestra2: 0,
            dominio_painel2_palestra2: 0,
            media_relevancia_painel2_palestra2: 0,
            relevancia_painel2_palestra2: 0,
            media_metodologia_painel2_palestra2: 0,
            metodologia_painel2_palestra2: 0,
            tamanho_painel2_palestra2: 0,

            media_dominio_painel2_palestra3: 0,
            dominio_painel2_palestra3: 0,
            media_relevancia_painel2_palestra3: 0,
            relevancia_painel2_palestra3: 0,
            media_metodologia_painel2_palestra3: 0,
            metodologia_painel2_palestra3: 0,
            tamanho_painel2_palestra3: 0,

            media_dominio_painel2_palestra4: 0,
            dominio_painel2_palestra4: 0,
            media_relevancia_painel2_palestra4: 0,
            relevancia_painel2_palestra4: 0,
            media_metodologia_painel2_palestra4: 0,
            metodologia_painel2_palestra4: 0,
            tamanho_painel2_palestra4: 0,

            questionamento_painel2: 0,
            media_questionamento_painel2: 0,

            comentarios: []
        }
    },
    mounted(){
        this.calculaMediaPalestraMagna()
        this.calculaMediaPrimeiroPainel()
        this.calculaMediaSegundoPainel()
        this.pegaComentarios()
        // console.log(this.tamanho_magna)
    },
    methods:{
        calculaMediaPalestraMagna(){
            Firebase.firestore().collection('avaliacao1').get().then(
                query => {
                    query.forEach(doc => {
                        // console.log(doc.data())
                        let dado = doc.data()
                        this.dominio_magna = this.dominio_magna + dado.dominio
                        this.relevancia_magna = this.relevancia_magna + dado.relevancia
                        this.metodologia_magna = this.metodologia_magna + dado.metodologia
                        this.questionamento_magna = this.questionamento_magna + dado.qualidade_questionamento
                        this.tamanho_magna ++  
                    })
                    this.media_dominio_magna = this.dominio_magna / this.tamanho_magna
                    this.media_relevancia_magna = this.relevancia_magna / this.tamanho_magna
                    this.media_metodologia_magna = this.metodologia_magna / this.tamanho_magna
                    this.media_questionamento_magna = this.questionamento_magna / this.tamanho_magna
                }
            )
            
        },
        calculaMediaPrimeiroPainel(){
            let tamanho_p1 = 0
            Firebase.firestore().collection('painel1').get().then(
                query => {
                    query.forEach(doc => {
                        let dado_p1 = doc.data().palestra1
                        this.dominio_painel1_palestra1 = this.dominio_painel1_palestra1 + dado_p1.dominio
                        this.relevancia_painel1_palestra1 = this.relevancia_painel1_palestra1 + dado_p1.relevancia
                        this.metodologia_painel1_palestra1 = this.metodologia_painel1_palestra1 + dado_p1.metodologia
                        this.tamanho_painel1_palestra1 ++  

                        let dado_p2 = doc.data().palestra2
                        this.dominio_painel1_palestra2 = this.dominio_painel1_palestra2 + dado_p2.dominio
                        this.relevancia_painel1_palestra2 = this.relevancia_painel1_palestra2 + dado_p2.relevancia
                        this.metodologia_painel1_palestra2 = this.metodologia_painel1_palestra2 + dado_p2.metodologia
                        this.tamanho_painel1_palestra2 ++  

                        let dado_p3 = doc.data().palestra3
                        this.dominio_painel1_palestra3 = this.dominio_painel1_palestra3 + dado_p3.dominio
                        this.relevancia_painel1_palestra3 = this.relevancia_painel1_palestra3 + dado_p3.relevancia
                        this.metodologia_painel1_palestra3 = this.metodologia_painel1_palestra3 + dado_p3.metodologia
                        this.tamanho_painel1_palestra3 ++ 
                        
                        if(doc.data().qualidade_questionamento){
                            this.questionamento_painel1 = this.questionamento_painel1 + doc.data().qualidade_questionamento
                        }
                    })
                    this.media_dominio_painel1_palestra1 = this.dominio_painel1_palestra1 / this.tamanho_painel1_palestra1
                    this.media_relevancia_painel1_palestra1 = this.relevancia_painel1_palestra1 / this.tamanho_painel1_palestra1
                    this.media_metodologia_painel1_palestra1 = this.metodologia_painel1_palestra1 / this.tamanho_painel1_palestra1

                    this.media_dominio_painel1_palestra2 = this.dominio_painel1_palestra2 / this.tamanho_painel1_palestra2
                    this.media_relevancia_painel1_palestra2 = this.relevancia_painel1_palestra2 / this.tamanho_painel1_palestra2
                    this.media_metodologia_painel1_palestra2 = this.metodologia_painel1_palestra2 / this.tamanho_painel1_palestra2

                    this.media_dominio_painel1_palestra3 = this.dominio_painel1_palestra3 / this.tamanho_painel1_palestra3
                    this.media_relevancia_painel1_palestra3 = this.relevancia_painel1_palestra3 / this.tamanho_painel1_palestra3
                    this.media_metodologia_painel1_palestra3 = this.metodologia_painel1_palestra3 / this.tamanho_painel1_palestra3
                    
                    this.media_questionamento_painel1 = this.questionamento_painel1 / this.tamanho_painel1_palestra1
                }
            )
        },
        calculaMediaSegundoPainel(){
            let tamanho_p1 = 0
            Firebase.firestore().collection('painel2').get().then(
                query => {
                    query.forEach(doc => {
                        let dado_p1 = doc.data().palestra1
                        if(doc.data().palestra1){
                            this.dominio_painel2_palestra1 = this.dominio_painel2_palestra1 + dado_p1.dominio
                            this.relevancia_painel2_palestra1 = this.relevancia_painel2_palestra1 + dado_p1.relevancia
                            this.metodologia_painel2_palestra1 = this.metodologia_painel2_palestra1 + dado_p1.metodologia
                            this.tamanho_painel2_palestra1 ++  
                        }
                        let dado_p2 = doc.data().palestra2
                        if(doc.data().palestra2){
                            this.dominio_painel2_palestra2 = this.dominio_painel2_palestra2 + dado_p2.dominio
                            this.relevancia_painel2_palestra2 = this.relevancia_painel2_palestra2 + dado_p2.relevancia
                            this.metodologia_painel2_palestra2 = this.metodologia_painel2_palestra2 + dado_p2.metodologia
                            this.tamanho_painel2_palestra2 ++ 
                        }
                        let dado_p3 = doc.data().palestra3
                        if(doc.data().palestra3){
                            this.dominio_painel2_palestra3 = this.dominio_painel2_palestra3 + dado_p3.dominio
                            this.relevancia_painel2_palestra3 = this.relevancia_painel2_palestra3 + dado_p3.relevancia
                            this.metodologia_painel2_palestra3 = this.metodologia_painel2_palestra3 + dado_p3.metodologia
                            this.tamanho_painel2_palestra3 ++ 
                        }

                        let dado_p4 = doc.data().palestra4

                        if(doc.data().palestra4){
                            this.dominio_painel2_palestra4 = this.dominio_painel2_palestra4 + dado_p4.dominio
                            this.relevancia_painel2_palestra4 = this.relevancia_painel2_palestra4 + dado_p4.relevancia
                            this.metodologia_painel2_palestra4 = this.metodologia_painel2_palestra4 + dado_p4.metodologia
                            this.tamanho_painel2_palestra4 ++ 
                        }
                        
                        
                        if(doc.data().qualidade_questionamento){
                            this.questionamento_painel2 = this.questionamento_painel2 + doc.data().qualidade_questionamento
                        }
                    })
                    this.media_dominio_painel2_palestra1 = this.dominio_painel2_palestra1 / this.tamanho_painel2_palestra1
                    this.media_relevancia_painel2_palestra1 = this.relevancia_painel2_palestra1 / this.tamanho_painel2_palestra1
                    this.media_metodologia_painel2_palestra1 = this.metodologia_painel2_palestra1 / this.tamanho_painel2_palestra1

                    this.media_dominio_painel2_palestra2 = this.dominio_painel2_palestra2 / this.tamanho_painel1_palestra2
                    this.media_relevancia_painel2_palestra2 = this.relevancia_painel2_palestra2 / this.tamanho_painel1_palestra2
                    this.media_metodologia_painel2_palestra2 = this.metodologia_painel2_palestra2 / this.tamanho_painel1_palestra2

                    this.media_dominio_painel2_palestra3 = this.dominio_painel2_palestra3 / this.tamanho_painel2_palestra3
                    this.media_relevancia_painel2_palestra3 = this.relevancia_painel2_palestra3 / this.tamanho_painel2_palestra3
                    this.media_metodologia_painel2_palestra3 = this.metodologia_painel2_palestra3 / this.tamanho_painel2_palestra3
                    
                    this.media_dominio_painel2_palestra4 = this.dominio_painel2_palestra4 / this.tamanho_painel2_palestra4
                    this.media_relevancia_painel2_palestra4 = this.relevancia_painel2_palestra4 / this.tamanho_painel2_palestra4
                    this.media_metodologia_painel2_palestra4 = this.metodologia_painel2_palestra4 / this.tamanho_painel2_palestra4

                    this.media_questionamento_painel2 = this.questionamento_painel2 / this.tamanho_painel2_palestra1
                }
            )
        },
        pegaComentarios(){
            Firebase.firestore().collection('avaliacao_geral').get().then(
                query => {
                    query.forEach(doc => {
                        console.log(doc.data())
                        this.comentarios.push(doc.data())
                    })
                }
            )
        }
    }
}
</script>

<style>

</style>
