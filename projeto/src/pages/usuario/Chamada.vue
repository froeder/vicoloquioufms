<template>
    <q-page padding>
        <q-card>
            <q-card-title>Registrar Presença</q-card-title>
            <q-card-main>
                <q-field v-if="usuario.palestra1">
                    Palestra Magna
                    <q-input v-model="codigo_palestra1" placeholder="Digite o código"></q-input>
                    <br>
                    <q-btn color="positive" class="full-width" @click="registraPresenca(codigo_palestra1, 'palestra1')">Registrar</q-btn>
                </q-field>
                <br>
                <q-field v-if="usuario.palestra2">
                    Painel 1
                    <q-input v-model="codigo_palestra2" placeholder="Digite o código"></q-input>
                    <br>
                    <q-btn color="positive" class="full-width" @click="registraPresenca(codigo_palestra2, 'palestra2')">Registrar</q-btn>
                </q-field>
                <br>
                <q-field v-if="usuario.palestra3">
                    Painel 2
                    <q-input v-model="codigo_palestra3" placeholder="Digite o código"></q-input>
                    <br>
                    <q-btn color="positive" class="full-width" @click="registraPresenca(codigo_palestra3, 'palestra3')">Registrar</q-btn>
                </q-field>
            </q-card-main>
        </q-card>
    </q-page>
</template>

<script>
import Firebase from 'firebase'
import { Notify } from "quasar"

export default {
    data(){
        return {
            email: this.$store.state.auth.user.email,
            usuario: {},
            codigo_palestra1 :'',
            codigo_palestra2 :'',
            codigo_palestra3 :'',
            codigos: {},
            doc_id: ''

        }
    },
    mounted(){
        this.pegarPalestras()
        this.pegaCodigos()
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
        pegaCodigos(){
            Firebase.firestore().collection('chamada').get().then(
                query => {
                    query.forEach(doc => {
                        this.codigos =  doc.data()
                    })
                }
            )
             
        },
        validaCodigo(codigo, palestra){
            if(palestra === 'palestra1'){
                if(codigo === this.codigos.palestra1){
                    let collection = 
                        Firebase
                            .firestore()
                            .collection("usuarios")
                            .doc(this.doc_id)
                        collection.update({presenca_palestra1 : true})
                    return true
                } else return false
            }
            if(palestra === 'palestra2'){
                if(codigo === this.codigos.palestra2){
                    let collection = 
                        Firebase
                            .firestore()
                            .collection("usuarios")
                            .doc(this.doc_id)
                        collection.update({presenca_palestra2 : true})
                    return true
                } else return false
            }
            if(palestra === 'palestra3'){
                if(codigo === this.codigos.palestra3){
                    let collection = 
                        Firebase
                            .firestore()
                            .collection("usuarios")
                            .doc(this.doc_id)
                        collection.update({presenca_palestra3 : true})
                    return true
                } else return false
            }

        },
        registraPresenca(codigo, palestra){
            if(this.validaCodigo(codigo, palestra)){
                Notify.create({
                    color: "positive",
                    position: "bottom",
                    message: "Presença Registrada",
                    icon: "thumb_up",
                    timeout: 2000
                })
            } else {
                Notify.create({
                    color: "negative",
                    position: "bottom",
                    message: "Erro ao registrar",
                    icon: "error",
                    timeout: 2000
                })
            }
            
        }
    }
}
</script>

<style>

</style>
