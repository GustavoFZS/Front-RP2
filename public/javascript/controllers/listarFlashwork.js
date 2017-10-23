var serviceFlwLista = angular.module('DoMyTattoo');

serviceFlwLista.service('listaFlwService', function($http) {

  this.getLista = function(callback) {

    $http({

      method: 'GET',
      url: 'https://do-my-tattoo.herokuapp.com/flashwork/getRandomFlashworks'

    }).then(function (response, success){

      callback(response, true);

    },function (response, error){

      callback(response, error);

    });

  };

  this.makeBid = function(flashworkId, userId, price, callback) {

    $http({

      method: 'POST',
      url: 'https://do-my-tattoo.herokuapp.com/flashwork/makeBid',
      data : {
        "flashworkId": flashworkId,
        "bid": {
          "user": userId,
          "price": price
        }
      }

    }).then(function (response, success){

      callback(response, true);

    },function (response, error){

      callback(response, error);

    });

  };

});

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceFlwLista.controller('listaFlwCtrl', function($scope, $rootScope, $location, listaFlwService) {

  $scope.valor = 12;
  $scope.idCliente = $rootScope.usuario._id;

  $scope.listar = function(){

    if($rootScope.tipoUsuario){

      listaFlwService.getLista(function(response, success){
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

  $scope.bid = function(flashworkId){

    listaFlwService.makeBid(flashworkId ,$scope.idCliente, $scope.valor, function(response, success){
      console.log('retornou');

      if(success) {

        console.log('sucesso' + $scope.valor);

      }
      else {

        console.log('deu ruim');

      }

    });

  };

  $scope.formataData = function(data){
    var d = new Date(data);
    return (d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + " - " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
  };


  $scope.goPagina = function(view){
        $location.path(view); // path not hash
      };

  
  $scope.perfil = function(tatuador){

    console.log(tatuador);
    $rootScope.tatuador = tatuador;
    $location.path('perfil'); // path not hash

  };

      $scope.listar();

    });