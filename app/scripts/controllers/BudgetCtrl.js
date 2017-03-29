angular.module('app.budgetController', [])

  .controller('BudgetCtrl', function ($scope) {

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

    $scope.labelsDoughnut = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
    $scope.dataDoughnut = [300, 500, 100];
    $scope.optionsDoughnut = {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: 'rgb(255, 99, 132)'
        }
      }
    };



    /////////////////Smart Table/////////////////

    $scope.incomeRowCollection = [
      {description: 'Monthly salary', amount: 26000, monthsLeft: 12, total: 312000},
      {description: 'Monthly salary', amount: 17000, monthsLeft: 12, total: 204000},
      {description: 'Savings', amount: 40000, monthsLeft: 'N/A', total: 40000}
    ];
  });
