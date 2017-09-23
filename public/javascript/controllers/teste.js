var serviceApp = angular.module('ep09App', []);

serviceApp.service('statesService', function($http) {
  // privado
  var states = {};
  
  // público
  this.getLetters = function() {
    return "abcdefghijklmnopqrstuvwyz";
  };
  
  this.getToday = function(){
    return new Date();
  };
  
  this.addStateIntoCollection = function(estado, capital, renda) {
    states.push({
      name: estado,
      capital: capital,
      renda: renda
    });
  };

  this.getStates = function(callback) {
    //$http.get('states.json').success(callback);
    $http.get('https://do-my-tattoo.herokuapp.com/account/getProfile/59c5a717b68662b7beb0912b').success(callback);
  };
});

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceApp.controller('controllerEp09', function($scope, statesService) {

  $scope.filtro = "";

  statesService.getStates(function(data){
    $scope.states = data;
  });
  
  $scope.today = statesService.getToday();
  $scope.letras = statesService.getLetters();

  $scope.addState = function() {
    statesService.addStateIntoCollection($scope.estado, $scope.capital, 1000);  
    $scope.estado = '';
    $scope.capital = '';
  };
});