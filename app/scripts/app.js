angular.module('app',[
  'ui.router',
  'ngMaterial',
  'app.aboutController',
  'app.introController',
  'app.headerController'
])

  .run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
    ]
  )

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('intro', {
        url: '/',
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
