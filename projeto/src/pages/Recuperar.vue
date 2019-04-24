<template>
    <q-page padding>
        <q-card style="background-color:white">
            <q-card-title>Recuperar senha</q-card-title>
            <q-card-main>
                Digite seu e-mail e um link será enviado para criar uma nova senha.
                <q-input style="margin-top:1em" placeholder="E-mail" v-model="email"></q-input>
                <div style="margin-top:1em">
                    <q-btn style="margin-right:1em" color="info" :to="{name : 'signIn'}">Voltar</q-btn>
                    <q-btn color="positive" @click.native="enviarEmailRecuperacao(email)">Enviar</q-btn>
                </div>
            </q-card-main>
        </q-card>
    </q-page>
</template>

<script>
import Firebase from 'firebase'
import {Notify} from 'quasar'

export default {
    data(){
        return{
            email: ''
        }
    },
    methods:{
        enviarEmailRecuperacao(email){
            var auth = Firebase.auth()
            auth.sendPasswordResetEmail(email).then(function() {
                Notify.create({
                    color     : 'positive',
                    position  : 'bottom',
                    message   : 'E-mail de redefinição enviado com sucesso!',
                    icon      : 'info',
                    timeout   : 4000
                })
            }).catch(function(error) {
                Notify.create({
                    color     : 'negative',
                    position  : 'bottom',
                    message   : 'E-mail de redefinição não foi enviado. Verifique os dados e tente novamente!',
                    icon      : 'info',
                    timeout   : 4000
                })
            })
        }
    }
}
</script>

<style>

</style>