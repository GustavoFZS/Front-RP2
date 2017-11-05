var serviceOrcLista = angular.module('DoMyTattoo');

serviceOrcLista.service('listaOrcService', function($http) {
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

  this.setPreco = function(orderID, negociacaoID, preco, callback) {

    $http({
      method: 'PUT',
      url: 'https://do-my-tattoo.herokuapp.com/order/tattooArtistSetPrice/' + orderID + '/' + negociacaoID + '/' + preco,

    }).then(function (success){

      console.log(success);
      callback(success, true);
      swal(
        'Enviado!',
        'Sua proposta foi enviada.',
        'success'
        );

    },function (error){

      console.log(error);
      callback(error, false);

    });

  };

});

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceOrcLista.controller('listaOrcCtrl', function($scope, $rootScope, $location, listaOrcService) {

  $scope.idCliente = $rootScope.usuario._id;

  $scope.listar = function(){

    if($rootScope.tipoUsuario){

      listaOrcService.getLista($scope.idCliente, function(response, success){
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

      listaOrcService.getLista2($scope.idCliente, function(response, success){
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

  $scope.editar = function(orcamento, negociacao){


    $rootScope.negociacao = negociacao;
    $rootScope.orcamento = orcamento;

    $location.path('editar_orcamento'); // path not hash

  };

  $scope.responder = function(orcamento, negociacao){
    listaOrcService.setPreco(orcamento._id , negociacao._id, negociacao.valor, function(data, success){

      console.log('retornou');

      if(success) {
        console.log('sucesso');
      }
      else {
        console.log('merda deu ');
      }

    });
  };

  $scope.goPagina = function(view){
        $location.path(view); // path not hash
      };

      $scope.listar();

    });
