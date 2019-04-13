<template>
  <q-page padding class="flex flex-center">
    <h2 style="font-family:impact ;  text-shadow: -2px 2px 3px white">IV Colóquio Estadual dos Direitos Humanos</h2>
    <q-card color="white">
      <q-card-title>Entre na sua conta ou cadastre-se</q-card-title>
        <q-card-main>
          <q-field>
            <q-input float-label="E-mail" v-model="user.email" type="email" autocomplete="current-password" />
          </q-field>
          <q-field>
            <q-input float-label="Senha" v-model="user.password" type="password" />
          </q-field>
          <q-layout class="col-xs-12">
            <q-btn color="green" class="full-width" @click="login(user)" style="margin-left:1em" label="Logar"><q-icon name="lock"></q-icon> </q-btn>
            <!-- <q-btn color="green" class="full-width" v-if="user.email==='froeder3@gmail.com'"  @click="loginAdmin(user)" style="margin-left:1em" label="Login Admin"></q-btn> -->
            <q-btn class="full-width" label="Cadastrar" color="info" @click="cadastrar()">
              <q-spinner v-if="loading"></q-spinner><q-icon name="add_circle"></q-icon>
            </q-btn>
          </q-layout>
        </q-card-main>
    </q-card>

  </q-page>
</template>

<script>
export default {
  name: "PageSignIn",
  data() {
    return {
      user: {},
      loading: false
    };
  },
  created() {},
  methods: {
    cadastrar() {
      this.$router.push("sign-up");
      console.log("clicou");
    },
    login(user) {
      console.log(user);
      user.email === "froeder3@gmail.com" ||
      user.email === "eramirezmeza@gmail.com"
        ? this.loginAdmin(user)
        : this.loginUser(user);
    },
    signIn() {
      this.loading = true;
      let credentials = {
        email: this.user.email,
        password: this.user.password
      };
      this.$store
        .dispatch("auth/signIn", credentials)
        .then(user => {
          this.$router.replace({
            name: "dashboard"
          });
        })
        .catch(error => {
          this.loading = false;
          this.$q.notify("Invalid Login!");
          console.error(`Not signed in: ${error.message}`);
        });
    },
    loginUser(credentials) {
      this.$store
        .dispatch("auth/logIn", credentials)
        .then(user => {
          this.user.send = false;
          this.setaUserBd();
          this.$router.replace({ name: "dashboard" });
        })
        .catch(error => {
          this.$q.notify("Invalido Login!");
          console.error(`Not signed in: ${error.message}`);
        });
    },
    loginAdmin(credentials) {
      this.$store
        .dispatch("auth/logIn", credentials)
        .then(user => {
          this.$router.replace("admin/admin");
        })
        .catch(error => {
          this.$q.notify("Invalid Login!");
          console.error(`Not signed in: ${error.message}`);
        });
    },
    confere(credentials) {
      if (
        credentials.email === "froeder3@gmail.com" ||
        credentials.email === "marcos@catalizr.com"
      ) {
        this.loginAdmin(credentials);
      } else {
        this.login(credentials);
      }
    },
    setaUserBd() {
      var userSend = this.$firebase.database().ref("/usersendsingle");
      userSend.push({
        usuarios: this.user
      });

      var userSendGroup = this.$firebase.database().ref("/usersendgroup");
      userSendGroup.push({
        usuarios: this.user
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.card-sign-in {
  width: 80%;
}

.q-field {
  border-radius: 5px;
}

.q-btn {
  margin-top: 1em;
  border-radius: 5px;
}
</style>
