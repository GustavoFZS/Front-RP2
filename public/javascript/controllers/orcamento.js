var orcamento = angular.module("orcamento", []);

orcamento.controller("PostCtrl", ['$scope', function($scope, $http){
  var posts = [
    {
      title: 'Publicacao',
      likes: 0
    },
    {
      title: 'Publicacao2',
      likes: 0
    },
    {
      title: 'Publicacao3',
      likes: 0
    }
  ];

  $scope.posts = posts;

  $scope.addLike = function(post) {
    post.likes += 1;
  }

  $scope.removeLike = function(post){
    post.likes -= 1;
  }

  $http({
    method : "POST",
    url : "http://do-my-tattoo.herokuapp.com"
  }).then(function mySuccess(response) {
      $scope.myWelcome = response.data;
    }, function myError(response) {
      $scope.myWelcome = response.statusText;
  });

}]);
