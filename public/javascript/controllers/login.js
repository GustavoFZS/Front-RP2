var serviceLogin = angular.module('login', []);

serviceLogin.service('usuarioService', function($http) {
  // privado
  var usuarios = {};

  this.getStates = function(callback) {
    //$http.get('states.json').success(callback);
    $http.get('https://do-my-tattoo.herokuapp.com/account/getProfile/59c5a717b68662b7beb0912b').success(callback);
  };
});

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceLogin.controller('loginCtrl', function($scope, usuarioService) {

  usuarioService.getStates(function(data){
    $scope.usuarios = data;
  });

});