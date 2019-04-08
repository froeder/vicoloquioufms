<template>
  <q-page padding >
    <q-card color="white">
      <form @submit.prevent="criarConta()">
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
            Data Nascimento
              <!-- <q-input
                float-label="Nascimento"
                v-model="credenciais.nascimento"
                type="text"
              /> -->
              <q-datetime v-model="credenciais.nascimento" type="date" />
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
                float-label="Rua/Avenida/etc"
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
            <the-mask v-model="credenciais.telefone_residencial" :mask="['(##) ####-####', '(##) ####-####']" />
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
          <br>
          <br>
          <br>
          Senha para usar o sistema:
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
            <span v-if="credenciais.nivel">
              Espaço
            </span>
            <q-select
              v-if="credenciais.categoria=='Estudante'"
              v-model="credenciais.espaco"
              :options="opcoes_espaco_estudante"
            />
            <q-select
              v-if="credenciais.categoria=='Professor(a)'"
              v-model="credenciais.espaco"
              :options="opcoes_espaco_professor"
            />
            <q-select
              v-if="credenciais.categoria=='Gestor(a) ou Servidor(a) público(a)'"
              v-model="credenciais.espaco"
              :options="opcoes_espaco_gestor"
            />
            <q-select
              v-if="credenciais.categoria=='Conselheiro(a)'"
              v-model="credenciais.espaco"
              :options="opcoes_espaco_conselheiro"
            />
            <q-select
              v-if="credenciais.categoria=='Iniciativa Privada'"
              v-model="credenciais.espaco"
              :options="opcoes_espaco_iniciativa_privada"
            />

          <q-stepper-navigation>
            <q-btn color="secondary" @click="$refs.stepper.next()" label="Próximo"/>
            <q-btn color="secondary" flat @click="$refs.stepper.previous()" label="Voltar"/>
          </q-stepper-navigation>
        </q-step>
        <q-step name="sexto" title="Palestras">
          Palestras <br>
          <small>Selecione quais irá participar </small>
          <br>
          <br>
          
          <div>
            Palestra Magna: <strong>Direitos Humanos - da ética natual à ética do comportamento".</strong>
            <br>
            <strong>Profª Drª Maria de Lourdes Jeffery Contini.</strong> <br>
            Horário: <strong>19h30 - 20h30 </strong>
            <br>
            <q-checkbox v-model="credenciais.palestra1" label="Participar" />
          </div>
          <br><br>
          <strong>Primeria Parte - Direitos Humanos, Educação e Antropologia Social</strong> <br><br>
          <div>
            Direitos Humanos de crianças em pesquisa e extensão realizados em escolas públicas de Campo Grande /MS. <br>
            <strong>Profª Drª Constantina Xavier Filha</strong><br>
            Horário:<strong>08h10 - 08h30</strong> <br>
            <q-checkbox v-model="credenciais.palestra2" label="Participar" />
          </div><br><br>

          <div>
            Profissão: perigo - O fazer antropológico em tempo de ataque aos direitos humanos. <br><br>
            <strong>Prof.Dr. Guilherme Rodrigues Passamani</strong> <br>
            Horário:<strong>08h30 - 08h50</strong> <br>
            <q-checkbox v-model="credenciais.palestra3" label="Participar" />
          </div><br><br>

          <big>Intervalo 08h50 - 09h10</big>

          <br><br>

          <strong>Segunda Parte: Direitos Humanos, Psicologia e Comunicação</strong>

          <br><br>

          <div>
            Direitos Humanos e os desafio à solidariedade intergeracional no cenário de crise ambiental global. <br>
            <strong>Profª Drª Lívia Gaigher Bósio Campello</strong> <br>
            Horário:<strong>09h10 - 09h30</strong> <br>
            <q-checkbox v-model="credenciais.palestra4" label="Participar" />
          </div> <br><br>

          <div>
            Psicologia, Formação e Direitos Humanos: desafios contemporâneos. <br>
            <strong>Profª Drª Sandra Maria Francisco Amorim.</strong><br>
            Horário:<strong>09h30 - 09h50</strong> <br>
            <q-checkbox v-model="credenciais.palestra5" label="Participar" />
          </div><br><br>

          <div>
            Entre a humanização e a estigmatização - os desafios da cobertura jornalística sobre direitos humanos. <br>
            <strong>Msc. Lynara Ojeda de Souza.</strong><br>
            Horário:<strong>09h50 - 10h10</strong> <br>
            <q-checkbox v-model="credenciais.palestra6" label="Participar" />
          </div>

          <q-stepper-navigation>
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
            <q-btn color="secondary" flat @click="$refs.stepper.previous()" label="Voltar"/>
          </q-stepper-navigation>
        </q-step>
      </q-stepper>
      <br>
      <q-btn to="/" class="full-width" color="primary">Voltar</q-btn>
      <br>
      <br>
      </form>
    </q-card>
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
      palestra1: false,
      palestra2: false,
      palestra3: false,
      palestra4: false,
      palestra5: false,
      palestra6: false,
      credenciais: {
        palestra1: false,
        palestra2: false,
        palestra3: false,
        palestra4: false,
        palestra5: false,
        palestra6: false,
        minoria:[],
        palestras: []
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
      ],
      opcoes_espaco_estudante: [
        {
          label: 'Escola pública',
          value: 'Escola pública'
        },
        {
          label: 'Escola particular',
          value: 'Escola particular'
        },
        {
          label: 'UFMS',
          value: 'UFMS'
        },
        {
          label: 'Outra',
          value: 'Outra'
        },
        {
          label: 'Outra Universidade pública',
          value: 'Outra Universidade pública'
        },
        {
          label: 'Faculdade ou universidade particular',
          value: 'Faculdade ou universidade particular'
        },
      ],
      opcoes_espaco_professor: [
        {
          label: 'Escola pública',
          value: 'Escola pública'
        },
        {
          label: 'Escola particular',
          value: 'Escola particular'
        },
        {
          label: 'UFMS',
          value: 'UFMS'
        },
        {
          label: 'Outra',
          value: 'Outra'
        },
        {
          label: 'Outra Universidade pública',
          value: 'Outra Universidade pública'
        },
        {
          label: 'Faculdade ou universidade particular',
          value: 'Faculdade ou universidade particular'
        },
      ],
      opcoes_espaco_gestor: [
        {
          label: 'Educação',
          value: 'Educação'
        },
        {
          label: 'Saúde',
          value: 'Saúde'
        },
        {
          label: 'Trabalho',
          value: 'Trabalho'
        },
        {
          label: 'Esporte e Lazer',
          value: 'Esporte e Lazer'
        },
        {
          label: 'Cultura',
          value: 'Cultura'
        },
        {
          label: 'Assistência Social',
          value: 'Assistência Social'
        },
        {
          label: 'Meio Ambiente',
          value: 'Meio Ambiente'
        },
        {
          label: 'Moradia',
          value: 'Moradia'
        },
        {
          label: 'Transporte',
          value: 'Transporte'
        },
        {
          label: 'Direitos Humanos',
          value: 'Direitos Humanos'
        },
        {
          label: 'Forças Armadas',
          value: 'Forças Armadas'
        },
        {
          label: 'Segurança Pública',
          value: 'Segurança Pública'
        },
        {
          label: 'Poder Judiciário',
          value: 'Poder Judiciário'
        },
        {
          label: 'Poder Legislativo',
          value: 'Poder Legislativo'
        }
      ],
      opcoes_espaco_conselheiro:[
        {
          label: 'Direitos',
          value: 'Direitos'
        },
        {
          label: 'Políticas Públicas',
          value: 'Políticas Públicas'
        }
      ],
      opcoes_espaco_iniciativa_privada: [
        {
          label: 'Prestação de Serviços',
          value: 'Prestação de Serviços'
        },
        {
          label: 'Comércio',
          value: 'Comércio'
        },
        {
          label: 'Finanças',
          value: 'Finanças'
        },
        {
          label: 'Indústria',
          value: 'Indústria'
        },
        {
          label: 'Área Rural',
          value: 'Área Rural'
        },
      ],
      opcoes_palestras:[
        {
          label:  'Palestra 1',
          value:  'Palestra 1'
        },
        {
          label:  'Palestra 2',
          value:  'Palestra 2'
        },
        {
          label:  'Palestra 3',
          value:  'Palestra 3'
        },
        {
          label:  'Palestra 4',
          value:  'Palestra 4'
        },
        {
          label:  'Palestra 5',
          value:  'Palestra 5'
        },
        {
          label:  'Palestra 6',
          value:  'Palestra 6'
        },
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
      this.crenenciais.id = this.geraID()
      this.credenciais.data_criacao = metadado.creationTime;
      this.credenciais.ultimo_login = metadado.lastSignInTime;
      this.credenciais.papel = "user";
    },
    salvar(usuario) {
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
      console.log(this.credenciais)
      this.loading = true;
      let compara = this.comparaSenhas(this.credenciais);
      if (compara) {
        this.$firebase
          .auth()
          .createUserWithEmailAndPassword(
            this.credenciais.email_pessoal,
            this.credenciais.password
          )
          .then(user => {
            let usuarios = user.user;
            this.salvar(usuarios);

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
            this.exibeAlerta(message)
            console.log(message)
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
