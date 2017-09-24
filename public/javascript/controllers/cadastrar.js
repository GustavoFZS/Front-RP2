var serviceCadastro = angular.module('cadastro', []);

serviceCadastro.service('cadastroService', function($http) {
  // privado
  var message = {};

  this.getCadastro = function(name, user, email, phone, what, 
  instagram, password, type, callback) {

    $http({
      method: 'POST',
      url: 'https://do-my-tattoo.herokuapp.com/account/signup',
      data: { 'email': email, 'userName': user, 'password': password,
      'name': name, 'isCostumer': type, 'phone': {'number': phone,
      'whatsapp': what}, 'instagram': instagram}
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
serviceCadastro.controller('cadastroCtrl', function($scope, cadastroService) {

  $scope.name = "";
  $scope.user = "";
  $scope.email = "";
  $scope.instagram = "";
  $scope.phone = "";
  $scope.what = "";
  $scope.password = "";
  $scope.password2 = "";
  $scope.type = "";

  $scope.cadastrar = function(){
    cadastroService.getCadastro($scope.name, $scope.user, $scope.email, $scope.phone,
    $scope.what, $scope.instagram, $scope.password,  $scope.type, function(data, success){
      console.log('retornou');

      if(success) {
        console.log('sucesso');
      }
      else {
        console.log('nome' + $scope.name+ ' usuario: ' +$scope.user+ ' email: ' +$scope.email+ ' fone: ' +$scope.phone+
    ' zap: ' + $scope.what+ ' insta: ' + $scope.instagram + '  senha: ' +$scope.password+ ' isConstumer ' +$scope.type);
      }

    });
  };


});