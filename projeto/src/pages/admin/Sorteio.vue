<template>
    <q-page padding>
        <q-card>
            <q-card-title>
                Sorteio
            </q-card-title>
            <q-card-main>
                <q-btn color="positive" class="full-width" @click="sortear(usuarios)">Sortear</q-btn>
                <br>
                <br>
                <p>{{vencedor.nome_completo}}</p>
            </q-card-main>
        </q-card>
    </q-page>
</template>

<script>
import Firebase from 'firebase'

export default {
    data(){
        return {
            usuarios: [],
            vencedor: {}
        }
    },
    mounted(){
        this.baixarUsuarios()
    },
    methods:{
        baixarUsuarios(){
            Firebase.firestore().collection('usuarios').get().then(
                query => {
                    query.forEach( doc => {
                        this.usuarios.push(doc.data())
                    })
                }
            )
        },
        sortear(usuarios){
            let tamanho = usuarios.length + 1
            let numero = Math.floor(Math.random() * tamanho) 

            this.vencedor = usuarios[numero]
        }
    }
}
</script>

<style>

</style>
