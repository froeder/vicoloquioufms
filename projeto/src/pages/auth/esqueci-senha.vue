<template>
    <q-page class="flex flex-center">
        <q-card style="background-color: white ; color:black">
            <q-card-title>Recuperar senha</q-card-title>
            <q-card-main>
                Envie um e-mail de recuperação de senha.
                <q-field>
                    <q-input v-model="email" float-label="E-mail"></q-input>
                </q-field>
                <br>
                <q-btn 
                    color="positive" 
                    icon="send"
                    @click.native="enviarEmailRecuperacao(email)"
                    
                >
                    Enviar
                </q-btn>
                <q-btn 
                    style="margin-left:1em" 
                    color="info" 
                    icon="arrow_back_ios"
                    @click.native="$router.replace('sign-in')"
                >
                    Voltar
                </q-btn>
            </q-card-main>
        </q-card>
    </q-page>
</template>

<script>
import firebase from 'firebase'
import {Notify} from 'quasar'

export default {
    data(){
        return {
            email : ''
        }
    } ,
    methods:{
        enviarEmailRecuperacao(email){
            var auth = firebase.auth()
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
