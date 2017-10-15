angular.module('app',[
  'ui.router',
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
  'ui.bootstrap',
  'firebase',
  'service.func'
])

  .run(
    [          '$rootScope', '$state', '$stateParams', 'func',
      function ($rootScope,   $state,   $stateParams, func) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.isLoading = true;
        func.getAllData();
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
        templateUrl: 'views/admin/admin.html',
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
        templateUrl: 'views/venue/venue.html',
        controller: 'VenueCtrl',
        data: {
          requireLogin: false
        }
      })
  });

