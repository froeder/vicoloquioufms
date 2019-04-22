<template>
    <q-page padding>
        <q-card>
            <q-card-title>
                Usuários
            </q-card-title>
            <q-card-main>
                <q-btn color="positive" class="full-width" @click="baixarUsuarios()">Exportar</q-btn>
            </q-card-main>
        </q-card>
    </q-page>
</template>

<script>
import Firebase from 'firebase'

export default {
    data(){
        return{
            usuarios: []
        }
    },
    methods:{

        converterParaCsv(usuarios){
            console.log(usuarios)
        },
        baixarUsuarios(){
            Firebase.firestore().collection('usuarios').get().then(
                query => {
                    query.forEach( doc => {
                        this.usuarios.push(doc.data())
                    } )
                }
            )
            this.converterParaCsv(this.usuarios)
        }
    }
}
</script>

<style>

</style>
