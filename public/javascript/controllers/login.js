var serviceLogin = angular.module('login', []);

serviceLogin.service('usuarioService', function($http) {
  // privado
  var usuarios = {};

  this.getStates = function(callback) {

    $http({
      method: 'POST',
      url: 'https://do-my-tattoo.herokuapp.com/account/signin',
      data: { 'username': 'josefsn', 'password': '1234'}
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
serviceLogin.controller('loginCtrl', function($scope, usuarioService) {

  $scope.userName = 'teste';

  usuarioService.getStates(function(data){
    console.log('retornou');
    $scope.usuarios = data;
  });

});
