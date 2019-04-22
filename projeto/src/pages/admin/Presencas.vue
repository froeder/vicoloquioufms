<template>
    <q-page padding>
        <q-table
            title="Palestra Magna"
            separator="cell"
            :data="palestra1"
            :columns="columns"
            row-key="nome"
            style="margin-top:1em"
            class="q-card"
            rows-per-page-label="Exibir:"
            loading-label="Carregando"
            no-data-label="Carregando"
            color="secondary"
            :pagination.sync="paginationControl"
        />
        <q-chip color="info"> Inscritos: {{qtde_inscritos_p1}} Presentes: {{qtde_presentes_p1}} </q-chip>
           
        <q-table
            title="Painel 1"
            separator="cell"
            :data="palestra2"
            :columns="columns"
            row-key="nome"
            style="margin-top:1em"
            class="q-card"
            rows-per-page-label="Exibir:"
            loading-label="Carregando"
            no-data-label="Carregando"
            color="secondary"
            :pagination.sync="paginationControl"
        />
        <q-chip color="info"> Inscritos: {{qtde_inscritos_p2}} Presentes: {{qtde_presentes_p2}}</q-chip>

        <q-table
            title="Painel 2"
            separator="cell"
            :data="palestra3"
            :columns="columns"
            row-key="nome"
            style="margin-top:1em"
            class="q-card"
            rows-per-page-label="Exibir:"
            loading-label="Carregando"
            no-data-label="Carregando"
            color="secondary"
            :pagination.sync="paginationControl"
        />
        <q-chip color="info">  Inscritos: {{qtde_inscritos_p3}} Presentes: {{qtde_presentes_p3}}</q-chip>
    </q-page>
</template>

<script>
import Firebase from 'firebase'

export default {
    data(){
        return {
            
            palestra1    : [],
            palestra2   : [],
            palestra3   : [],
            qtde_inscritos_p1 : 0,
            qtde_inscritos_p2 : 0,
            qtde_inscritos_p3 : 0,
            qtde_presentes_p1: 0,
            qtde_presentes_p2: 0,
            qtde_presentes_p3: 0,
            quantidade_inscricoes: 0,
            paginationControl : { rowsPerPage: 20, page: 1 },
            columns: [
            {
                name: 'nome',
                required: true,
                label: 'Nome',
                align: 'left',
                field: 'nome',
                sortable: true
            },
            {
                name: 'email',
                required: true,
                label: 'E-mail',
                align: 'left',
                field: 'email',
                sortable: true
            },
            {
                name: 'cpf',
                required: true,
                label: 'CPF',
                align: 'left',
                field: 'cpf',
                sortable: true
          }
        ],
        
        }
    },
    mounted(){
        this.pegaPresencas('palestra1')
        this.pegaPresencas('palestra2')
        this.pegaPresencas('palestra3')
        this.contaInscritos()
    },
    methods:{
        pegaPresencas(palestra){
            Firebase.firestore().collection(palestra).get().then(
                query => {
                    query.forEach(doc => {
                        let dado = doc.data()
                        if(palestra === 'palestra1'){
                            this.qtde_presentes_p1++
                            this.palestra1.push({
                                nome: dado.nome,
                                email: dado.email,
                                cpf: dado.cpf
                            })
                        } else if(palestra === 'palestra2'){
                                this.qtde_presentes_p2++
                                this.palestra2.push({
                                    nome: dado.nome,
                                    email: dado.email,
                                    cpf: dado.cpf
                                })
                            }
                        else if(palestra === 'palestra3'){
                            this.qtde_presentes_p3++
                            this.palestra3.push({
                                nome: dado.nome,
                                email: dado.email,
                                cpf: dado.cpf
                            })
                        }
                    })
                }
            )
        },
        contaInscritos(){
            Firebase.firestore().collection('usuarios').get().then(
                query => {
                    query.forEach(doc => {
                        if(doc.data().palestra1 === true){
                            this.qtde_inscritos_p1++
                        }
                        if(doc.data().palestra2 === true){
                            this.qtde_inscritos_p2++
                        }
                        if(doc.data().palestra3 === true){
                            this.qtde_inscritos_p3++
                        }
                    })
                }
            )
        }
    }
}
</script>

<style>

</style>
