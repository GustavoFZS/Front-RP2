var serviceLogin = angular.module('login', []);

serviceLogin.service('usuarioService', function($http) {
  // privado
  var usuarios = {};

  this.getStates = function(callback) {

    $http({
      method: 'GET',
      url: 'https://do-my-tattoo.herokuapp.com/account/getProfile/59c5a717b68662b7beb0912b'
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

  usuarioService.getStates(function(data){
    console.log('retornou');
    $scope.usuarios = data;
  });

});
