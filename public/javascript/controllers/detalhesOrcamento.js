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
            {
                "url": "http://img.izismile.com/img/img4/20110816/640/20_epic_tramp_stamp_tattoos_640_06.jpg",
                "_id": "59c5e26e4b904e3b105bc3b4"
            },
            {
                "url": "http://www.artenocorpo.com/sites/www.artenocorpo.com/files/tatuagens-de-bocas-9.jpg",
                "_id": "59c5e26e4b904e3b105bc3b3"
            }
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
});

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceDetalhes.controller('detalhesCtrl', function($scope, $rootScope, $location, detalhesService) {

  $scope.orcamento = $rootScope.orcamento;

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


});
