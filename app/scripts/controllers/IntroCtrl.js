angular.module('app.introController', [])

  .controller('IntroCtrl', function ($scope,$window, $state) {
    $scope.onSwipeRight = function() {
      alert('You swiped right!!');
    };

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


    // string kata /////////////////////////////////////////////////////////


    $scope.numbers = '/-1/[*][%]\n1*2%3$-5;10001%-500;-1';
    $scope.numbersArray = [];
    $scope.negativeNumbersArray = [];


    $scope.intAdd = function(numbers){
      if(numbers.length <= 0){
        return 0
      }else{
        numbers = $scope.checkForNegatives(numbers);
        $scope.getNumbers(numbers);
        var sum = $scope.numbersArray.reduce(function(a,b){return a + b;},0);
        return sum;
      }
    };

    $scope.getNumbers = function (numbers) {

      var thenum = numbers.replace( /^\D+/g, '');
      var numArray = [];
      console.log(thenum);

      var r = /\d+/g;
      var m;
      while ((m = r.exec(thenum)) != null) {
        numArray.push(m[0]);
      }

      angular.forEach(numArray,function(value){
        if(!isNaN(value) && value <= 1000) {
          $scope.numbersArray.push(parseInt(value));
        }
      });

    };

    $scope.checkForNegatives = function (number) {

      var part = number.split('-');
      part.shift();

      angular.forEach(part,function(value){
        var r = /\d+/g;
        var negativeNum = r.exec(value);
        negativeNum = -Math.abs(negativeNum[0]);
        $scope.negativeNumbersArray.push(negativeNum);
        console.log(negativeNum);
        number = number.replace(negativeNum.toString(),"");
      });

      return number;
    };

    console.log($scope.intAdd($scope.numbers));

























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
