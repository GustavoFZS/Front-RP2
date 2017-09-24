(function(angular, undefined) {
   'use strict';

    var routesCtrl = angular.module('DoMyTattoo', ['ngRoute']);

    routesCtrl.config(['$routeProvider', function($routeProvider){

     $routeProvider
     // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
     .when('/login', {
        templateUrl : '/views/login.html',
        controller : 'login'
     })

     // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
     .when('/cadastrar', {
        templateUrl : '/views/cadastrar.html',
        controller : 'cadastro'
     })

   }]);

      //--- AQUI VAI O CONTROLLER (agora mais magro)
   routesCtrl.controller('Cntrl', function($scope, $location) {

      function Cntrl ($scope,$location) {
           $scope.changeView = function(view){
               $location.path(view); // path not hash
           }
       }

   });

})(angular);