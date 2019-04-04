<template>
  <q-page class="flex flex-center">
    <q-card color="primary">
      <q-stepper color="secondary" ref="stepper" alternative-labels>
        <q-step default name="first" title="Informações Básicas">
          <div class="gutter-xs">
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Nome Completo sem abreviações"
                v-model="credenciais.nome_completo"
                type="text"
              />
            </q-field>
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Naturalidade cidade"
                v-model="credenciais.naturalidade_cidade"
                type="text"
              />
            </q-field>
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Estado"
                v-model="credenciais.naturalidade_estado"
                type="text"
              />
            </q-field>
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Nascimento"
                v-model="credenciais.nascimento"
                type="text"
              />
            </q-field>
           
          </div>

          <!-- Navigation for this step at the end of QStep-->
          <q-stepper-navigation>
            <q-btn color="secondary" @click="$refs.stepper.next()" label="Continue"/>
          </q-stepper-navigation>
        </q-step>

        <q-step name="second" title="Custom channels">
          <div v-for="n in 10">Step 2</div>
          <q-stepper-navigation>
            <q-btn color="secondary" @click="$refs.stepper.next()" label="Next"/>
            <q-btn color="secondary" flat @click="$refs.stepper.previous()" label="Back"/>
          </q-stepper-navigation>
        </q-step>
        <q-step name="third" title="Get code">
          <div v-for="n in 3">Step 3</div>
          <q-stepper-navigation>
            <q-btn color="secondary" @click="$refs.stepper.next()" label="Next"/>
            <q-btn color="secondary" flat @click="$refs.stepper.previous()" label="Back"/>
          </q-stepper-navigation>
        </q-step>
        <q-step name="fifth" disable title="Disabled">
          <div v-for="n in 3">Step 4</div>
          <q-stepper-navigation>
            <q-btn color="secondary" @click="$refs.stepper.next()" label="Next"/>
            <q-btn color="secondary" flat @click="$refs.stepper.previous()" label="Back"/>
          </q-stepper-navigation>
        </q-step>
        <q-step name="fourth" title="Review and Finalize">
          <div v-for="n in 3">Step 5</div>
          <q-stepper-navigation>
            <q-btn color="secondary" @click="$refs.stepper.next()" label="Next"/>
            <q-btn color="secondary" flat @click="$refs.stepper.previous()" label="Back"/>
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
    </q-card>
    <!-- <q-card
      class="card-sign-in q-pa-md"
      inline
      color="white"
    >
      <q-card-title class="text-center" style="color:black">Criar Conta</q-card-title>
      <form @submit.prevent="criarConta()">
        <q-card-main>
          <div class="row gutter-xs">
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Nome"
                v-model="credenciais.nome"
                type="text"
              />
            </q-field>
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Email"
                v-model="credenciais.email"
                type="email"
              />
            </q-field>
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Instituição"
                v-model="credenciais.instituicao"
                type="text"
              />
            </q-field>
            <q-field
              class="q-mt-lg col-xs-12"
            >
              <q-input
                float-label="Senha"
                v-model="credenciais.password"
                type="password"
                autocomplete="current-password"
              />
            </q-field>
            <q-field
              class="q-mt-lg col-xs-12"
            >
              <q-input
                float-label="Redigite a Senha"
                v-model="credenciais.confirme_password"
                type="password"
                autocomplete="current-password"
              />
            </q-field>
          </div>
        </q-card-main>

        <q-card-actions
          align="center"
          class="q-mt-lg"
        >
        <div class="row gutter-xs">
          <div class="col-xs-12 col-md-12">
            <q-btn
              class="full-width"
              label="Salvar"
              color="positive"
              size="large"
              type="submit"
              icon="save"
            >
              <q-spinner v-if="loading"/>
            </q-btn>
          </div>
          <div class="col-xs-12 col-md-12">
            <q-btn
              class="full-width"
              label="Voltar"
              color="info"
              size="large"
              icon="arrow_back_ios"
              @click.native="$router.replace('sign-in')"
            >
            </q-btn>
          </div>

        </div>
        </q-card-actions>
      </form>
    </q-card>-->
  </q-page>
</template>

<script>
import { uid } from "quasar";
import { Notify } from "quasar";

export default {
  name: "criarConta",
  data() {
    return {
      credenciais: {},
      loading: true,
      termo: false
    };
  },
  created() {
    this.loading = false;
  },
  methods: {
    geraID() {
      return uid();
    },
    atribuiMetadados(metadado) {
      this.credenciais.data_criacao = metadado.creationTime;
      this.credenciais.ultimo_login = metadado.lastSignInTime;
      this.credenciais.papel = "user";
    },
    salvaFirestore(usuario) {
      let collection = this.$firebase.firestore().collection("usuarios");
      collection.add(this.credenciais);
    },
    salvaBancos(usuario) {
      this.atribuiMetadados(usuario.metadata);
      this.salvaFirestore(usuario);
    },
    exibeAlerta(message) {
      if (message === "Password should be at least 6 characters")
        this.$q.notify("A senha precisa ter mais que 6 caracteres!");
      else this.$q.notify("As senhas não conferem");
      this.loading = false;
    },
    comparaSenhas(credencial) {
      if (credencial.password === credencial.confirme_password) return true;
    },
    criarConta() {
      this.loading = true;
      let compara = this.comparaSenhas(this.credenciais);
      if (compara) {
        this.$firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.credenciais.email,
            this.credenciais.password
          )
          .then(user => {
            let usuarios = user.user;
            this.salvaBancos(usuarios);

            Notify.create({
              color: "positive",
              position: "bottom",
              message: "Usuário cadastrado",
              icon: "info",
              timeout: 1500
            });
          })
          .catch(error => {
            let message = error.message;
            this.exibeAlerta(message);
          });
      } else {
        this.exibeAlerta(message);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.card-sign-in {
  width: 80%;
}
</style>
