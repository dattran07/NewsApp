angular.module('newApp').service('mainSrvc', function($http) {

  this.getGame = function() {
    return $http({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles?source=ign&sortBy=top&apiKey=32ae23cd5e7743ff9289cf2702fe3e16'
    })
  };

  this.getMusic = function() {
    return $http({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles?source=mtv-news&sortBy=top&apiKey=32ae23cd5e7743ff9289cf2702fe3e16'
    })
  };

  this.getNew = function() {
    return $http({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles?source=cnn&sortBy=top&apiKey=32ae23cd5e7743ff9289cf2702fe3e16'
    })
  };

  this.getNew2 = function() {
    return $http({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles?source=usa-today&sortBy=top&apiKey=32ae23cd5e7743ff9289cf2702fe3e16'
    })
  };

  this.getNew3 = function() {
    return $http({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=32ae23cd5e7743ff9289cf2702fe3e16'
    })
  };

  this.getSport = function() {
    return $http({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles?source=four-four-two&sortBy=top&apiKey=32ae23cd5e7743ff9289cf2702fe3e16'
    })
  };

  this.getSport2 = function() {
    return $http({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles?source=the-sport-bible&sortBy=top&apiKey=32ae23cd5e7743ff9289cf2702fe3e16'
    })
  };

  this.getSport3 = function() {
    return $http({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles?source=talksport&sortBy=top&apiKey=32ae23cd5e7743ff9289cf2702fe3e16'
    })
  };

  this.getTech = function() {
    return $http({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=32ae23cd5e7743ff9289cf2702fe3e16'
    })
  };

  this.getTech2 = function() {
    return $http({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=32ae23cd5e7743ff9289cf2702fe3e16'
    })
  };

  this.getTech3 = function() {
    return $http({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=32ae23cd5e7743ff9289cf2702fe3e16'
    })
  };


});
