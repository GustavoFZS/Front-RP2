(function(angular, undefined) {
 'use strict';

 var routesCtrl = angular.module('DoMyTattoo', ['ngRoute']);

 routesCtrl.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

   $routeProvider

   .when('/login', {
    templateUrl : '/views/login.html',
    controller : 'loginCtrl'
  })

   .when('/', {
    templateUrl : '/views/login.html',
    controller : 'loginCtrl'
  })

   .when('/cadastrar', {
    templateUrl : '/views/cadastro.html',
    controller : 'cadastroCtrl'
  })

   .when('/enviar_orcamento', {
    templateUrl : '/views/enviaOrcamento.html',
    controller : 'criaOrcCtrl'
  })

   .when('/responder_orcamento', {
    templateUrl : '/views/respondeOrcamento.html',
    controller : 'editarOrcCtrl'
  })

   .when('/editar_orcamento', {
    templateUrl : '/views/editaOrcamento.html',
    controller : 'editarOrcCtrl'
  })

   .when('/lista_orcamento', {
    templateUrl : '/views/listaOrcamento.html',
    controller : 'listaOrcCtrl'
  })

   .when('/pesquisa', {
    templateUrl : '/views/pesquisa.html',
    controller : 'pesquisaCtrl'
  })

   .when('/resultado', {
    templateUrl : '/views/listaTatuadores.html',
    controller : 'listaTatuadorCtrl'
  })

   .when('/perfil', {
    templateUrl : '/views/perfil.html',
    controller : 'perfilCtrl'
  })

   .when('/publica_flashwork', {
    templateUrl : '/views/publicaFlashwork.html',
    controller : 'criaFlwCtrl'
  })

   .when('/lista_flashwork', {
    templateUrl : '/views/listaFlashworks.html',
    controller : 'listaFlwCtrl'
  })

   .when('/teste', {
    templateUrl : '/views/navbar.html'
  })

   if(window.history && window.history.pushState){
            //$locationProvider.html5Mode(true); will cause an error $location in HTML5 mode requires a  tag to be present! Unless you set baseUrl tag after head tag like so: <head> <base href="/">

         // to know more about setting base URL visit: https://docs.angularjs.org/error/$location/nobase

         // if you don't wish to set base URL then use this
         $locationProvider.html5Mode({
           enabled: true,
           requireBase: false
         });
       }

     }]);

})(angular);
