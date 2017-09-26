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
});

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceLista.controller('listaCtrl', function($scope, $rootScope, $location, listaService) {

  $scope.idCliente = $rootScope.usuario._id;

  $scope.listar = function(){
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
  };

  $scope.detalhes = function(orcamento){

    $rootScope.orcamento = orcamento;
    console.log($rootScope.orcamento);
    $location.path('responder_orcamento'); // path not hash

  };

  $scope.listar();
  
});
