var servicePesquisa = angular.module('DoMyTattoo');

servicePesquisa.service('PesquisaService', function($http) {

  this.getEstilos = function(callback) {

    $http({
      method: 'GET',
      url: 'https://do-my-tattoo.herokuapp.com/style/getStyles',

    }).then(function (success){

      console.log(success);
      callback(success, true);

    },function (error){

      console.log(error);
      callback(error, false);

    });

  };

});

//--- AQUI VAI O CONTROLLER (agora mais magro)
servicePesquisa.controller('pesquisaCtrl', function($scope, $rootScope, $location, PesquisaService) {

	$scope.idCliente = $rootScope.usuario._id;

	$scope.tatuador = "";

	$rootScope.estilo = "";

	$scope.chamaPesquisa = function(){

   if($scope.pesquisarTatuadores == 1){

      $rootScope.tatuador = $scope.tatuador;
      console.log($rootScope.tatuador);
    	$location.path('resultado'); // path not hash

    } else {

      $rootScope.estilo = $scope.estilo;
      console.log($rootScope.estilo);
    	$location.path('lista_flashwork'); // path not hash

    };
  }

  $scope.getEstilos = function(){
    PesquisaService.getEstilos(function(response, success){

      console.log('retornou');

      $scope.listaEstilos = response.data;
      if(success) {
        console.log('sucesso');
      }
      else {
        console.log('merda deu ');
      }

    });
  };

  $scope.getEstilos();

});
