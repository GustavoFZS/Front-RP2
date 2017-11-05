var serviceEditarOrc = angular.module('DoMyTattoo');

serviceEditarOrc.service('editarOrcService', function($http) {

	this.setOrcamento = function(idCliente, tatuador, local, altura, 
		largura, descricao, callback) {

		$http({
			method: 'POST',
			url: 'https://do-my-tattoo.herokuapp.com/order/new',
			data: {
				'customer': idCliente,
				'place': local,
				"images": [
				],
				'description': descricao,
				'size': {
					'height': altura,
					'width': largura
				}
			}
		}).then(function (success){

			console.log(success);
			callback(success, true);

		},function (error){

			console.log(error);
			callback(error, false);

		});

	};

	this.setPreco = function(orderID, negociacaoID, preco, callback) {

		$http({
			method: 'PUT',
			url: 'https://do-my-tattoo.herokuapp.com/order/tattooArtistSetPrice/' + orderID + '/' + negociacaoID + '/' + preco,

		}).then(function (success){

			console.log(success);
			callback(success, true);

		},function (error){

			console.log(error);
			callback(error, false);

		});

	};

	this.setChat = function(orderID, negociacaoID, userID, mensagem, callback) {

		$http({
			method: 'POST',
			url: 'https://do-my-tattoo.herokuapp.com/order/newChat',
			data: {
				'orderId': orderID,
				'negotiationId': negociacaoID,
				'senderId': userID,
				'message': mensagem
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

serviceEditarOrc.controller('editarOrcCtrl', function($scope, $rootScope, $location, editarOrcService) {

	$scope.orcamento = $rootScope.orcamento;

	$scope.negociacao = $rootScope.negociacao;

	$scope.dataId;

	var ultimaData = "0";

	$scope.enviar = function(){
		editarOrcService.setOrcamento($scope.idCliente, $scope.negociacao.tattooArtist, $scope.local, $scope.altura, 
			$scope.largura, $scope.descricao, function(data, success){

				console.log('retornou');

				if(success) {
					console.log('sucesso');
					$rootScope.orcamento = $scope;
					swal(
						'Enviado!',
						'Seu orçamento foi enviada.',
						'success'
						);
				}
				else {
					console.log('merda deu ');
				}

			});
	};

	$scope.responder = function(){
		editarOrcService.setPreco($scope.orcamento._id , $scope.negociacao._id, $scope.valor, function(data, success){

			console.log('retornou');

			if(success) {
				console.log('sucesso');
				swal(
					'Enviado!',
					'Sua proposta foi enviada.',
					'success'
					);
			}
			else {
				console.log('merda deu ');
			}

		});
	};

	$scope.comentar = function(){
		editarOrcService.setChat($scope.orcamento._id , $scope.negociacao._id, $rootScope.usuario._id, $scope.mensagem, function(data, success){
			console.log('retornou');

			if(success) {
				console.log('sucesso');
				$scope.mensagem = '';
				swal(
					'respondido!',
					' ',
					'success'
					);
			}
			else {
				console.log('merda deu ');
			}

		});
	};

	$scope.goPagina = function(view){
        $location.path(view); // path not hash
    };

    $scope.dateFromObjectId = function (objectId) {
    	var d = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    	return (d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear());
    };

    $scope.timeFromObjectId = function (objectId) {
    	var d = new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
    	return ("[" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "]");
    };

    $scope.comparaData = function (data) {
    	console.log(ultimaData + " " + $scope.dateFromObjectId(data));
    	resultado = $scope.dateFromObjectId(data) === ultimaData;
    	ultimaData = $scope.dateFromObjectId(data);
    	return resultado;
    };

});
