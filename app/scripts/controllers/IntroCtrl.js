angular.module('app.introController', [])

  .controller('IntroCtrl', function ($scope,$window, $state) {

    $().ready(function () {
      $("#bride").animate({marginLeft: '0px'}, 1300, 'easeOutBounce');
      $("#groom").animate({marginLeft: '0px'}, 1000, 'easeOutBounce');
    });

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
