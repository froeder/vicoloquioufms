<template>
  <q-page class="flex flex-center">

    <q-card
      class="card-sign-in q-pa-md"
      inline
      color="white"
    >
      <q-card-title
        class="text-dark text-center"
      >
        Entre na suanta
      </q-card-title>

      <form @submit.prevent="signIn()">
        <q-card-main>
          <q-field
            icon="email"
            icon-color="light"
            class="q-mt-md"
          >
            <q-input
              placeholder="Email"
              v-model="formulario.email"
              type="email"
              autocomplete="username"
            />
          </q-field>

          <q-field
            icon="lock"
            icon-color="light"
            class="q-mt-lg"
          >
            <q-input
              placeholder="Senha"
              v-model="formulario.password"
              type="password"
              autocomplete="current-password"
            />
          </q-field>
        </q-card-main>

        <q-card-actions
          align="center"
        >
          <div class="row gutter-xs">
            <div class="col-xs-12 col-md-12">
              <q-btn
                class="full-width"
                label="Login"
                color="positive"
                size="large"
                type="submit"
                icon="fingerprint"
              >
                <q-spinner v-if="loading"/>
              </q-btn>
            </div>
            <div class="col-xs-12 col-md-12">
              <q-btn
              class="full-width"
                label="Criar Conta"
                color="info"
                size="large"
                icon="person_add"
                @click.native="$router.replace('criar-conta')"
              >
              </q-btn>
            </div>
            <div class="col-xs-12 col-md-12">
              <q-btn
              class="full-width"
                label="Esqueci Senha"
                color="info"
                size="large"
                icon="help"
                @click.native="$router.replace('esqueci-senha')"
              >
              </q-btn>
            </div>
          </div>
        </q-card-actions>
      </form>

    </q-card>

  </q-page>
</template>

<script>
import Firebase from "firebase";
import { LocalStorage, SessionStorage } from "quasar";

export default {
  name: "PageSignIn",
  data() {
    return {
      formulario: {
        email: "",
        password: ""
      },
      loading: true,
      versao_banco: ""
    };
  },
  created() {
    this.loading = false;
  },
  methods: {
    tipoErro(message) {
      console.log(message)
      if (
        message ===
        "The password is invalid or the user does not have a password."
      )
        this.$q.notify("Login Inválido!");
      if (
        message ===
        "There is no user record corresponding to this identifier. The user may have been deleted."
      )
        this.$q.notify("E-mail não cadastrado!");
      if (message === "The email address is badly formatted.")
        this.$q.notify("E-mail não está no formato correto!")
      if (
        message ===
        "A network error (such as timeout, interrupted connection or unreachable host) has occurred."
      )
      this.$q.notify("Você precisa estar conectado à internet");
      console.error(`Not signed in: ${message}`);
    },
    confereUsuario(credentials) {
      Firebase.firestore()
        .collection("usuarios")
        .where("email", "==", credentials.email)
        .get()
        .then(querySnapshop => {
          querySnapshop.forEach(doc => {
            let usuario = doc.data();

            let user = {};
            user.usuario = doc.data();
            user.id = doc.id;

            let usuarioB = "usuario";
            LocalStorage.set(usuarioB, user);
            
                let nome = "usuario_nome";
                LocalStorage.set(nome, usuario.nome);

                let email = "usuario_email";
                LocalStorage.set(email, usuario.email);

                this.$store
                  .dispatch("auth/signIn", credentials)
                  .then(user => {
                    this.loading = false;
                  })
                  .catch(error => {
                    this.loading = false;
                    this.tipoErro(error.message);
                  });
          

          });
        });
    },
    signIn() {
      this.loading = true;
      let credentials = {
        email: this.formulario.email,
        password: this.formulario.password
      };
      this.confereUsuario(credentials);
    }
  }
};
</script>

<style lang="stylus" scoped>
.card-sign-in {
  width: 80%;
}
</style>
