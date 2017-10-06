var servicePerfil = angular.module('DoMyTattoo');

//--- AQUI VAI O CONTROLLER (agora mais magro)
servicePerfil.controller('perfilCtrl', function($scope, $rootScope, $location) {

  $scope.tatuador = $rootScope.tatuador;

  $scope.chamaPesquisa = function(){

    $rootScope.tatuador = $scope.tatuador;
    console.log($rootScope.tatuador);
    $location.path('resultado'); // path not hash

  };
  
});
