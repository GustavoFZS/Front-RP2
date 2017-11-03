var serviceCriaFlw = angular.module('DoMyTattoo');

serviceCriaFlw.directive('ngFiles', ['$parse', function ($parse) {

  function fn_link(scope, element, attrs) {
    var onChange = $parse(attrs.ngFiles);
    element.on('change', function (event) {
      onChange(scope, { $files: event.target.files });
    });
  };

  return {
    link: fn_link
  }
} ])

serviceCriaFlw.service('criaFlwService', function($http) {
  // privado
  var message = {};

  this.novoFlw = function(dataForm, callback) {

    $http({
      method: 'POST',
      url: 'https://do-my-tattoo.herokuapp.com/flashwork/createFlashwork',
      data: dataForm,
      headers: { 'Content-Type': undefined},
      transformRequest: angular.identity
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
  $scope.imagens;
  var formdata = new FormData();

  $scope.enviar = function(){

    formdata.append('tattooArtist', $rootScope.usuario._id);
    formdata.append('style', $scope.estilo._id);
    formdata.append('price', $scope.valor);
    formdata.append('isAuction', $scope.leilao);
    formdata.append('expireDate', $scope.tempo);
    formdata.append('photos', $scope.imagens);

    console.log(formdata + " " + $scope.estilo._id + " " + $scope.valor + " " + $rootScope.usuario._id);

    criaFlwService.novoFlw(formdata, function(data, success){

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

      $scope.getTheFiles = function ($files) {

        $scope.imagens = $files['0'];

      };

      $scope.getEstilos();

    });
