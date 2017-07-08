angular.module('app.introController', [])

  .controller('IntroCtrl', function ($scope,$window, $state) {

    $().ready(function () {
      $("#bride").animate({marginLeft: '0px'}, 1300, 'easeOutBounce');
      $("#groom").animate({marginLeft: '0px'}, 1000, 'easeOutBounce');
      console.log('animate');
    });

    $scope.landingHeight = 679;

    $scope.$watch(function() {
      return $window.innerWidth; // Return the window width value
    }, function(newValue) {

      if(newValue < 992){
        document.getElementById('bride').style.height = $scope.landingHeight - 100 +'px';
        document.getElementById('groom').style.height = $scope.landingHeight - 100 +'px';
      }

      if(newValue >= 992){
        document.getElementById('bride').style.height = $scope.landingHeight +'px';
        document.getElementById('groom').style.height = $scope.landingHeight +'px';
      }

      if(newValue < 480){
        document.getElementById('bride').style.height = $scope.landingHeight - 200 +'px';
        document.getElementById('groom').style.height = $scope.landingHeight - 200 +'px';
      }

      if(newValue < 360){
        document.getElementById('bride').style.height = $scope.landingHeight - 300 +'px';
        document.getElementById('groom').style.height = $scope.landingHeight - 300 +'px';
      }

    });

    angular.element($window).on('resize', function() {
      $scope.$apply(); // Make sure the scope knows something has changed
    });


    $scope.section2 = false;

    $scope.animateClick = function(){
      console.log('clicked');
      $scope.section2 = !$scope.section2;
    };

  })

  .directive("scroll", function ($window) {
  return function(scope, element, attrs) {
    angular.element($window).bind("scroll", function() {
      if (this.pageYOffset >= 500) {
        scope.boolChangeClass = true;
        console.log('Scrolled below header.');
      } else {
        scope.boolChangeClass = false;
        console.log('Header is in view.');
      }
      scope.$apply();
    });
  };
});
