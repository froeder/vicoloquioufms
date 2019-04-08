<template>
  <q-page padding >
    <q-card color="white">
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
                float-label="Naturalidade Estado"
                v-model="credenciais.naturalidade_estado"
                type="text"
              />
            </q-field>
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Naturalidade Cidade"
                v-model="credenciais.naturalidade_cidade"
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
            <q-field class="q-mt-md col-xs-12">
              Sexo
              <br>
              <q-select
                v-model="credenciais.sexo"
                :options="opcoes_sexo"
              />
            </q-field>
            <q-field class="q-mt-md col-xs-12">
              Estado Cívil
              <br>
              <q-select
                v-model="credenciais.estado_civil"
                :options="opcoes_estado_civil"
              />
            </q-field>
            <q-field class="q-mt-md col-xs-12">
              CPF: <br>
              <the-mask v-model="credenciais.cpf" :mask="['###.###.###-##']" />
            </q-field>
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Identidade"
                v-model="credenciais.identidade"
                type="text"
              />
            </q-field>
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Emissor"
                v-model="credenciais.emissor"
                type="text"
              />
            </q-field>
            <q-field>
              Você se entende como parte de alguma minoria, no sentido de viver em alguma situação de desvantagem social? Se sim, qual(is)?
              <br>
              <br>
              <q-select
                multiple
                v-model="credenciais.minoria"
                :options="opcoes_minoria"
              />
              <q-input
                float-label="Outro - Especificar"
                v-model="credenciais.minoria"
                type="text"
              />
            </q-field>
          </div>

          <!-- Navigation for this step at the end of QStep-->
          <q-stepper-navigation>
            <q-btn color="secondary" @click="$refs.stepper.next()" label="Continue"/>
          </q-stepper-navigation>
        </q-step>

        <q-step name="Endereço" title="Endereço">
          <div class="gutter-xs">
            <p>Endereço Residêncial</p>
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Rua"
                v-model="credenciais.rua_residencial"
                type="text"
              />
            </q-field>
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Bairro"
                v-model="credenciais.bairro_residencial"
                type="text"
              />
            </q-field>
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Município"
                v-model="credenciais.municipio_residencial"
                type="text"
              />
            </q-field>
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Estado"
                v-model="credenciais.estado_residencial"
                type="text"
              />
            </q-field>
          </div>
          <q-stepper-navigation>
            <q-btn color="secondary" @click="$refs.stepper.next()" label="Próximo"/>
            <q-btn color="secondary" flat @click="$refs.stepper.previous()" label="VOltar"/>
          </q-stepper-navigation>
        </q-step>
        <q-step name="Contato" title="Contato">
          <q-field
            class="q-mt-md col-xs-12"
          >
            Celular: <br>
            <the-mask v-model="credenciais.celular" :mask="['(##) ####-####', '(##) #####-####']" />
          </q-field>
          <q-field
            class="q-mt-md col-xs-12"
          >
            Telefone Residencial: <br>
            <the-mask :mask="['(##) ####-####', '(##) ####-####']" />
          </q-field>
          <q-field
            class="q-mt-md col-xs-12"
          >
            <q-input
              float-label="E-mail pessoal"
              v-model="credenciais.email_pessoal"
              type="email"
            />
            <small>(Será usado para fazer login)</small>
          </q-field>
          <q-stepper-navigation>
            <q-btn color="secondary" @click="$refs.stepper.next()" label="Próximo"/>
            <q-btn color="secondary" flat @click="$refs.stepper.previous()" label="Voltar"/>
          </q-stepper-navigation>
        </q-step>
        <q-step name="fifth" title="Educação">
          <q-field
              class="q-mt-md col-xs-12"
            >
            Escolaridade: <br>
              <q-select
                v-model="credenciais.escolaridade"
                :options="opcoes_escolaridade"
              />
            </q-field>
            <br>
            <br>
            Dentre as categorias abaixo, em qual(is) dela(s) você melhor se enquadra ?
            <br>
            <br>
            Categoria
            <q-select
              v-model="credenciais.categoria"
              :options="opcoes_categoria"
            />
            <span  v-if="credenciais.categoria">Nível</span>
            <q-select
              v-if="credenciais.categoria=='Estudante'"
              v-model="credenciais.nivel"
              :options="opcoes_nivel_estudante"
            />
            <q-select
              v-if="credenciais.categoria=='Professor(a)'"
              v-model="credenciais.nivel"
              :options="opcoes_nivel_professor"
            />
            <q-select
              v-if="credenciais.categoria=='Gestor(a) ou Servidor(a) público(a)'"
              v-model="credenciais.nivel"
              :options="opcoes_nivel_gestor"
            />
            <q-select
              v-if="credenciais.categoria=='Conselheiro(a)'"
              v-model="credenciais.nivel"
              :options="opcoes_nivel_conselheiro"
            />
            <q-select
              v-if="credenciais.categoria=='Iniciativa Privada'"
              v-model="credenciais.nivel"
              :options="opcoes_nivel_iniciativa_privada"
            />
            <span v-if="crendeciais.nivel">
              Espaço
            </span>
            <q-select
              v-if="credenciais.categoria=='Estudante'"
              v-model="credenciais.nivel"
              :options="opcoes_nivel_estudante"
            />
            <q-select
              v-if="credenciais.categoria=='Professor(a)'"
              v-model="credenciais.nivel"
              :options="opcoes_nivel_professor"
            />
            <q-select
              v-if="credenciais.categoria=='Gestor(a) ou Servidor(a) público(a)'"
              v-model="credenciais.nivel"
              :options="opcoes_nivel_gestor"
            />
            <q-select
              v-if="credenciais.categoria=='Conselheiro(a)'"
              v-model="credenciais.nivel"
              :options="opcoes_nivel_conselheiro"
            />
            <q-select
              v-if="credenciais.categoria=='Iniciativa Privada'"
              v-model="credenciais.nivel"
              :options="opcoes_nivel_iniciativa_privada"
            />

          <q-stepper-navigation>
            <q-btn color="secondary" @click="$refs.stepper.next()" label="Próximo"/>
            <q-btn color="secondary" flat @click="$refs.stepper.previous()" label="Voltar"/>
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
      <br>
      <q-btn to="/" class="full-width" color="primary">Voltar</q-btn>
      <br>
      <br>
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
import {TheMask} from 'vue-the-mask'

export default {
  name: "criarConta",
  components: {TheMask},
  data() {
    return {
      minoria: [],
      credenciais: {
        minoria:[],
      },
      loading: true,
      termo: false,
       opcoes_sexo: [
        {
          label: 'Masculino',
          value: 'Masculino'
        },
        {
          label: 'Feminino',
          value: 'Feminino'
        }
      ],
      opcoes_estado_civil:[
        {
          label: 'Solteiro',
          value: 'Solteiro'
        },
        {
          label: 'Casado',
          value: 'Casado'
        },
        {
          label: 'Outro',
          value: 'Outro'
        }
      ],
      opcoes_minoria:[
        {
          label: 'Nenhuma',
          value: 'Nenhuma'
        },
        {
          label: 'Imigrante',
          value: 'Imigrante'
        },
        {
          label: 'Pessoa Idosa',
          value: 'Pessoa Idosa'
        },
        {
          label: 'Diversidade Religiosa',
          value: 'Diversidade Religiosa'
        },
        {
          label: 'Negro(a)',
          value: 'Negro(a)'
        },
        {
          label: 'Mulher',
          value: 'Mulher'
        },
        {
          label: 'Adolescente',
          value: 'Adolescente'
        },
        {
          label: 'Pobreza',
          value: 'Pobreza'
        },
        {
          label: 'Indígena',
          value: 'Indígena'
        },
        {
          label: 'Homoafetivo(a)',
          value: 'Homoafetivo(a)'
        },
        {
          label: 'Portador(a) de Necessidades Especiais',
          value: 'Portador(a) de Necessidades Especiais'
        }
      ],
      opcoes_escolaridade: [
        {
          label: 'Ensino Fundamental Incompleto',
          value: 'Ensino Fundamental Incompleto'
        },
        {
          label: 'Ensino Fundamental Completo',
          value: 'Ensino Fundamental Completo'
        },
        {
          label: 'Ensino Médio Incompleto',
          value: 'Ensino Médio Incompleto'
        },
        {
          label: 'Ensino Médio Completo',
          value: 'Ensino Médio Completo'
        },
        {
          label: 'Ensino Superior Incompleto',
          value: 'Ensino Superior Incompleto'
        },
        {
          label: 'Ensino Superior Completo',
          value: 'Ensino Superior Completo'
        }
      ],
      opcoes_categoria:[
        {
          label: 'Estudante',
          value: 'Estudante'
        },
        {
          label: 'Professor(a)',
          value: 'Professor(a)'
        },
        {
          label: 'Gestor(a) ou Servidor(a) público(a)',
          value: 'Gestor(a) ou Servidor(a) público(a)'
        },
        {
          label: 'Conselheiro(a)',
          value: 'Conselheiro(a)'
        },
        {
          label: 'Iniciativa Privada',
          value: 'Iniciativa Privada'
        },
      ],
      opcoes_nivel_estudante:[
        {
          label: 'Nível fundamental ou médio',
          value: 'Nível fundamental ou médio'
        },
        {
          label: 'Graduação',
          value: 'Graduação'
        },
        {
          label: 'Pós-graduação lato sensu (Especialização)',
          value: 'Pós-graduação lato sensu (Especialização)'
        },
        {
          label: 'Pós-graduação stricto sensu (Mestrado ou Doutorado)',
          value: 'Pós-graduação stricto sensu (Mestrado ou Doutorado)'
        },
      ],
      opcoes_nivel_professor: [
        {
          label: 'Ensino fundamental',
          value: 'Ensino fundamental',
        },
        {
          label: 'Ensino médio',
          value: 'Ensino médio',
        },
        {
          label: 'Ensino superior',
          value: 'Ensino superior',
        }
      ],
      opcoes_nivel_gestor: [
        {
          label: 'Municipal',
          value: 'Municipal'
        },
        {
          label: 'Estadual',
          value: 'Estadual'
        },
        {
          label: 'Federal',
          value: 'Federal'
        }
      ],
      opcoes_nivel_conselheiro: [
        {
          label: 'Municipal',
          value: 'Municipal'
        },
        {
          label: 'Estadual',
          value: 'Estadual'
        },
        {
          label: 'Federal',
          value: 'Federal'
        }
      ],
      opcoes_nivel_iniciativa_privada: [
        {
          label: 'Trabalhador(a)',
          value: 'Trabalhador(a)'
        },
        {
          label: 'Empresário',
          value: 'Empresário'
        },
        {
          label: 'Autônomo(a)',
          value: 'Autônomo(a)'
        },
        {
          label: 'Profissional Liberal',
          value: 'Profissional Liberal'
        }
      ]
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
            this.salvaFirestore(usuarios);

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
