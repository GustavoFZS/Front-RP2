var servicePesquisa = angular.module('DoMyTattoo');

//--- AQUI VAI O CONTROLLER (agora mais magro)
servicePesquisa.controller('pesquisaCtrl', function($scope, $rootScope, $location) {

  $scope.idCliente = $rootScope.usuario._id;

  $scope.chamaPesquisa = function(){

    $rootScope.tatuador = $scope.tatuador;
    console.log($rootScope.tatuador);
    $location.path('resultado'); // path not hash

  };
  
});
