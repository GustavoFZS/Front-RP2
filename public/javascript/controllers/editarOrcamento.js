var serviceEditarOrc = angular.module('DoMyTattoo');

serviceEditarOrc.service('editarOrcService', function($http) {

  this.setOrcamento = function(idCliente, myArray, tatuador, local, altura, 
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

      console.log(success);
      callback(success, true);

    },function (error){

      console.log(error);
      callback(error, false);

    });

  };

  this.setChat = function(orderID, negociacaoID, userID, mensagem, callback) {

    $http({
      method: 'POST',
      url: 'https://do-my-tattoo.herokuapp.com/order/newChat',
      data: {
      	'orderId': orderID,
      	'negotiationId': negociacaoID,
      	'negotiations': [{
      		'chat': [{
      			'senderId': userID,
      			'message': mensagem
      		}]
      	}]
      }

    }).then(function (success){

      console.log(success);
      callback(success, true);

    },function (error){

      console.log(error);
      callback(error, false);

    });

  };

});

serviceEditarOrc.controller('editarOrcCtrl', function($scope, $rootScope, $location, editarOrcService) {

  $scope.orcamento = $rootScope.orcamento;

  $scope.tatuador = $rootScope.orcamento.negotiations[0].tattooArtist;

  $scope.enviar = function(){
    editarOrcService.setOrcamento($scope.idCliente, myArray, $scope.tatuador, $scope.local, $scope.altura, 
      $scope.largura, $scope.descricao, function(data, success){

        console.log('retornou');

        if(success) {
          console.log('sucesso');
          $rootScope.orcamento = $scope;
        }
        else {
          console.log('merda deu ');
        }

      });
  };

  $scope.responder = function(){
    editarOrcService.setPreco($scope.orcamento._id , $scope.orcamento.negotiations[0]._id, $scope.valor, function(data, success){

      console.log('retornou');

      if(success) {
        console.log('sucesso');
      }
      else {
        console.log('merda deu ');
      }

    });
  };

  $scope.comentar = function(){
    editarOrcService.setChat($scope.orcamento._id , $scope.orcamento.negotiations[0]._id, $rootScope.usuario._id, $scope.mensagem, function(data, success){

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

    });
