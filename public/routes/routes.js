(function(angular, undefined) {
   'use strict';

    var routesCtrl = angular.module('DoMyTattoo', ['ngRoute']);

    routesCtrl.config(['$routeProvider', function($routeProvider){

     $routeProvider
     // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
     .when('/login', {
        templateUrl : '/views/login.html',
        controller : 'loginCtrl'
     })

     // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
     .when('/cadastrar', {
        templateUrl : '/views/cadastrar.html',
        controller : 'cadastroCtrl'
     })

     .when('/enviar_orcamento', {
        templateUrl : '/views/enviarOrcamento.html',
        controller : 'orcamentoCtrl'
     })

    .when('/responder_orcamento', {
        templateUrl : '/views/responderOrcamento.html',
        controller : 'detalhesCtrl'
     })

     .when('/editar_orcamento', {
        templateUrl : '/views/editarOrcamento.html',
        controller : 'detalhesCtrl'
     })

    .when('/lista_orcamento', {
        templateUrl : '/views/cardOrcamento.html',
        controller : 'listaCtrl'
     })
    
    .when('/pesquisa', {
        templateUrl : '/views/pesquisa.html',
        controller : 'pesquisaCtrl'
     })

    .when('/resultado', {
        templateUrl : '/views/listaTatuadores.html',
        controller : 'listaTatuadorCtrl'
     })

   }]);

})(angular);
