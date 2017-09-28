var serviceLista = angular.module('DoMyTattoo');

serviceLista.service('listaService', function($http) {
  // privado
  var message = {};

  this.getLista = function(user_id, callback) {

    $http({

      method: 'GET',
      url: 'https://do-my-tattoo.herokuapp.com/order/getCustomerOrders/' + user_id

    }).then(function (response, success){

      console.log(response.data + " " + response.data);
      callback(response, true);

    },function (response, error){

      console.log(error);
      callback(response, error);

    });

  };

  this.getLista2 = function(user_id, callback) {

    $http({

      method: 'GET',
      url: 'https://do-my-tattoo.herokuapp.com/order/getTattooArtistOrders/' + user_id

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
serviceLista.controller('listaCtrl', function($scope, $rootScope, $location, listaService) {

  $scope.idCliente = $rootScope.usuario._id;

  $scope.listar = function(){

    if($rootScope.tipoUsuario){

      listaService.getLista($scope.idCliente, function(response, success){
        console.log('retornou');

        if(success) {

          $scope.lista = response.data;
          console.log('sucesso' + response.data + ' ' + response.data._id + '');

        }
        else {

          console.log('deu ruim');

        }

      });

    } else {

        listaService.getLista2($scope.idCliente, function(response, success){
        console.log('retornou');

        if(success) {

          $scope.lista = response.data;
          console.log('sucesso' + response.data + ' ' + response.data._id + '');

        }
        else {

          console.log('deu ruim');

        }
      });
    }

  };

  $scope.detalhes = function(orcamento){

    $rootScope.orcamento = orcamento;
    console.log($rootScope.orcamento);
    $rootScope.tatuador = orcamento.negotiations[0].tattooArtist;

    if(!$rootScope.usuario.isCustomer){

      $location.path('responder_orcamento'); // path not hash

    } else {

      $location.path('editar_orcamento'); // path not hash

    }

  };

  $scope.goPagina = function(view){
        $location.path(view); // path not hash
  };

  $scope.listar();
  
});
