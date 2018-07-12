angular.module('newApp').controller('newCtrl', function($scope, mainSrvc) {

  $scope.getNew = function() {
    $scope.data = [];

    mainSrvc.getNew().then(function(response) {
      response.data.articles.forEach(function(current){$scope.data.push(current)});
    });

    mainSrvc.getNew2().then(function(response) {
      response.data.articles.forEach(function(current){$scope.data.push(current)});
    });

    mainSrvc.getNew3().then(function(response) {
      response.data.articles.forEach(function(current){$scope.data.push(current)});
    });

  }

  $scope.getNew();

});
