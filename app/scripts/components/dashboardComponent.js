angular.module('app.dashboardComponent',[])

.component('dashboard',{
  controller:function (func) {
    var vm = this;

    vm.$onInit = function () {
      vm.expenseList = func.expenseTable;

      ///////////////////////////////main graphs///////////////////////////////////

      vm.navItemButtons = {
        navOverview: false,
        navIncome: false,
        navExpenses: false,
        navGuests: false,
        navOverviewMobile: false,
        navIncomeMobile: false,
        navExpensesMobile: false,
        navGuestsMobile: false
      };
      vm.navItemButtons.navOverview = true;

      vm.clickNavItem = function (id) {
        vm.navItemButtons = {
          navOverview: false,
          navIncome: false,
          navExpenses: false,
          navGuests: false,
          navOverviewMobile: false,
          navIncomeMobile: false,
          navExpensesMobile: false,
          navGuestsMobile: false
        };
        vm.navItemButtons[id] = !vm.navItemButtons[id]
      };

      /////////////forecast//////////////////////////////////////////

      vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
      vm.series = ['Series A', 'Series B'];
      vm.data = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
      ];
      vm.onClick = function (points, evt) {
        console.log(points, evt);
      };
      vm.datasetOverride = [{yAxisID: 'y-axis-1'}, {yAxisID: 'y-axis-2'}];
      vm.options = {
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

      /////////////////Bar chart///////////////////////////

      vm.labelsBar = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
      vm.seriesBar = ['Series A', 'Series B', 'Series C'];

      vm.dataBar = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90],
        [66, 64, 71, 45, 35, 75, 44]
      ];

      vm.optionsBar = {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            fontColor: 'rgb(255, 99, 132)'
          }
        }
      };
    };

    /////////////////////Doughnut//////////////////////

    vm.initiateDougnut = function () {
      vm.labelsDoughnut = ['income'];
      vm.dataDoughnut = func.getChartData("incomeTable");
      vm.optionsDoughnut = {
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

    vm.initiateExpensesPie = function () {
      var dataArray = func.getExpenseDetailedData();
      vm.labelsPie = dataArray[0];
      vm.dataPie = dataArray[1];
      vm.optionsPie = {
        legend: {
          display: true,
          position: "right",
          labels: {
            fontColor: 'rgb(255, 99, 132)'
          }
        }
      };
    };

    /////////////////////ExpenseList//////////////////////////

    vm.expenseListFilter = function (item) {
      return func.selectedExpenseFilter(item)
    };

    vm.expenseListEdit = function (item) {
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

  },
  templateUrl: 'views/admin/admin.html'
});
