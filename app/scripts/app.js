angular.module('app',[
  'ui.router',
  'ngMaterial',
  'app.aboutController',
  'app.introController',
  'app.appController'
])

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/intro');

    $stateProvider
      .state('intro', {
        url: '/intro',
        templateUrl: 'views/intro.html',
        controller: 'IntroCtrl',
        data: {
          requireLogin: false
        }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        data: {
          requireLogin: false
        }
      })
  });
