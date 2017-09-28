var serviceCadastro = angular.module('DoMyTattoo');

serviceCadastro.service('cadastroService', function($http) {
  // privado
  var message = {};

  this.getCadastro = function(name, user, email, phone, what,
  instagram, password, tipo, callback) {

    console.log(tipo + " teste");

    $http({
      method: 'POST',
      url: 'https://do-my-tattoo.herokuapp.com/account/signup',
      data: {
        'email': email,
        'userName': user,
        'password': password,
        'name': name,
        'isCustomer': tipo,
        'phone': {
          'number': phone,
          'whatsapp': what
        },
        'instagram': instagram
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
serviceCadastro.controller('cadastroCtrl', function($scope, $rootScope, $location, cadastroService) {

  $scope.name = "";
  $scope.user = "";
  $scope.email = "@gmail.com";
  $scope.instagram = "";
  $scope.phone = "";
  $scope.what = "";
  $scope.password = "";
  $scope.password2 = "";
  $scope.tipo = "";
  $rootScope.usuario = "";

  console.log($scope.tipo);

  $scope.cadastrar = function(){

    if($scope.tipo == 0){

      $scope.tipoFt = false;

    } else {

      $scope.tipoFt = true;

    }

    cadastroService.getCadastro($scope.name, $scope.user, $scope.email, $scope.phone,
    $scope.what, $scope.instagram, $scope.password,  $scope.tipoFt, function(data, success){
      console.log('retornou');

      if(success) {
        console.log('sucesso');
        $rootScope.usuario = $scope;
        $location.path('login'); // path not hash
      }
      else {
        console.log('merda deu');
      }

    });
  };


});
