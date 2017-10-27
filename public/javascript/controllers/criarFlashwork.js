var serviceCriaFlw = angular.module('DoMyTattoo');

serviceCriaFlw.directive('fileInput', ['$parse', function ($parse) {
  return {
    restrict: 'A',
    link: function (scope, element, attributes) {
      element.bind('change', function () {
        $parse(attributes.fileInput)
        .assign(scope,element[0].files)
        scope.$apply()
      });
    }
  };
}]);

serviceCriaFlw.service('criaFlwService', function($http) {
  // privado
  var message = {};

  this.novoFlw = function(idTatuador, estilo, valor, leilao, tempo, arquivo, callback) {

    $http({
      method: 'POST',
      url: 'https://do-my-tattoo.herokuapp.com/flashwork/createFlashwork',
      data: {
        'tattooArtist': idTatuador,
        'style': estilo,
        'price': valor,
        'isAuction': leilao,
        'expireDate': tempo,
        'photos': arquivo
      }
    }).then(function (success){

      console.log(success);
      callback(success, true);

    },function (error){

      console.log(error);
      callback(error, false);

    });

  };

  this.getEstilos = function(callback) {

    $http({
      method: 'GET',
      url: 'https://do-my-tattoo.herokuapp.com/style/getStyles',

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
serviceCriaFlw.controller('criaFlwCtrl', function($scope, $rootScope, $location, criaFlwService) {

  $scope.tempo = "";

  $scope.enviar = function(){

    criaFlwService.novoFlw($rootScope.usuario._id, $scope.estilo, $scope.valor, $scope.leilao, $scope.tempo, $scope.files[0], function(data, success){

      console.log('retornou');

      if(success) {
        console.log('sucesso');
        alert("Flashwork criado!");
      }
      else {
        console.log('merda deu ');
      }

    });
  };

  $scope.goPagina = function(view){
        $location.path(view); // path not hash
      };

      $scope.getEstilos = function(){
        criaFlwService.getEstilos(function(response, success){

          console.log('retornou');

          $scope.listaEstilos = response.data;
          if(success) {
            console.log('sucesso');
          }
          else {
            console.log('merda deu ');
          }

        });
      };

      $scope.getEstilos();

    });
