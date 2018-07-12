angular.module('newApp').controller('techCtrl', function($scope, mainSrvc) {

  $scope.getTech = function() {
    $scope.data = [];

    mainSrvc.getTech().then(function(response) {
      response.data.articles.forEach(function(current){$scope.data.push(current)});
    });

    mainSrvc.getTech2().then(function(response) {
      response.data.articles.forEach(function(current){$scope.data.push(current)});
    });

    mainSrvc.getTech3().then(function(response) {
      response.data.articles.forEach(function(current){$scope.data.push(current)});
    });


  }

  $scope.getTech();

});
