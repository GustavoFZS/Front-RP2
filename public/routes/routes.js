(function(angular, undefined) {
   'use strict';

    var routesCtrl = angular.module('DoMyTattoo', ['ngRoute']);

    routesCtrl.config(['$routeProvider', function($routeProvider){

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

   }]);

})(angular);
