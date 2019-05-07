<template>
    <q-page padding>
        <q-card>
            <q-card-title>
                Usuários
            </q-card-title>
            <q-card-main>
                <q-btn color="positive" class="full-width" @click="baixarUsuarios()">Exportar</q-btn>
                <br>
                <br>
                <download-csv
                    v-if="baixar == true"
                    class="q-btn"
                    :data   = "usuarios">
                    Baixar Csv
                </download-csv>
            </q-card-main>
        </q-card>
    </q-page>
</template>

<script>
import Firebase from 'firebase'
import JsonCSV from 'vue-json-csv'

export default {
    components:{
        downloadCsv: JsonCSV
    },
    data(){
        return{
            usuarios: [],
            baixar: false
        }
    },
    methods:{
        baixarUsuarios(){
            this.usuarios = []
            Firebase.firestore().collection('usuarios').orderBy('nome_completo').get().then(
                query => {
                    query.forEach( doc => {
                        console.log(doc.data())
                        this.usuarios.push(doc.data())
                    } )
                }
            )
            this.baixar = true
        }
    }
}
</script>

<style>

</style>
