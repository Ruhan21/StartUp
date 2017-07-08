angular.module('app.aboutController', [])

  .controller('AboutCtrl', function ($scope, $timeout, $state) {
    // $scope.play = function() {
    //   $scope.animate = !$scope.animate;
    // };


    $scope.p1 = false;
    $scope.p2 = false;

    (function () {

      $timeout(function () {
        $scope.p1 = true;
      }, 1000);

      $timeout(function () {
        $scope.p2 = true;
      }, 2000);

    }());

    $scope.onSwipeLeft = function() {
      console.log('heloo');
      $state.go('about');
    };

    // $scope.onSwipeRight = function(){
    //   console.log('heloo');
    //   $state.go('about');
    // }

  });
