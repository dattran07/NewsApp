angular.module('newApp').controller('musicCtrl', function($scope, mainSrvc) {

  $scope.getMusic = function() {
    $scope.data = [];

    mainSrvc.getMusic().then(function(response) {
      response.data.articles.forEach(function(current){$scope.data.push(current)});
    });

  }

  $scope.getMusic();

});
