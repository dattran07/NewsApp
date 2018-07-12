angular.module('newApp').controller('gameCtrl', function($scope, mainSrvc) {

  $scope.getGame = function() {
    $scope.data = [];

    mainSrvc.getGame().then(function(response) {
      response.data.articles.forEach(function(current){$scope.data.push(current)});
    });

  }

  $scope.getGame();

});
