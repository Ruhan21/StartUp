angular.module('app',[
  'ui.router',
  'ngMaterial',
  'app.aboutController',
  'app.introController',
  'app.headerController'
])

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        views:{
          templateUrl: 'header.html',
          controller: 'HeaderCtrl',
        }
      })

      .state('root.intro', {
        url: '/',
        views:{
          'container@':{
            templateUrl: 'views/intro.html'
          },
          controller: 'IntroCtrl'
        },
        data: {
          requireLogin: false
        }
      })

      .state('root.about', {
        url: '/',
        views:{
          'container@':{
            templateUrl: 'views/about.html'
          },
          controller: 'AboutCtrl'
        },
        data: {
          requireLogin: false
        }
      })
  });
