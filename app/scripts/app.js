angular.module('app',[
  'ui.router',
  'inputDirectives',
  'ngMaterial',
  'ngSanitize',
  'ui.bootstrap',
  'smart-table',
  'chart.js',
  'app.aboutController',
  'app.introController',
  'app.headerController',
  'app.adminController',
  'app.budgetController',
  'app.venueController',
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

      .state('admin', {
        url: '/admin',
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        data: {
          requireLogin: false
        }
      })

      .state('budget', {
        url: '/budget',
        templateUrl: 'views/budget.html',
        controller: 'BudgetCtrl',
        data: {
          requireLogin: false
        }
      })

      .state('venue', {
        url: '/venue',
        templateUrl: 'views/venue.html',
        controller: 'VenueCtrl',
        data: {
          requireLogin: false
        }
      })
  });

