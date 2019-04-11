<template>
  <q-page padding >
    <span></span>
    <q-card v-if="qtde_inscricao <= 300" color="white">
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
            <br>
            Naturalidade
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="UF"
                v-model="credenciais.naturalidade_estado"
                type="text"
              />
            </q-field>
            <q-field
              class="q-mt-md col-xs-12"
            >
              <q-input
                float-label="Cidade"
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
              <the-mask v-model="credenciais.nascimento" :mask="['##/##/####', '##/##/####']" />
              <!-- <q-datetime v-model="credenciais.nascimento" type="date" /> -->
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
            Telefone para contato: <br>
            <q-input
              float-label="Telefone"
              v-model="credenciais.telefone"
              type="text"
            />
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
            Possuí vínculo com a UFMS? <br><br>
            <q-select
              v-model="credenciais.categoria_ufms"
              :options="opcoes_ufms"
            />
            <br><br>
            <div v-if="credenciais.categoria_ufms === 'Não'">
              Dentre as categorias abaixo, em qual delas você melhor se enquadra ?
              <br>
              <br>
              <small></small>
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
            </div>
            

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
            23/04 - período noturno <br>
            <strong>Palestra magna: Direitos Humanos – da ética natural à ética do compartilhamento </strong> <br>
            Profª Drª Maria de Lourdes Jeffery Contini <br>
            <q-checkbox v-model="credenciais.palestra1" label="Participar" />
          </div>
          <br><br>
           
          <div>
            24/04 - primeira metade da manhã  <br>
            <strong>Painel 1: Direitos Humanos, Educação e Antropologia Social </strong> <br>
            Profª Drª Constantina Xavier Filha <br>
            Prof. Dr. Guilherme Rodrigues Passamani <br>
            Prof. Me. Leandro Henrique Araújo Leite <br>
            <q-checkbox v-model="credenciais.palestra2" label="Participar" />
          </div><br><br>

          <div>
            25/04 - segunda metade da manhã  <br>
            <strong>Painel 2: Direitos Humanos, Psicologia e Comunicação</strong>  <br>
            Profª Drª Lívia Gaigher Bósio Campello  <br>
            Profª Maª Sandra Maria Francisco de Amorim  <br>
            Ma. Lynara Ojeda de Souza  <br>
            Profª Drª Rosemeire Lopes da Silva Farias <br>
            <q-checkbox v-model="credenciais.palestra3" label="Participar" />
          </div> <br><br>

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
import {TheMask} from 'vue-the-mask'

export default {
  name: "criarConta",
  components: {TheMask},
  data() {
    return {
      minoria: [],
      quantidade_inscricoes: 0 ,
      qtde_inscricao : 0,
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
          label: 'Divorciado',
          value: 'Divorciado'
        },
        {
          label: 'Viúvo',
          value: 'Viúvo'
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
        },
        {
          label: 'Especialização Cursando',
          value: 'Especialização Cursando'
        },
        {
          label: 'Especialização Concluído',
          value: 'Especialização Concluído'
        },
        {
          label: 'Mestrado Cursando',
          value: 'Mestrado Cursando'
        },
        {
          label: 'Mestrado Concluído',
          value: 'Mestrado Concluído'
        },
        {
          label: 'Doutorado Cursando',
          value: 'Doutorado Cursando'
        },
        {
          label: 'Doutorado Concluído',
          value: 'Doutorado Concluído'
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
      ],
      opcoes_ufms:[
        {
          label : 'Não',
          value : 'Não'
        },
        {
          label: 'Estudante de Graduação',
          value: 'Estudante de Graduação'
        },
        {
          label: 'Estudante de Pós-graduação Lato Sensu',
          value: 'Estudante de Pós-graduação Lato Sensu'
        },
        {
          label: 'Estudante de Pós-graduação Stricto Sensu',
          value: 'Estudante de Pós-graduação Stricto Sensu'
        },
        {
          label: 'Servidor Docente',
          value: 'Servidor Docente'
        },
        {
          label: 'Servidor Técnico Administrativo',
          value: 'Servidor Técnico Administrativo'
        },
        {
          label: 'Terceirizado',
          value: 'Terceirizado'
        }
      ]
    };
  },
  created() {
    this.loading = false
  },
  mounted(){
    this.contaUsuarios()
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
    contaUsuarios(){
      this.$firebase.firestore().collection('usuarios').get().then(query =>{
        query.forEach(doc => {
            this.qtde_inscricao++
        })
      })
    },
    contaCampos(usuario){
      this.loading = false
      if(Object.keys(usuario).length >= 22) 
        return true
      else 
        return false
    },
    salvar(usuario) {
      let collection = this.$firebase.firestore().collection("usuarios")
      collection.add(this.credenciais)
    },
    exibeAlerta(message) {
      if (message === "Password should be at least 6 characters")
        this.$q.notify("A senha precisa ter mais que 6 caracteres!");
      else this.$q.notify(message);
      this.loading = false;
    },
    comparaSenhas(credencial) {
      this.loading = false
      if (credencial.password === credencial.confirme_password) return true;
    },
    validaQuantidade(){
      this.contaUsuarios()
      if(this.quantidade_inscricoes <= 300)
        return true 
       else 
        return false 
    },
    criarConta() {
      console.log(this.credenciais)
      this.loading = true;
      let compara = this.comparaSenhas(this.credenciais);
      if (compara) {
        if(this.contaCampos(this.credenciais)){
          if(this.validaQuantidade()){
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
            this.$q.notify("Inscrições encerradas. Envie um e-mail para solicitando a abertura de novas vagas.");
          }
        }else{
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