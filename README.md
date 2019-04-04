
# Projeto Arbo+ 


<h3>Dependências</h3>

[![NPm Version](https://img.shields.io/npm/v/choo.svg)](https://npmjs.org/)
[![Vuejs Version](https://img.shields.io/badge/Vue.js-2.5.17-green.svg)](https://vuejs.org)
[![Vuejs Version](https://img.shields.io/badge/Google-Firebase-orange.svg)](https://firebase.google.com)

 
 <h3>Qualidade do código </h3>
 
 [![Build status](https://ci.appveyor.com/api/projects/status/wusaxhkwnw36dgvd?svg=true)](https://ci.appveyor.com/project/froeder/projetoarquiurba)

 
<a href="https://codeclimate.com/github/froeder/projetoArquiUrba/maintainability"><img src="https://api.codeclimate.com/v1/badges/356a58d2ba82f4694fbe/maintainability" /></a>
[![CodeFactor](https://www.codefactor.io/repository/github/froeder/projetoarquiurba/badge)](https://www.codefactor.io/repository/github/froeder/projetoarquiurba)
[![codebeat badge](https://codebeat.co/badges/9e30f746-e647-4581-98bb-294c57426a61)](https://codebeat.co/projects/github-com-froeder-projetoarquiurba-master)
[![Build Status](https://travis-ci.org/froeder/projetoArquiUrba.svg?branch=master)](https://travis-ci.org/froeder/projetoArquiUrba)
[![DeepScan grade](https://deepscan.io/api/projects/3410/branches/30545/badge/grade.svg)](https://deepscan.io/dashboard#view=project&pid=3410&bid=30545)
<a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
   <img src="https://img.shields.io/badge/stability-alfa-orange.svg"
     alt="API stability" />
 </a>

O projeto está sendo desenvolvido usando o framework JavaScript Vue.js. Para o back-end estamos usando o Google Firebase, onde é tratado a autenticação e banco de dados, por exemplo. 
O projeto será multiplataform e terá versões para a WEB e dispositivos móveis, contando com uma aplicativo publicado na Play Store.

O projeto é uma parceria entre o PET-SISTEMAS e o Laboratório de Arquitetura e Urbanismo, em um projeto de coolaboração entre as duas partes, ambas situadas na UFMS Campus Cidade Universitária. 

### Sobre o projeto

Como é possível ver na <a href="https://github.com/froeder/projetoArquiUrba/wiki">wiki</a> do projeto, o mesmo se trata de um sistema multiplataforma para cadastro das árvores presentes no Campus Cidade Universitária da UFMS, onde os pesquisadores vão à campo para realizar tal atividade. 
Além disso, o projeto resultará em diversos produtos que se relacionam entre si. Um desses produtos será liberado a comunidade em geral para que os mesmo possam pesquisar informações sobre as árvores cadastradas. 


### Estrutura do projeto
```
 |---/raiz
 |--/cliente
 |--/dev
 |--/docs
 ```


Na <a href="https://github.com/froeder/projetoArquiUrba/wiki">wiki</a> do projeto é possível encontrar mais informações, tais como documentação, guias e padrões de projeto. 

Na pasta /docs é possível encontrar artefatos gerados durante o desenvolvimento do projeto.

Na pasta /dev é encontrado os arquivos antes de serem enviados para producao

Na pasta /cliente é encontrado os aquivos que já foram testados e podem subir para produção.


## Changelog

### Histórico de alterações

v1.5.1
* Removido colchetes das informações ao visualizar árvores ;
* 

v1.5.0
* LocalStorage Removido ;
* Corregido bug ao pegar a data na visualização do detalhe da árvore ;
* Consultas query no banco foram otimizadas para consumir menos recurso ;
* Bug ao fazer login foi corrigido ;
* Incluído campo de autocomplete para a espécie, genêro e família das árvores (ainda em teste)
* Pequenas correções no editar perfil do usuário ;
* ID agora é completado automáticamente ;
* Data de envio agora é completada automáticamente.

v1.4.14 :
* Refatorado nome_popular, não registrado quando vier null, ;
* campo 'Completa' alterado para 'Falta campos'  ;
* Exibir alerta se possui fotos ao visualizar ;
* Se não possui foto não exibe opção para baixar fotos



