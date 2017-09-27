var serviceLogin = angular.module('DoMyTattoo');

serviceLogin.service('usuarioService', function($http) {
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
serviceLogin.controller('loginCtrl', function($scope, $rootScope, $location, usuarioService) {

  $scope.user = ""; //pode ser email ou userName
  $scope.password = "";

  if($rootScope.usuario != null){

    $scope.user = $rootScope.usuario.userName; //pode ser email ou userName
    $scope.password = $rootScope.usuario.password;

  }

  $scope.login = function(){
    usuarioService.getUsuarios($scope.user, $scope.password, function(response, success){
      console.log('retornou');

      if(success) {

        console.log('sucesso' + response.data + ' ' + response.data._id + '');
        $rootScope.usuario = response.data;
        $location.path('pesquisa');

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
