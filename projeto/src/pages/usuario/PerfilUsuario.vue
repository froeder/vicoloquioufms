<template>
  <q-page padding>
    <q-card color="white">
        <q-stepper color="secondary" ref="stepper" alternative-labels>
          <q-step default name="first" title="Informações Básicas">
            <div class="gutter-xs">
              <q-field class="q-mt-md col-xs-12">
                <q-input
                  float-label="Nome Completo sem abreviações"
                  v-model="usuario.nome_completo"
                  type="text"
                />
              </q-field>
              <br>Naturalidade
              <q-field class="q-mt-md col-xs-12">
                <q-input float-label="UF" v-model="usuario.naturalidade_estado" type="text"/>
              </q-field>
              <q-field class="q-mt-md col-xs-12">
                <q-input
                  float-label="Cidade"
                  v-model="usuario.naturalidade_cidade"
                  type="text"
                />
              </q-field>
              <q-field class="q-mt-md col-xs-12">
                Data Nascimento
                <!-- <q-input
                float-label="Nascimento"
                v-model="usuario.nascimento"
                type="text"
                />-->
                <the-mask v-model="usuario.nascimento" :mask="['##/##/####', '##/##/####']"/>
                <!-- <q-datetime v-model="usuario.nascimento" type="date" /> -->
              </q-field>
              <q-field class="q-mt-md col-xs-12">
                Sexo
                <br>
                <q-select v-model="usuario.sexo" :options="opcoes_sexo"/>
              </q-field>
              <q-field class="q-mt-md col-xs-12">
                Estado Cívil
                <br>
                <q-select v-model="usuario.estado_civil" :options="opcoes_estado_civil"/>
              </q-field>
              <q-field class="q-mt-md col-xs-12">
                CPF:
                <br>
                <the-mask v-model="usuario.cpf" :mask="['###.###.###-##']"/>
              </q-field>
              <q-field>
                Você se entende como parte de alguma minoria, no sentido de viver em alguma situação de desvantagem social? Se sim, qual(is)?
                <br>
                <br>
                <q-select multiple v-model="usuario.minoria" :options="opcoes_minoria"/>
                <q-input
                  float-label="Outro - Especificar"
                  v-model="usuario.minoria"
                  type="text"
                />
              </q-field>
            </div>

            <!-- Navigation for this step at the end of QStep-->
            <q-stepper-navigation>
              <q-btn color="secondary" @click="$refs.stepper.next()">
                Próximo
                <q-icon name="arrow_forward"></q-icon>
              </q-btn>
            </q-stepper-navigation>
          </q-step>

          <q-step name="Endereço" title="Endereço">
            <div class="gutter-xs">
              <p>Endereço Residêncial</p>
              <q-field class="q-mt-md col-xs-12">
                <q-input
                  float-label="Rua/Avenida/etc"
                  v-model="usuario.rua_residencial"
                  type="text"
                />
              </q-field>
              <q-field class="q-mt-md col-xs-12">
                <q-input float-label="Bairro" v-model="usuario.bairro_residencial" type="text"/>
              </q-field>
              <q-field class="q-mt-md col-xs-12">
                <q-input
                  float-label="Município"
                  v-model="usuario.municipio_residencial"
                  type="text"
                />
              </q-field>
              <q-field class="q-mt-md col-xs-12">
                <q-input float-label="Estado" v-model="usuario.estado_residencial" type="text"/>
              </q-field>
            </div>
            <q-stepper-navigation>
              <q-btn color="secondary" @click="$refs.stepper.next()">
                Próximo
                <q-icon name="arrow_forward"></q-icon>
              </q-btn>
              <q-btn color="secondary" flat @click="$refs.stepper.previous()">
                Voltar
                <q-icon name="arrow_back"></q-icon>
              </q-btn>
            </q-stepper-navigation>
          </q-step>
          <q-step name="Contato" title="Contato">
            <q-field class="q-mt-md col-xs-12">
              Telefone para contato:
              <br>
              <q-input float-label="Telefone" v-model="usuario.telefone" type="text"/>
            </q-field>
            <q-field class="q-mt-md col-xs-12">
              <q-input
                float-label="E-mail pessoal"
                v-model="usuario.email_pessoal"
                type="email"
              />
              <small>(Será usado para fazer login)</small>
            </q-field>
            <br>
            <br>
            <br>Senha para usar o sistema:
            <q-field class="q-mt-lg col-xs-12">
              <q-input
                float-label="Senha"
                v-model="usuario.password"
                type="password"
                autocomplete="current-password"
              />
            </q-field>
            <q-field class="q-mt-lg col-xs-12">
              <q-input
                float-label="Redigite a Senha"
                v-model="usuario.confirme_password"
                type="password"
                autocomplete="current-password"
              />
            </q-field>
            <q-stepper-navigation>
              <q-btn color="secondary" @click="$refs.stepper.next()">
                Próximo
                <q-icon name="arrow_forward"></q-icon>
              </q-btn>
              <q-btn color="secondary" flat @click="$refs.stepper.previous()">
                Voltar
                <q-icon name="arrow_back"></q-icon>
              </q-btn>
            </q-stepper-navigation>
          </q-step>
          <q-step name="fifth" title="Educação">
            <q-field class="q-mt-md col-xs-12">
              Escolaridade:
              <br>
              <q-select v-model="usuario.escolaridade" :options="opcoes_escolaridade"/>
            </q-field>
            <br>
            <br>Possuí vínculo com a UFMS?
            <br>
            <br>
            <q-select v-model="usuario.categoria_ufms" :options="opcoes_ufms"/>
            <br>
            <br>
            <div v-if="usuario.categoria_ufms === 'Não'">
              Dentre as categorias abaixo, em qual delas você melhor se enquadra ?
              <br>
              <br>
              <small></small>
              <br>
              <br>Categoria
              <q-select v-model="usuario.categoria" :options="opcoes_categoria"/>
              <span v-if="usuario.categoria">Nível</span>
              <q-select
                v-if="usuario.categoria=='Estudante'"
                v-model="usuario.nivel"
                :options="opcoes_nivel_estudante"
              />
              <q-select
                v-if="usuario.categoria=='Professor(a)'"
                v-model="usuario.nivel"
                :options="opcoes_nivel_professor"
              />
              <q-select
                v-if="usuario.categoria=='Gestor(a) ou Servidor(a) público(a)'"
                v-model="usuario.nivel"
                :options="opcoes_nivel_gestor"
              />
              <q-select
                v-if="usuario.categoria=='Conselheiro(a)'"
                v-model="usuario.nivel"
                :options="opcoes_nivel_conselheiro"
              />
              <q-select
                v-if="usuario.categoria=='Iniciativa Privada'"
                v-model="usuario.nivel"
                :options="opcoes_nivel_iniciativa_privada"
              />
              <span v-if="usuario.nivel">Espaço</span>
              <q-select
                v-if="usuario.categoria=='Estudante'"
                v-model="usuario.espaco"
                :options="opcoes_espaco_estudante"
              />
              <q-select
                v-if="usuario.categoria=='Professor(a)'"
                v-model="usuario.espaco"
                :options="opcoes_espaco_professor"
              />
              <q-select
                v-if="usuario.categoria=='Gestor(a) ou Servidor(a) público(a)'"
                v-model="usuario.espaco"
                :options="opcoes_espaco_gestor"
              />
              <q-select
                v-if="usuario.categoria=='Conselheiro(a)'"
                v-model="usuario.espaco"
                :options="opcoes_espaco_conselheiro"
              />
              <q-select
                v-if="usuario.categoria=='Iniciativa Privada'"
                v-model="usuario.espaco"
                :options="opcoes_espaco_iniciativa_privada"
              />
            </div>

            <q-stepper-navigation>
              <q-btn color="secondary" @click="$refs.stepper.next()">
                Próximo
                <q-icon name="arrow_forward"></q-icon>
              </q-btn>
              <q-btn color="secondary" flat @click="$refs.stepper.previous()">
                Voltar
                <q-icon name="arrow_back"></q-icon>
              </q-btn>
            </q-stepper-navigation>
          </q-step>
          <q-step name="sexto" title="Palestras">
            Palestras
            <br>
            <small>Selecione quais irá participar</small>
            <br>
            <br>

            <div>
              23/04 - período noturno
              <br>
              <strong>Palestra magna: Direitos Humanos – da ética natural à ética do compartilhamento</strong>
              <br>Profª Drª Maria de Lourdes Jeffery Contini
              <br>
              <q-checkbox v-model="usuario.palestra1" label="Participar"/>
            </div>
            <br>
            <br>

            <div>
              24/04 - primeira metade da manhã
              <br>
              <strong>Painel 1: Direitos Humanos, Educação e Antropologia Social</strong>
              <br>Profª Drª Constantina Xavier Filha
              <br>Prof. Dr. Guilherme Rodrigues Passamani
              <br>Prof. Me. Leandro Henrique Araújo Leite
              <br>
              <q-checkbox v-model="usuario.palestra2" label="Participar"/>
            </div>
            <br>
            <br>

            <div>
              24/04 - segunda metade da manhã
              <br>
              <strong>Painel 2: Direitos Humanos, Psicologia e Comunicação</strong>
              <br>Profª Drª Lívia Gaigher Bósio Campello
              <br>Profª Maª Sandra Maria Francisco de Amorim
              <br>Ma. Lynara Ojeda de Souza
              <br>Profª Drª Rosemeire Lopes da Silva Farias
              <br>
              <q-checkbox v-model="usuario.palestra3" label="Participar"/>
            </div>
            <br>
            <br>

            <q-stepper-navigation>
              <q-btn label="Salvar" color="positive" @click="salvar(usuario)" icon="save">
                <q-spinner v-if="loading"/>
              </q-btn>
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
    </q-card>
  </q-page>
</template>

<script>
import { uid } from "quasar"
import { Notify } from "quasar"
import { TheMask } from "vue-the-mask"
import Firebase from 'firebase'

export default {
  name: "criarConta",
  components: { TheMask },
  data() {
    return {
      minoria: [],
      email: this.$store.state.auth.user.email,
      quantidade_inscricoes: 0,
      qtde_inscricao: 0,
      palestra1 : false,
      palestra2 : false,
      palestra3 : false,
      palestra4 : false,
      palestra5 : false,
      palestra6 : false,
      doc_id    : '',
      usuario: {
        palestra1: false,
        palestra2: false,
        palestra3: false,
        minoria: [],
        palestras: []
      },
      loading: true,
      termo: false,
      opcoes_sexo: [
        {
          label: "Masculino",
          value: "Masculino"
        },
        {
          label: "Feminino",
          value: "Feminino"
        }
      ],
      opcoes_estado_civil: [
        {
          label: "Solteiro",
          value: "Solteiro"
        },
        {
          label: "Casado",
          value: "Casado"
        },
        {
          label: "Divorciado",
          value: "Divorciado"
        },
        {
          label: "Viúvo",
          value: "Viúvo"
        },
        {
          label: "Outro",
          value: "Outro"
        }
      ],
      opcoes_minoria: [
        {
          label: "Nenhuma",
          value: "Nenhuma"
        },
        {
          label: "Imigrante",
          value: "Imigrante"
        },
        {
          label: "Pessoa Idosa",
          value: "Pessoa Idosa"
        },
        {
          label: "Diversidade Religiosa",
          value: "Diversidade Religiosa"
        },
        {
          label: "Negro(a)",
          value: "Negro(a)"
        },
        {
          label: "Mulher",
          value: "Mulher"
        },
        {
          label: "Adolescente",
          value: "Adolescente"
        },
        {
          label: "Pobreza",
          value: "Pobreza"
        },
        {
          label: "Indígena",
          value: "Indígena"
        },
        {
          label: "Homoafetivo(a)",
          value: "Homoafetivo(a)"
        },
        {
          label: "Portador(a) de Necessidades Especiais",
          value: "Portador(a) de Necessidades Especiais"
        }
      ],
      opcoes_escolaridade: [
        {
          label: "Ensino Fundamental Incompleto",
          value: "Ensino Fundamental Incompleto"
        },
        {
          label: "Ensino Fundamental Completo",
          value: "Ensino Fundamental Completo"
        },
        {
          label: "Ensino Médio Incompleto",
          value: "Ensino Médio Incompleto"
        },
        {
          label: "Ensino Médio Completo",
          value: "Ensino Médio Completo"
        },
        {
          label: "Ensino Superior Incompleto",
          value: "Ensino Superior Incompleto"
        },
        {
          label: "Ensino Superior Completo",
          value: "Ensino Superior Completo"
        },
        {
          label: "Especialização Cursando",
          value: "Especialização Cursando"
        },
        {
          label: "Especialização Concluído",
          value: "Especialização Concluído"
        },
        {
          label: "Mestrado Cursando",
          value: "Mestrado Cursando"
        },
        {
          label: "Mestrado Concluído",
          value: "Mestrado Concluído"
        },
        {
          label: "Doutorado Cursando",
          value: "Doutorado Cursando"
        },
        {
          label: "Doutorado Concluído",
          value: "Doutorado Concluído"
        }
      ],
      opcoes_categoria: [
        {
          label: "Estudante",
          value: "Estudante"
        },
        {
          label: "Professor(a)",
          value: "Professor(a)"
        },
        {
          label: "Gestor(a) ou Servidor(a) público(a)",
          value: "Gestor(a) ou Servidor(a) público(a)"
        },
        {
          label: "Conselheiro(a)",
          value: "Conselheiro(a)"
        },
        {
          label: "Iniciativa Privada",
          value: "Iniciativa Privada"
        }
      ],
      opcoes_nivel_estudante: [
        {
          label: "Nível fundamental ou médio",
          value: "Nível fundamental ou médio"
        },
        {
          label: "Graduação",
          value: "Graduação"
        },
        {
          label: "Pós-graduação lato sensu (Especialização)",
          value: "Pós-graduação lato sensu (Especialização)"
        },
        {
          label: "Pós-graduação stricto sensu (Mestrado ou Doutorado)",
          value: "Pós-graduação stricto sensu (Mestrado ou Doutorado)"
        }
      ],
      opcoes_nivel_professor: [
        {
          label: "Ensino fundamental",
          value: "Ensino fundamental"
        },
        {
          label: "Ensino médio",
          value: "Ensino médio"
        },
        {
          label: "Ensino superior",
          value: "Ensino superior"
        }
      ],
      opcoes_nivel_gestor: [
        {
          label: "Municipal",
          value: "Municipal"
        },
        {
          label: "Estadual",
          value: "Estadual"
        },
        {
          label: "Federal",
          value: "Federal"
        }
      ],
      opcoes_nivel_conselheiro: [
        {
          label: "Municipal",
          value: "Municipal"
        },
        {
          label: "Estadual",
          value: "Estadual"
        },
        {
          label: "Federal",
          value: "Federal"
        }
      ],
      opcoes_nivel_iniciativa_privada: [
        {
          label: "Trabalhador(a)",
          value: "Trabalhador(a)"
        },
        {
          label: "Empresário",
          value: "Empresário"
        },
        {
          label: "Autônomo(a)",
          value: "Autônomo(a)"
        },
        {
          label: "Profissional Liberal",
          value: "Profissional Liberal"
        }
      ],
      opcoes_espaco_estudante: [
        {
          label: "Escola pública",
          value: "Escola pública"
        },
        {
          label: "Escola particular",
          value: "Escola particular"
        },
        {
          label: "Outra",
          value: "Outra"
        },
        {
          label: "Outra Universidade pública",
          value: "Outra Universidade pública"
        },
        {
          label: "Faculdade ou universidade particular",
          value: "Faculdade ou universidade particular"
        }
      ],
      opcoes_espaco_professor: [
        {
          label: "Escola pública",
          value: "Escola pública"
        },
        {
          label: "Escola particular",
          value: "Escola particular"
        },
        {
          label: "Outra",
          value: "Outra"
        },
        {
          label: "Outra Universidade pública",
          value: "Outra Universidade pública"
        },
        {
          label: "Faculdade ou universidade particular",
          value: "Faculdade ou universidade particular"
        }
      ],
      opcoes_espaco_gestor: [
        {
          label: "Educação",
          value: "Educação"
        },
        {
          label: "Saúde",
          value: "Saúde"
        },
        {
          label: "Trabalho",
          value: "Trabalho"
        },
        {
          label: "Esporte e Lazer",
          value: "Esporte e Lazer"
        },
        {
          label: "Cultura",
          value: "Cultura"
        },
        {
          label: "Assistência Social",
          value: "Assistência Social"
        },
        {
          label: "Meio Ambiente",
          value: "Meio Ambiente"
        },
        {
          label: "Moradia",
          value: "Moradia"
        },
        {
          label: "Transporte",
          value: "Transporte"
        },
        {
          label: "Direitos Humanos",
          value: "Direitos Humanos"
        },
        {
          label: "Forças Armadas",
          value: "Forças Armadas"
        },
        {
          label: "Segurança Pública",
          value: "Segurança Pública"
        },
        {
          label: "Poder Judiciário",
          value: "Poder Judiciário"
        },
        {
          label: "Poder Legislativo",
          value: "Poder Legislativo"
        }
      ],
      opcoes_espaco_conselheiro: [
        {
          label: "Direitos",
          value: "Direitos"
        },
        {
          label: "Políticas Públicas",
          value: "Políticas Públicas"
        }
      ],
      opcoes_espaco_iniciativa_privada: [
        {
          label: "Prestação de Serviços",
          value: "Prestação de Serviços"
        },
        {
          label: "Comércio",
          value: "Comércio"
        },
        {
          label: "Finanças",
          value: "Finanças"
        },
        {
          label: "Indústria",
          value: "Indústria"
        },
        {
          label: "Área Rural",
          value: "Área Rural"
        }
      ],
      opcoes_palestras: [
        {
          label: "Palestra 1",
          value: "Palestra 1"
        },
        {
          label: "Palestra 2",
          value: "Palestra 2"
        },
        {
          label: "Palestra 3",
          value: "Palestra 3"
        },
        {
          label: "Palestra 4",
          value: "Palestra 4"
        },
        {
          label: "Palestra 5",
          value: "Palestra 5"
        },
        {
          label: "Palestra 6",
          value: "Palestra 6"
        }
      ],
      opcoes_ufms: [
        {
          label: "Não",
          value: "Não"
        },
        {
          label: "Estudante de Graduação",
          value: "Estudante de Graduação"
        },
        {
          label: "Estudante de Pós-graduação Lato Sensu",
          value: "Estudante de Pós-graduação Lato Sensu"
        },
        {
          label: "Estudante de Pós-graduação Stricto Sensu",
          value: "Estudante de Pós-graduação Stricto Sensu"
        },
        {
          label: "Servidor Docente",
          value: "Servidor Docente"
        },
        {
          label: "Servidor Técnico Administrativo",
          value: "Servidor Técnico Administrativo"
        },
        {
          label: "Terceirizado",
          value: "Terceirizado"
        }
      ]
    };
  },
  created() {
    this.loading = false;
  },
  mounted() {
      this.baixaUsuario()
  },
  methods: {
    geraID() {
      return uid();
    },
    atribuiMetadados(metadado) {
      this.crenenciais.id = this.geraID();
      this.usuario.data_criacao = metadado.creationTime;
      this.usuario.ultimo_login = metadado.lastSignInTime;
      this.usuario.papel = "user";
    },
    baixaUsuario() {
        Firebase
            .firestore()
            .collection("usuarios")
            .where('email_pessoal', '==', this.email)
            .get()
            .then(query => {
                query.forEach(doc => {
                    this.usuario = doc.data()
                    this.doc_id = doc.id
                });
            });
    },
    atualizaUsuario(usuario){
        let collection = 
        Firebase
            .firestore()
            .collection("usuarios")
            .doc(this.doc_id)
        collection.update(usuario).then(
            Notify.create({
            color: "positive",
            position: "bottom",
            message: "Usuário atualizado",
            icon: "thumb_up",
            timeout: 2000
            })
        );
    },
    contaCampos(usuario) {
      this.loading = false;
      if (Object.keys(usuario).length >= 2) return true;
      else return false;
    },
    converterCase(){
      this.usuario.nome_completo = this.usuario.nome_completo.toUpperCase()
      this.usuario.email_pessoal = this.usuario.email_pessoal.toLowerCase()
    },
    salvar(usuario) {
      this.converterCase()
      this.atualizaUsuario(usuario)
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
    criarConta() {
      console.log(this.usuario);
      this.loading = true;
      let compara = this.comparaSenhas(this.usuario);
      if (compara) {
        if (this.contaCampos(this.usuario)) {
            this.$firebase
                .auth()
                .createUserWithEmailAndPassword(
                this.usuario.email_pessoal,
                this.usuario.password
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
                this.exibeAlerta(message);
                console.log(message);
                });
         
        } else {
          this.$q.notify("Faltam Campos");
        }
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