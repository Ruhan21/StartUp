angular.module('app.adminController', [])

  .controller('AdminCtrl', function ($scope, $timeout, $mdDialog) {
    $scope.navItemButtons = {
      navOverview: false,
      navIncome: false,
      navExpenses: false,
      navGuests: false,
      navOverviewMobile: false,
      navIncomeMobile: false,
      navExpensesMobile: false,
      navGuestsMobile: false
    }
    $scope.navItemButtons.navOverview = true;

    $scope.clickNavItem = function (id) {
      $scope.navItemButtons = {
        navOverview: false,
        navIncome: false,
        navExpenses: false,
        navGuests: false,
        navOverviewMobile: false,
        navIncomeMobile: false,
        navExpensesMobile: false,
        navGuestsMobile: false
      }
      $scope.navItemButtons[id] = !$scope.navItemButtons[id]
    };


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
    $scope.seriesBar = ['Series A', 'Series B', 'Series C'];

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
          face: imagePath
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
        face: imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face: imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face: imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face: imagePath,
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
      },
      {
        face: imagePath,
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
          $log.debug('close LEFT is done')
        })

    }
  })

  .controller('IncomeCtrl', function ($scope) {

    $scope.searchInput = ""
    $scope.newItem = {type: "Monthly"};

    $scope.incomeTable = [{type: "Monthly", description: 'Salary', amount: 5000},
      {type: "Once off", description: 'Donation', amount: 3500}]

    $scope.incomeOptions = ["Monthly","Once off"];

    $scope.addItem = function () {
      $scope.incomeTable.push($scope.newItem)
    };

    $scope.removeItem = function(item){

    };

    $scope.searchFilter = function (input) {
      return {description:input}
    };

    $scope.totalIncome = function () {
      var Total = 0
      angular.forEach($scope.incomeTable,function (value) {
        Total += value.amount
      })

      return Total
    }
  })

  .controller('ExpenseCtrl', function ($scope) {

    $scope.searchInput = ""
    $scope.newItem = {type: "Stationary" , selected: false};

    $scope.expenseTable = [{selected: true , type: "Stationary", description: 'Salary', amount: 5000 , quantity:1},
      {selected: true, type: "Bridal attire", description: 'Donation', amount: 3500, quantity:2}]

    $scope.expenseOptions = ["Stationary","Bridal attire"];

    $scope.addItem = function () {
      $scope.expenseTable.push($scope.newItem)
    };

    $scope.removeItem = function(item){

    };

    $scope.searchFilter = function (input) {
      return {description:input}
    };

    $scope.totalExpense = function () {
      var Total = 0

      angular.forEach($scope.expenseTable,function (value) {
        if(value.selected){
          var costQuantity = value.amount * value.quantity;
          Total += costQuantity
        }
      });

      return Total
    }
  })

  .controller('GuestsCtrl', function ($scope) {

    $scope.searchInput = ""
    $scope.newItem = {type: "Family" , going: false};

    $scope.guestsTable = [{going: true , type: "Friend", name: 'Ruhan' ,surname:"Odendaal"},
      {going: true , type: "Family", name: 'Boraine' ,surname:"Barnard"}]

    $scope.guestsOptions = ["Family","Friend","Groom's men"];

    $scope.addItem = function () {
      $scope.guestsTable.push($scope.newItem)
    };

    $scope.removeItem = function(item){

    };

    $scope.searchFilter = function (input) {
      return {name:input}
    };

    $scope.totalGuestsGoing = function () {
      var Total = 0

      angular.forEach($scope.guestsTable,function (value) {
        if(value.going){
          Total ++
        }
      });

      return Total
    }
  });

