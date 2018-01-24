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
  'app.venueController',
  'app.testComponent',
  'app.introComponent',
  'app.aboutComponent',
  'app.venueComponent',
  'app.dashboardComponent',
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

  .config(function ($stateProvider, $urlServiceProvider) {

    $urlServiceProvider.rules.otherwise({ state: 'introComponent' });

    $stateProvider

      .state('introComponent', {
        url: '/intro',
        component: 'intro'
      })

      .state('aboutComponent', {
        url: '/about',
        component: 'about'
      })

      .state('venueComponent', {
        url: '/venue',
        component: 'venue'
      })

      .state('dashboardComponent', {
        url: '/dashboard',
        component: 'dashboard'
      })

      .state('testComponent', {
        url: '/testComponent',
        component: 'test',
        resolve: {
          test: function(func) {
            return func.testComponentName;
          }
        }
      })

      .state('testComponent2', {
        url: '/testRoute',
        component: 'test2'
      })

      // .state('intro', {
      //   url: '/',
      //   templateUrl: 'views/intro.html',
      //   controller: 'IntroCtrl',
      //   data: {
      //     requireLogin: false
      //   }
      // })
      //
      // .state('about', {
      //   url: '/about',
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   data: {
      //     requireLogin: false
      //   }
      // })
      //
      // .state('admin', {
      //   url: '/admin',
      //   templateUrl: 'views/admin/admin.html',
      //   controller: 'AdminCtrl',
      //   data: {
      //     requireLogin: false
      //   }
      // })
      //
      // .state('budget', {
      //   url: '/budget',
      //   templateUrl: 'views/budget.html',
      //   controller: 'BudgetCtrl',
      //   data: {
      //     requireLogin: false
      //   }
      // })
      //
      // .state('venue', {
      //   url: '/venue',
      //   templateUrl: 'views/venue/venue.html',
      //   controller: 'VenueCtrl',
      //   data: {
      //     requireLogin: false
      //   }
      // })
  });

