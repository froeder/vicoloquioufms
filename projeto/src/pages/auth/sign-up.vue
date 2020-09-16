<template>
  <q-page padding>
    <q-card v-if="qtde_inscricao <= 300" color="white">
      <form @submit.prevent="criarConta()">
        <q-stepper color="secondary" ref="stepper" alternative-labels>
          <q-step default name="first" title="Informações Básicas">
            <div class="gutter-xs">
              <q-field class="q-mt-md col-xs-12">
                <q-input
                  float-label="Nome Completo sem abreviações"
                  v-model="credenciais.nome_completo"
                  type="text"
                />
              </q-field>

              <q-field class="q-mt-md col-xs-12">
                Data Nascimento
                <!-- <q-input
                float-label="Nascimento"
                v-model="credenciais.nascimento"
                type="text"
              /> -->
                <the-mask
                  v-model="credenciais.nascimento"
                  :mask="['##/##/####', '##/##/####']"
                />
                <!-- <q-datetime v-model="credenciais.nascimento" type="date" /> -->
              </q-field>
              <q-field class="q-mt-md col-xs-12">
                Sexo
                <br />
                <q-select v-model="credenciais.sexo" :options="opcoes_sexo" />
              </q-field>
            </div>

            <!-- Navigation for this step at the end of QStep-->
            <q-stepper-navigation>
              <q-btn color="secondary" @click="$refs.stepper.next()"
                >Próximo <q-icon name="arrow_forward"></q-icon
              ></q-btn>
            </q-stepper-navigation>
          </q-step>

          <q-step name="Endereço" title="Endereço">
            <div class="gutter-xs">
              <p>Endereço Residêncial</p>
              <q-field class="q-mt-md col-xs-12">
                <q-input
                  float-label="Rua/Avenida/etc"
                  v-model="credenciais.rua_residencial"
                  type="text"
                />
              </q-field>
              <q-field class="q-mt-md col-xs-12">
                <q-input
                  float-label="Bairro"
                  v-model="credenciais.bairro_residencial"
                  type="text"
                />
              </q-field>
              <q-field class="q-mt-md col-xs-12">
                <q-input
                  float-label="Município"
                  v-model="credenciais.municipio_residencial"
                  type="text"
                />
              </q-field>
              <q-field class="q-mt-md col-xs-12">
                <q-input
                  float-label="Estado"
                  v-model="credenciais.estado_residencial"
                  type="text"
                />
              </q-field>
            </div>
            <q-stepper-navigation>
              <q-btn color="secondary" @click="$refs.stepper.next()"
                >Próximo <q-icon name="arrow_forward"></q-icon
              ></q-btn>
              <q-btn color="secondary" flat @click="$refs.stepper.previous()"
                >Voltar <q-icon name="arrow_back"></q-icon
              ></q-btn>
            </q-stepper-navigation>
          </q-step>
          <q-step name="Contato" title="Contato">
            <q-field class="q-mt-md col-xs-12">
              Telefone: <br />
              <q-input
                float-label="Telefone"
                v-model="credenciais.telefone"
                type="text"
              />
            </q-field>
            <q-field class="q-mt-md col-xs-12">
              <q-input
                float-label="E-mail pessoal"
                v-model="credenciais.email_pessoal"
                type="email"
              />
              <small>(Será usado para fazer login)</small>
            </q-field>
            <br />
            <br />
            <br />
            Senha para usar o sistema:
            <q-field class="q-mt-lg col-xs-12">
              <q-input
                float-label="Senha"
                v-model="credenciais.password"
                type="password"
                autocomplete="current-password"
              />
            </q-field>
            <q-field class="q-mt-lg col-xs-12">
              <q-input
                float-label="Redigite a Senha"
                v-model="credenciais.confirme_password"
                type="password"
                autocomplete="current-password"
              />
            </q-field>
            <q-stepper-navigation>
              <q-btn color="secondary" @click="$refs.stepper.next()"
                >Próximo <q-icon name="arrow_forward"></q-icon
              ></q-btn>
              <q-btn color="secondary" flat @click="$refs.stepper.previous()"
                >Voltar <q-icon name="arrow_back"></q-icon
              ></q-btn>
            </q-stepper-navigation>
          </q-step>
          <q-step name="fifth" title="Educação">
            <q-field class="q-mt-md col-xs-12">
              Escolaridade: <br />
              <q-select
                v-model="credenciais.escolaridade"
                :options="opcoes_escolaridade"
              />
            </q-field>
            <br />
            <br />

            <q-stepper-navigation>
              <q-btn label="Salvar" color="positive" type="submit" icon="save">
                <q-spinner v-if="loading" />
              </q-btn>
              <q-btn
                color="info"
                flat
                @click="$refs.stepper.previous()"
                label="Voltar"
              >
                <q-icon name="arrow_back"></q-icon>
              </q-btn>
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
        <br />
        <div style="padding: 1em">
          <q-btn to="/" class="full-width" color="primary"
            ><q-icon name="arrow_back"></q-icon> Voltar</q-btn
          >
        </div>
        <br />
        <br />
      </form>
    </q-card>
    <q-card v-if="qtde_inscricao >= 300">
      <q-card-main>
        <h1>Inscrições encerradas. Quantidade de vagas</h1>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
import { uid } from "quasar";
import { Notify } from "quasar";
import { TheMask } from "vue-the-mask";

export default {
  name: "criarConta",
  components: { TheMask },
  data() {
    return {
      minoria: [],
      quantidade_inscricoes: 0,
      qtde_inscricao: 0,
      credenciais: {},
      loading: true,
      termo: false,
      opcoes_sexo: [
        {
          label: "Masculino",
          value: "Masculino",
        },
        {
          label: "Feminino",
          value: "Feminino",
        },
      ],
      opcoes_escolaridade: [
        {
          label: "Ensino Fundamental Incompleto",
          value: "Ensino Fundamental Incompleto",
        },
        {
          label: "Ensino Fundamental Completo",
          value: "Ensino Fundamental Completo",
        },
        {
          label: "Ensino Médio Incompleto",
          value: "Ensino Médio Incompleto",
        },
        {
          label: "Ensino Médio Completo",
          value: "Ensino Médio Completo",
        },
        {
          label: "Ensino Superior Incompleto",
          value: "Ensino Superior Incompleto",
        },
        {
          label: "Ensino Superior Completo",
          value: "Ensino Superior Completo",
        },
        {
          label: "Especialização Cursando",
          value: "Especialização Cursando",
        },
        {
          label: "Especialização Concluído",
          value: "Especialização Concluído",
        },
        {
          label: "Mestrado Cursando",
          value: "Mestrado Cursando",
        },
        {
          label: "Mestrado Concluído",
          value: "Mestrado Concluído",
        },
        {
          label: "Doutorado Cursando",
          value: "Doutorado Cursando",
        },
        {
          label: "Doutorado Concluído",
          value: "Doutorado Concluído",
        },
      ],
    };
  },
  created() {
    this.loading = false;
  },
  mounted() {
    this.contaUsuarios();
  },
  methods: {
    geraID() {
      return uid();
    },
    atribuiMetadados(metadado) {
      this.crenenciais.id = this.geraID();
      this.credenciais.data_criacao = metadado.creationTime;
      this.credenciais.ultimo_login = metadado.lastSignInTime;
      this.credenciais.papel = "user";
    },
    contaUsuarios() {
      this.$firebase
        .firestore()
        .collection("usuarios")
        .get()
        .then((query) => {
          query.forEach((doc) => {
            this.qtde_inscricao++;
          });
        });
    },
    contaCampos(usuario) {
      this.loading = false;
      // if (Object.keys(usuario).length >= 22) return true;
      if (true) return true;
      else return false;
    },
    converterCase() {
      this.credenciais.nome_completo = this.credenciais.nome_completo.toUpperCase();
      this.credenciais.email_pessoal = this.credenciais.email_pessoal.toLowerCase();
    },
    salvar(usuario) {
      this.converterCase();
      let collection = this.$firebase.firestore().collection("usuarios");
      collection.add(this.credenciais);
    },
    exibeAlerta(message) {
      if (message === "Password should be at least 6 characters")
        this.$q.notify("A senha precisa ter mais que 6 caracteres!");
      else this.$q.notify(message);
      this.loading = false;
    },
    comparaSenhas(credencial) {
      this.loading = false;
      if (credencial.password === credencial.confirme_password) return true;
    },
    validaQuantidade() {
      this.contaUsuarios();
      if (this.quantidade_inscricoes <= 300) return true;
      else return false;
    },
    criarConta() {
      console.log(this.credenciais);
      this.loading = true;
      let compara = this.comparaSenhas(this.credenciais);
      if (compara) {
        if (this.contaCampos(this.credenciais)) {
          if (this.validaQuantidade()) {
            this.$firebase
              .auth()
              .createUserWithEmailAndPassword(
                this.credenciais.email_pessoal,
                this.credenciais.password
              )
              .then((user) => {
                let usuarios = user.user;
                this.salvar(usuarios);

                Notify.create({
                  color: "positive",
                  position: "bottom",
                  message: "Usuário cadastrado",
                  icon: "info",
                  timeout: 1500,
                });
              })
              .catch((error) => {
                let message = error.message;
                this.exibeAlerta(message);
                console.log(message);
              });
          } else {
            this.$q.notify(
              "Inscrições encerradas. Envie um e-mail para solicitando a abertura de novas vagas."
            );
          }
        } else {
          this.$q.notify("Faltam Campos");
        }
      } else {
        this.exibeAlerta(message);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
.card-sign-in {
  width: 80%;
}
</style>
