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
        controller : 'orcamentoCtrl'
     })

          .when('/lista_orcamento', {
        templateUrl : '/views/cardOrcamento.html',
        controller : 'listaCtrl'
     })

   }]);

})(angular);
