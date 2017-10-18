angular.module('app.adminController', [])

  .controller('AdminCtrl', function ($scope, func, $timeout, $mdDialog, $rootScope) {
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

    $scope.initiateDougnut = function () {
      $scope.labelsDoughnut = ['income'];
      $scope.dataDoughnut = func.getChartData("incomeTable");
      $scope.optionsDoughnut = {
        legend: {
          display: false,
          position: "right",
          labels: {
            fontColor: 'rgb(255, 99, 132)'
          }
        }
      };
    };

    /////////////////////Pie//////////////////////

    $scope.initiateExpensesPie = function () {
      var dataArray = func.getExpenseDetailedData();
      $scope.labelsPie = dataArray[0];
      $scope.dataPie = dataArray[1];
      $scope.optionsPie = {
        legend: {
          display: true,
          position: "right",
          labels: {
            fontColor: 'rgb(255, 99, 132)'
          }
        }
      };
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


    /////////////////////ExpenseList//////////////////////////

    $scope.expenseList = func.expenseTable;

    $scope.expenseListFilter = function (item) {
        return func.selectedExpenseFilter(item)
    };

    $scope.expenseListEdit = function (item) {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth()+1; //January is 0!

      let yyyy = today.getFullYear();
      if(dd<10){
        dd='0'+dd;
      }
      if(mm<10){
        mm='0'+mm;
      }

      today = dd+'/'+mm+'/'+yyyy;

      item.datePaid = today;
      func.EditList('expenseTable',item);
    }

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

  .controller('IncomeCtrl', function ($scope, func) {

    $scope.incomeTable = func.incomeTable;

    $scope.searchInput = "";

    $scope.newItem = {type: "Monthly"};

    $scope.incomeOptions = ["Monthly","Once off"];

    $scope.addItem = function () {
      func.AddToList("incomeTable",$scope.newItem)
    };

    $scope.removeItem = function(item){
      func.RemoveFromList("incomeTable",item)
    };

    $scope.editItem = function (item) {
      func.EditList("incomeTable",item)
    };

    $scope.searchFilter = function (input) {
      return {description:input}
    };

    $scope.total = function () {
      return func.SumAmount("incomeTable");
    };
  })

  .controller('ExpenseCtrl', function ($scope,func,$filter) {

    $scope.expenseTable = func.expenseTable;
    $scope.expenseOptions = func.lookups;
    $scope.searchInput = "";
    $scope.newItem = {selected: false};

    $scope.showDropdown = false;

    $scope.selectItem = function (item) {
      $scope.newItem.type = item;
      $scope.showDropdown = false;
    };

    $scope.showDropdownChange = function () {
      $scope.newExpenseType = $scope.newItem.type;
      $scope.expenseOptions2 = [];

      angular.forEach($scope.expenseOptions,function (value) {
        if(value.$value.indexOf($scope.newItem.type) != -1){
          $scope.expenseOptions2.push(value);
        }
      });

      if ($scope.expenseOptions2.length > 0){
        $scope.showDropdown = true;
        $scope.newExpenseType = undefined
      } else {
        $scope.showDropdown = false;
        $scope.newExpenseType = $scope.newItem.type;
      }

      return $scope.showDropdown
    };

    $scope.addItem = function () {
      func.AddToList("expenseTable",$scope.newItem)

      if($scope.newExpenseType != undefined){
        func.AddToLookups("expenseTable",$scope.newExpenseType)
      }
    };

    $scope.removeItem = function(item){
      func.RemoveFromList("expenseTable",item)
    };

    $scope.editItem = function (item) {
      func.EditList("expenseTable",item)
    };

    $scope.total = function () {
      return func.SumAmount("expenseTable");
    };

    $scope.searchFilter = function (input) {
      return {description:input}
    };
  })

  .controller('GuestsCtrl', function ($scope, func) {

    $scope.guestsTable = func.guestsTable;
    $scope.searchInput = ""
    $scope.newItem = {type: "Family" , going: false};
    $scope.guestsOptions = ["Family","Friend","Groom's men"];

    $scope.addItem = function () {
      func.AddToList("guestsTable",$scope.newItem)
    };

    $scope.removeItem = function(item){
      func.RemoveFromList("guestsTable",item)
    };

    $scope.editItem = function (item) {
      func.EditList("guestsTable",item)
    };

    $scope.total = function () {
      return func.SumGuests()[0];
    };

    $scope.totalGoing = function () {
      return func.SumGuests()[1];
    };

    $scope.searchFilter = function (input) {
      return {name:input}
    };
  });

