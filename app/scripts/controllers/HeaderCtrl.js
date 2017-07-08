angular.module('app.headerController', [])

  .controller('HeaderCtrl', function ($scope, $state) {

    $scope.topDirections = ['left', 'up'];
    $scope.bottomDirections = ['down', 'right'];
    $scope.isOpen = true;
    $scope.availableModes = ['md-fling', 'md-scale'];
    $scope.selectedMode = 'md-fling';
    $scope.availableDirections = ['up', 'down', 'left', 'right'];
    $scope.selectedDirection = 'right';

  });


