var serviceOrcamento = angular.module('DoMyTattoo');

serviceOrcamento.service('orcamentoService', function($http) {
  // privado
  var message = {};

  this.getOrcamento = function(idCliente, myArray, tatuador, local, altura, 
      largura, descricao, tatuadorId, callback) {

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
        },
        'negotiations': [
          {
            "tattooArtist": {
              'userName' : tatuador,
              '_id': tatuadorId
            }
          }
        ]    
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
serviceOrcamento.controller('orcamentoCtrl', function($scope, $rootScope, $location, orcamentoService) {

  $scope.idCliente = $rootScope.usuario._id;

  $scope.tatuador = $rootScope.tatuador;

  var myArray = new Array();

  myArray.push("https://fotostatuagens.com/wp-content/uploads/2016/07/Tatuagens-de-Onda.jpg");

  $scope.enviar = function(){
    orcamentoService.getOrcamento($scope.idCliente, myArray, $rootScope.tatuador.userName, $scope.local, $scope.altura, 
      $scope.largura, $scope.descricao, $rootScope.tatuador._id, function(data, success){

      console.log('retornou');

      if(success) {
        console.log('sucesso');
      }
      else {
        console.log('merda deu ' + $scope.idCliente._id);
      }

    });
  };

    $scope.goPagina = function(view){
        $location.path(view); // path not hash
    };

});
