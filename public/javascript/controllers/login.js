var serviceLogin = angular.module('login', []);

serviceLogin.service('usuarioService', function($http) {
  // privado
  var message = {};

  this.getUsuarios = function($scope, callback) {

    $http({
      method: 'POST',
      url: 'https://do-my-tattoo.herokuapp.com/account/signin',
      data: { 'username': '', 'password': ''}
    }).then(function (success){
      console.log(success);
      callback(success);
    },function (error){
      console.log(error);
      callback(error);
    });
    
  };
});

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceLogin.controller('loginCtrl', function(, usuarioService) {

  usuarioService.getUsuarios(function($scope, data){
    console.log('retornou');
    $scope.message = data;
  
  if ($scope.message.message == 'Usuário não encontrado!') {
    console.log('entro');
  }

  });

});
