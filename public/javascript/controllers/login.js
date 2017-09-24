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
serviceLogin.controller('loginCtrl', function($scope, usuarioService) {

  $scope.user = ""; //pode ser email ou userName
  $scope.password = "";

  $scope.login = function(){
    usuarioService.getUsuarios($scope.user, $scope.password, function(data, success){
      console.log('retornou');

      if(success) {
        console.log('sucesso');
      }
      else {
        console.log('deu ruim');
      }

    });
  };


});
