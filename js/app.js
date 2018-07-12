angular.module('newApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .when('/random',  function () {
             var random = Math.floor(Math.random() * 5)
             var views = ['/game', '/music', '/news', '/sport', '/technology']
            //  console.log(views[random]);
             return views[random];
           });

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: "./views/home.html",
      })
      .state('game', {
        url: '/game',
        templateUrl: "./views/game.html",
        controller: 'gameCtrl'
      })
      .state('music', {
        url: '/music',
        templateUrl: "./views/music.html",
        controller: 'musicCtrl'
      })
      .state('news', {
        url: '/news',
        templateUrl: "./views/news.html",
        controller: 'newCtrl'
      })
      .state('sport', {
        url: '/sport',
        templateUrl: "./views/sport.html",
        controller: 'sportCtrl'
      })
      .state('technology', {
        url: '/technology',
        templateUrl: "../views/tech.html",
        controller: 'techCtrl'
      })
      .state('random', {
      url: '/random'
    })

    $urlRouterProvider
      .otherwise('/');

  });
