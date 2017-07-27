angular.module('app.adminController', [])

  .controller('AdminCtrl', function ($scope,$timeout, $mdDialog) {

    $scope.clickNavItem = function (id) {
      $scope.navItemButtons = {navOverview: false, navIncome:false, navExpenses:false, navGuests:false}
      $scope.navItemButtons[id] = !$scope.navItemButtons[id]
    }


    ///////////////////////////////main graphs///////////////////////////////////

    /////////////forecast//////////////////////////////////////////

    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.datasetOverride = [{yAxisID: 'y-axis-1'}, {yAxisID: 'y-axis-2'}];
    $scope.options = {
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left'
          },
          {
            id: 'y-axis-2',
            type: 'linear',
            display: true,
            position: 'right'
          }
        ]
      }
    };

    /////////////////////Doughnut//////////////////////

    $scope.labelsDoughnut = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.dataDoughnut = [300, 500, 100];
    $scope.optionsDoughnut = {
      legend: {
        display: false,
        position: "right",
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      }
    };

    /////////////////////Pie//////////////////////

    $scope.labelsPie = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.dataPie = [300, 500, 100];
    $scope.optionsPie = {
      legend: {
        display: true,
        position: "right",
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      }
    };

    /////////////////Bar chart///////////////////////////

    $scope.labelsBar = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    $scope.seriesBar = ['Series A', 'Series B' ,'Series C'];

    $scope.dataBar = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90],
      [66, 64, 71, 45, 35, 75, 44]
    ];

    $scope.optionsBar = {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      }
    };


    /////////////////////GuestList//////////////////////////

    var imagePath = 'img/list/60.jpeg';

    $scope.phones = [
      {
        type: 'Home',
        number: '(555) 251-1234',
        options: {
          icon: 'communication:phone'
        }
      },
      {
        type: 'Cell',
        number: '(555) 786-9841',
        options: {
          icon: 'communication:phone',
          avatarIcon: true
        }
      },
      {
        type: 'Office',
        number: '(555) 314-1592',
        options: {
          face : imagePath
        }
      },
      {
        type: 'Offset',
        number: '(555) 192-2010',
        options: {
          offset: true,
          actionIcon: 'communication:phone'
        }
      }
    ];
    $scope.todos = [
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face : imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
    ];

  })

  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  });

