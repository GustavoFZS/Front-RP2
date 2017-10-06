var serviceNavbar = angular.module('DoMyTattoo');

//--- AQUI VAI O CONTROLLER (agora mais magro)
serviceNavbar.controller('navbarCtrl', function($scope, $rootScope, $location) {
 
    $scope.goPagina = function(view){
        $location.path(view); // path not hash
    };
  
});
