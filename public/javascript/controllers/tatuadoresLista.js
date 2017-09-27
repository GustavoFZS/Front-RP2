var serviceTatuadorLista = angular.module('DoMyTattoo');

serviceTatuadorLista.service('listaTatuadorService', function($http) {
  // privado
  var message = {};

  this.getLista = function(tatuador_id, callback) {

    $http({

      method: 'GET',
      url: 'https://do-my-tattoo.herokuapp.com/search/searchTattooArtists/' + tatuador_id

    }).then(function (response, success){

      console.log(response.data + " " + response.data);
      callback(response, true);

    },function (response, error){

      console.log(error);
      callback(response, error);

    });

  };
});

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceTatuadorLista.controller('listaTatuadorCtrl', function($scope, $rootScope, $location, listaTatuadorService) {

  $scope.tatuador = $rootScope.tatuador;

  $scope.listar = function(){
    listaTatuadorService.getLista($scope.tatuador, function(response, success){
      console.log('retornou');

      if(success) {

        $scope.lista = response.data;
        console.log('sucesso' + response.data + ' ' + response.data._id + '');

      }
      else {

        console.log('deu ruim');

      }

    });
  };

  $scope.solicitar = function(tatuador){

    $rootScope.tatuador = tatuador;
    console.log($rootScope.tatuador);
    $location.path('enviar_orcamento'); // path not hash

  };

  $scope.listar();
  
});
