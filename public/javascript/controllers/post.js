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

  // $http.get('http://rest-service.guides.spring.io/greeting').then(function(response) {
  //   $scope.greeting = response.data;
  // });







}]);
