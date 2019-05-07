<template>
    <q-page padding>
        <q-alert
            v-if="anonimo"
            color="warning"
            icon="info"
            appear
            :actions="[{ label: 'Esconder', handler: () => { anonimo = false } }]"
            class="q-mb-sm"
        >
            Lembrando que as avaliações são feitas de forma anônima e por tanto não é possível identificar o autor de cada avaliação.
        </q-alert>
        <br>
        <q-alert
            color="info"
            icon="info"
            appear
            class="q-mb-sm"
        >
             A sua avaliação é muito importante para nós. Por favor, colabore para que as próximas edições deste evento possam ser repensadas e aprimoradas, no que você entender necessário, com relação ao seu planejamento, organização e execução!
        </q-alert>
        <br>
        <q-card>
            <q-card-title>Avaliação pontual:</q-card-title> 
            <q-card-main>
               Considerando suas experiências e suas expectativas pessoais, 
            profissionais e acadêmicas com relação aos direitos humanos, 
            atribua uma nota entre 0 a 10, conforme sua percepção, apreciação  e participação: 
            </q-card-main>
            
        </q-card>
        <br>
        <q-card v-if="usuario.palestra1 == true && presente_palestra1 == true && enviada_palestra1 == false && usuario.avaliou_palestra1 != true">
            <q-card-title><strong>Palestra magna</strong></q-card-title>
            <q-card-main>
                <p><strong>Direitos Humanos – da ética natural à ética do compartilhamento  (Profª Drª Maria de Lourdes Jeffery Contini)</strong> </p>
                <q-field>
                    Relevância do conteúdo apresentado:
                    <q-slider 
                        v-model="avaliacao1.relevancia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <q-slider 
                        v-model="avaliacao1.dominio"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <q-slider 
                        v-model="avaliacao1.metodologia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <q-field>
                    <strong> Qualidade dos questionamentos e intervenções do público participante desta Palestra: </strong>
                    <q-slider 
                        v-model="avaliacao1.qualidade_questionamento"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
            </q-card-main>
            <q-card-actions>
                <q-btn color="positive" class="full-width" @click="salvarAvaliacao(avaliacao1, 'avaliacao1')">Enviar Avaliação</q-btn>
            </q-card-actions>
        </q-card>
        <br>
        <q-card v-if="usuario.palestra2 == true && presente_palestra2 == true && enviada_palestra2 == false && usuario.avaliou_palestra2 != true">
            <q-card-title><strong> Painel 1: Direitos Humanos, Educação e Antropologia Social</strong></q-card-title>
            <q-card-main>
                <strong>
                    Direitos Humanos de crianças em pesquisa e extensão realizados em escolas públicas de Campo Grande/MS  (Profª Drª Constantina Xavier Filha)<br>
                </strong>
                <br>
                <q-field>
                    Relevância do conteúdo apresentado:
                    <q-slider 
                        v-model="painel1.palestra1.relevancia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <q-slider 
                        v-model="painel1.palestra1.dominio"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <q-slider 
                        v-model="painel1.palestra1.metodologia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <strong>
                    Profissão: perigo – O fazer antropológico em tempo de ataque aos direitos humanos (Prof. Dr. Guilherme Rodrigues Passamani)
                </strong>
                <br>
                <br>
                <q-field>
                    Relevância do conteúdo apresentado:
                    <q-slider 
                        v-model="painel1.palestra2.relevancia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <q-slider 
                        v-model="painel1.palestra2.dominio"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <q-slider 
                        v-model="painel1.palestra2.metodologia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <strong>
                    A transversalidade dos Direitos Humanos com a Assistência Social (Prof. Me. Leandro Henrique Araújo Leite)
                </strong>
                <br>
                <br>
                <q-field>
                    Relevância do conteúdo apresentado:
                    <q-slider 
                        v-model="painel1.palestra3.relevancia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <q-slider 
                        v-model="painel1.palestra3.dominio"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <q-slider 
                        v-model="painel1.palestra3.metodologia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <q-field>
                    <strong> Qualidade dos questionamentos e intervenções do público participante do Painel 1: </strong>
                    <q-slider 
                        v-model="painel1.qualidade_questionamento"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
            </q-card-main>
            <q-card-actions>
                <q-btn color="positive" class="full-width" @click="salvarAvaliacao(painel1, 'painel1')">Enviar Avaliação</q-btn>
            </q-card-actions>
        </q-card>
        <br>
        <q-card v-if="usuario.palestra3 == true && presente_palestra3 == true && enviada_palestra3 == false && usuario.avaliou_palestra3 != true">
            <q-card-title><strong> Painel 2: Direitos Humanos, Psicologia e Comunicação</strong></q-card-title>
            <q-card-main>
                <strong>
                    Direitos humanos e solidariedade intergeracional no cenário de crise ambiental global (Profª Drª Lívia Gaigher Bósio Campello)<br>
                </strong>
                <br>
                <q-field>
                    Relevância do conteúdo apresentado:
                    <q-slider 
                        v-model="painel2.palestra1.relevancia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <q-slider 
                        v-model="painel2.palestra1.dominio"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <q-slider 
                        v-model="painel2.palestra1.metodologia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <strong>
                    Psicologia, formação e direitos humanos: desafios contemporâneos (Profª Ma. Sandra Maria Francisco de Amorim)
                </strong>
                <br>
                <br>
                <q-field>
                    Relevância do conteúdo apresentado:
                    <q-slider 
                        v-model="painel2.palestra2.relevancia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <q-slider 
                        v-model="painel2.palestra2.dominio"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <q-slider 
                        v-model="painel2.palestra2.metodologia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <strong>
                    Entre a humanização e a estigmatização – os desafios da cobertura jornalística sobre direitos humanos (Ma. Lynara Ojeda de Souza)
                </strong>
                <br>
                <br>
                <q-field>
                    Relevância do conteúdo apresentado:
                    <q-slider 
                        v-model="painel2.palestra3.relevancia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <q-slider 
                        v-model="painel2.palestra3.dominio"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <q-slider 
                        v-model="painel2.palestra3.metodologia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <strong>
                    O empoderamento como estratégia de sobrevivência: A visão dos Direitos Humanos (Profª Drª Rosemeire Lopes da Silva Farias)
                </strong>
                <br>
                <br>
                <q-field>
                    Relevância do conteúdo apresentado:
                    <q-slider 
                        v-model="painel2.palestra4.relevancia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Domínio técnico sobre o assunto tratado (embasamento teórico):
                    <q-slider 
                        v-model="painel2.palestra4.dominio"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <br>
                <q-field>
                    Metodologia utilizada para a apresentação do conteúdo:
                    <q-slider 
                        v-model="painel2.palestra4.metodologia"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
                <q-field>
                    <strong> Qualidade dos questionamentos e intervenções do público participante do Painel 2: </strong>
                    <q-slider 
                        v-model="painel2.qualidade_questionamento"
                        :min="0" 
                        :max="10" 
                        :step="1" 
                        label-always 
                        markers
                        snap 
                        color="blue"/>
                </q-field>
            </q-card-main>
            <q-card-actions>
                <q-btn color="positive" class="full-width" @click="salvarAvaliacao(painel2, 'painel2')">Enviar Avaliação</q-btn>
            </q-card-actions>
        </q-card>
        <br>
        <div v-if="enviada_geral == false && usuario.avaliou_geral != true">
            <q-card v-if="presente_palestra1 == true || presente_palestra2 == true || presente_palestra3 == true">
                <q-card-title>
                    <strong>Avaliação geral: </strong>
                    considerando suas experiências e suas expectativas pessoais, profissionais e acadêmicas com relação ao tema dos direitos humanos, apresente-nos seus comentários e sugestões:
                </q-card-title>
                <q-card-main>
                    <q-field>
                        Aspectos Positivos do IV Colóquio Estadual de Direitos Humanos:
                        <q-input
                            v-model="avaliacao_geral.questao1"
                            type="textarea"
                            float-label="Texto Livre"
                        />
                    </q-field>
                    <br>
                    <q-field>
                        Aspectos a serem melhorados para as próximas edições do Colóquio Estadual de Direitos Humanos:
                        <q-input
                            v-model="avaliacao_geral.questao2"
                            type="textarea"
                            float-label="Texto Livre"
                        />
                    </q-field>
                    <br>
                    <q-field>
                        Tema(s) que poderia(m) ser abordado(s) e/ou palestrante(s) que poderiam ser convidados nas próximas edições:
                        <q-input
                            v-model="avaliacao_geral.questao3"
                            type="textarea"
                            float-label="Texto Livre"
                        />
                    </q-field>
                </q-card-main>
                <q-card-actions>
                    <q-btn color="positive" class="full-width" @click="salvarAvaliacao(avaliacao_geral, 'avaliacao_geral')">Enviar Avaliação</q-btn>
                </q-card-actions>
            </q-card>
        </div>
    </q-page>
</template>

<script>
import Firebase from 'firebase'
import {Notify} from 'quasar'

export default {    
    data() {
        return {
            anonimo: true,
            doc_id : '',
            usuario:'',
            email: this.$store.state.auth.user.email,
            avaliacao1:{
                email: this.$store.state.auth.user.email
            },
            painel1:{
                palestra1: {},
                palestra2: {},
                palestra3: {},
                email: this.$store.state.auth.user.email
            },
            painel2:{
                palestra1: {},
                palestra2: {},
                palestra3: {},
                palestra4: {},
                email: this.$store.state.auth.user.email
            },
            avaliacao_geral:{
                email: this.$store.state.auth.user.email
            },
            presente_palestra1 : false,
            presente_palestra2 : false,
            presente_palestra3 : false,
            enviada_palestra1: false,
            enviada_palestra2: false,
            enviada_palestra3: false,
            enviada_geral: false
        }
    },
    mounted(){
        this.pegarPalestras()
        this.pegarPresenca('palestra1')
        this.pegarPresenca('palestra2')
        this.pegarPresenca('palestra3')
    },
    methods:{
        pegarPalestras() {
            Firebase.firestore().collection('usuarios').where('email_pessoal', '==', this.email).get().then(
                query => {
                    query.forEach(doc => {
                        this.usuario = doc.data()
                        this.doc_id = doc.id
                    })
                }
            )
        },
        pegarPresenca(palestra){
            Firebase.firestore().collection(palestra).where('email', '==', this.email).get().then(
                query => {
                    query.forEach(doc => {
                        if(palestra === 'palestra1'){
                            this.presente_palestra1 = true
                        } 
                        if(palestra == 'palestra2'){
                            this.presente_palestra2 = true
                        }
                        if(palestra === 'palestra3'){
                            this.presente_palestra3 = true
                        }
                    })
                }
            )
        },
        exibeAlerta(){
            Notify.create({
                color: "positive",
                position: "bottom",
                message: "Avaliação enviada com sucesso",
                icon: "thumb_up",
                timeout: 2000
            })
        },
        atualizaUsuario(banco){
            if(banco === 'avaliacao1'){
                let collection = 
                Firebase
                    .firestore()
                    .collection("usuarios")
                    .doc(this.doc_id)
                collection.update({avaliou_palestra1 : true})
                this.enviada_palestra1 = true
            }
            if(banco === 'painel1'){
                let collection = 
                Firebase
                    .firestore()
                    .collection("usuarios")
                    .doc(this.doc_id)
                collection.update({avaliou_palestra2 : true})
                this.enviada_palestra2 = true
            }
            if(banco === 'painel2'){
                let collection = 
                Firebase
                    .firestore()
                    .collection("usuarios")
                    .doc(this.doc_id)
                collection.update({avaliou_palestra3 : true})
                this.enviada_palestra3 = true
            }
            if(banco === 'avaliacao_geral'){
                let collection = 
                Firebase
                    .firestore()
                    .collection("usuarios")
                    .doc(this.doc_id)
                collection.update({avaliou_geral : true})
                this.enviada_geral = true
            }
        },
        salvarAvaliacao(avaliacao, banco){
            console.log(avaliacao)
            console.log(banco)
            Firebase.firestore().collection(banco).add(avaliacao) 
            this.exibeAlerta()
            
            this.atualizaUsuario(banco)
        }
    }

}
</script>

<style>

</style>
