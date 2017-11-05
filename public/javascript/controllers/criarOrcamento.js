var serviceCriaOrc = angular.module('DoMyTattoo');

serviceCriaOrc.service('criaOrcService', function($http) {
  // privado
  var message = {};

  this.novoOrc = function(idCliente, myArray, tatuador, local, altura, 
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
serviceCriaOrc.controller('criaOrcCtrl', function($scope, $rootScope, $location, criaOrcService) {

  $scope.idCliente = $rootScope.usuario._id;

  $scope.tatuador = $rootScope.tatuador;

  var myArray = new Array();
  var formdata = new FormData();

  myArray.push("https://fotostatuagens.com/wp-content/uploads/2016/07/Tatuagens-de-Onda.jpg");

  $scope.enviar = function(){

    formdata.append('customer', $rootScope.usuario._id);
    formdata.append('place', $scope.estilo._id);
    formdata.append('description', $scope.valor);
    formdata.append('height', $scope.leilao);
    formdata.append('width', $scope.tempo);
    formdata.append('photos', $scope.imagens);
    formdata.append('tattooArtist', $rootScope.usuario._id);
    formdata.append('style', $scope.estilo._id);
    formdata.append('price', $scope.valor);
    formdata.append('isAuction', $scope.leilao);
    formdata.append('expireDate', $scope.tempo);
    formdata.append('photos', $scope.imagens);

    criaOrcService.novoOrc($scope.idCliente, myArray, $rootScope.tatuador.userName, $scope.local, $scope.altura, 
      $scope.largura, $scope.descricao, $rootScope.tatuador._id, function(data, success){

        console.log('retornou');

        if(success) {
          console.log('sucesso');
          swal(
            'Orçamento criado!',
            'Seu orçamento foi enviado para o tatuador.',
            'success'
            );
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
