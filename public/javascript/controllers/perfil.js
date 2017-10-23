var servicePerfil = angular.module('DoMyTattoo');

servicePerfil.service('perfilService', function($http) {

	this.getLista = function(tattooId, callback) {

		$http({

			method: 'GET',
			url: 'https://do-my-tattoo.herokuapp.com/flashwork/getArtistFlashworks/' + tattooId

		}).then(function (response, success){

			callback(response, true);

		},function (response, error){

			callback(response, error);

		});

	};

});


servicePerfil.controller('perfilCtrl', function($scope, $rootScope, $location, perfilService) {

	$scope.tatuador = $rootScope.tatuador;

	$scope.listar = function(){

		perfilService.getLista($scope.tatuador._id, function(response, success){
			console.log('retornou');

			if(success) {

				$scope.lista = response.data;
				console.log('sucesso ' + $scope.tatuador._id);

			}
			else {

				console.log('deu ruim');

			}

		});

	};

	$scope.chamaPesquisa = function(){

		$rootScope.tatuador = $scope.tatuador;
		console.log($rootScope.tatuador);
    	$location.path('resultado'); // path not hash

    };

    $scope.listar();

});
