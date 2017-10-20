var serviceLogin = angular.module('DoMyTattoo');

serviceLogin.service('loginService', function($http) {
  // privado
  var message = {};

  this.getUsuarios = function(user, password, callback) {

    $http({
      method: 'POST',
      url: 'https://do-my-tattoo.herokuapp.com/account/signin',
      data: {
        'email': user,
        'username': user,
        'password': password
      }
    }).then(function (response, success){

      console.log(response.data + " " + response.data.name);
      callback(response, true);
    },function (response, error){
      console.log(error);
      callback(response, error);
    });

  };
});

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceLogin.controller('loginCtrl', function($scope, $rootScope, $location, loginService) {

  $scope.user = ""; //pode ser email ou userName
  $scope.password = "";

  if($rootScope.usuario != null){

    $scope.user = $rootScope.usuario.userName; //pode ser email ou userName
    $scope.password = $rootScope.usuario.password;

  }

  $scope.login = function(){
    loginService.getUsuarios($scope.user, $scope.password, function(response, success){
      console.log('retornou');

      if(success) {

        console.log('sucesso' + response.data + ' ' + response.data._id + '');

        $rootScope.usuario = response.data;

        if(response.data.isCustomer){

          $location.path('pesquisa');
          $rootScope.tipoUsuario = true;

        } else {

          $location.path('lista_orcamento');
          $rootScope.tipoUsuario = false;

        }

      }
      else {

        console.log('deu ruim');
      }

    });
  };

  $scope.vaiCadastrar = function(){
    $location.path('cadastrar'); // path not hash
  };
  
});
