var serviceCriaOrc = angular.module('DoMyTattoo');

serviceCriaOrc.directive('ngFiles', ['$parse', function ($parse) {

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

serviceCriaOrc.service('criaOrcService', function($http) {
  // privado
  var message = {};

  this.novoOrc = function(dataForm, callback) {

    $http({
      method: 'POST',
        url: 'https://do-my-tattoo.herokuapp.com/order/new',
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
});

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceCriaOrc.controller('criaOrcCtrl', function($scope, $rootScope, $location, criaOrcService) {

  $scope.idCliente = $rootScope.usuario._id;

  $scope.tatuador = $rootScope.tatuador;

  var formdata = new FormData();

  $scope.enviar = function(){

    formdata = new FormData();

    formdata.append('customer', $rootScope.usuario._id);
    formdata.append('place', $scope.local);
    formdata.append('size.height', $scope.altura);
    formdata.append('size.width', $scope.largura);
    formdata.append('photos', $scope.imagens);
    formdata.append('negotiations[0][tattooArtist]', $scope.tatuador._id);
    formdata.append('description', $scope.descricao);

    criaOrcService.novoOrc(formdata, function(data, success){

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

  $scope.getTheFiles = function ($files) {

    $scope.imagens = $files['0'];

  };

  $scope.goPagina = function(view){
        $location.path(view); // path not hash
      };

    });
