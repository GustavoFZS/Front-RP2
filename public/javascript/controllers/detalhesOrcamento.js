var serviceDetalhes = angular.module('DoMyTattoo');

serviceDetalhes.service('detalhesService', function($http) {
  // privado
  var message = {};

  this.getDetalhes = function(idCliente, myArray, tatuador, local, altura, 
      largura, descricao, callback) {

    $http({
      method: 'POST',
      url: 'https://do-my-tattoo.herokuapp.com/order/new',
      data: {
        'customer': idCliente,
        'place': local,
        "images": [
        ],
        'description': descricao,
        'size': {
          'height': altura,
          'width': largura
        }
      }
    }).then(function (success){

      console.log(success);
      callback(success, true);

    },function (error){

      console.log(error);
      callback(error, false);

    });

  };

  this.setPreco = function(orderID, negociacaoID, preco, callback) {

    $http({
      method: 'PUT',
      url: 'https://do-my-tattoo.herokuapp.com/order/tattooArtistSetPrice/' + orderID + '/' + negociacaoID + '/' + preco,

    }).then(function (success){

      console.log(success + "SDSDSD");
      callback(success, true);

    },function (error){

      console.log(error  + "SDSDSD");
      callback(error, false);

    });

  };

});

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceDetalhes.controller('detalhesCtrl', function($scope, $rootScope, $location, detalhesService) {

  $scope.orcamento = $rootScope.orcamento;

  $scope.tatuador = $rootScope.orcamento.negotiations[0].tattooArtist;

  $scope.enviar = function(){
    detalhesService.getDetalhes($scope.idCliente, myArray, $scope.tatuador, $scope.local, $scope.altura, 
      $scope.largura, $scope.descricao, function(data, success){

      console.log('retornou');

      if(success) {
        console.log('sucesso');
        $rootScope.orcamento = $scope;
      }
      else {
        console.log('merda deu ' + $scope.idCliente._id);
      }

    });
  };

  $scope.responder = function(){
    detalhesService.setPreco($scope.orcamento._id , $scope.orcamento.negotiations[0]._id, $scope.valor, function(data, success){

      console.log('retornou');

      if(success) {
        console.log('sucesso');
      }
      else {
        console.log('merda deu ' + "/" + $scope.orcamento._id  + "/" + $scope.orcamento.negotiations[0]._id + "/" + $scope.valor);
      }

    });
  };

    $scope.goPagina = function(view){
        $location.path(view); // path not hash
    };

});
