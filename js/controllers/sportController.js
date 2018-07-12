angular.module('newApp').controller('sportCtrl', function($scope, mainSrvc) {

  $scope.getSport = function() {
    $scope.data = [];

    mainSrvc.getSport().then(function(response) {
      response.data.articles.forEach(function(current){$scope.data.push(current)});
    });

    mainSrvc.getSport2().then(function(response) {
      response.data.articles.forEach(function(current){$scope.data.push(current)});
    });

  }

  $scope.getSport();

});
