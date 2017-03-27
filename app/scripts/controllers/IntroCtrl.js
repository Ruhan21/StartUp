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


    $scope.numbers = '1//[*]1[%]\n1*2%3';
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

      var allNumbers = numbers.replace( /^\D+/g, '');
      var numArray = [];

      var getNumbersPattern = /\d+/g;
      var tempNum;
      while ((tempNum = getNumbersPattern.exec(allNumbers)) != null) {
        numArray.push(tempNum[0]);
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

          var getNumbersPattern = /\d+/g;
          try{
            var negativeNum = getNumbersPattern.exec(value);
            negativeNum = -Math.abs(negativeNum[0]);
            $scope.negativeNumbersArray.push(negativeNum);
            //console.log(negativeNum);
            number = number.replace(negativeNum.toString(),"");
          }catch (error){

          }

      });

      return number;
    };


    $scope.ifEmptyReturnZero = function(expected,input){
     if($scope.intAdd(input) === expected){
       return true;
     } else {
       return false;
     }
    };

    $scope.allowMultipleNumbers = function(expected,input){
      $scope.numbersArray = [];
      $scope.negativeNumbersArray = [];
     if($scope.intAdd(input) === expected){
       return true;
     } else {
       return false;
     }
    };

    $scope.allowNewLinesBetweenNumbers = function(expected,input){
      $scope.numbersArray = [];
      $scope.negativeNumbersArray = [];
     if($scope.intAdd(input) === expected){
       return true;
     } else {
       return false;
     }
    };

    $scope.supportDifferentDelims = function(expected,input){
      $scope.numbersArray = [];
      $scope.negativeNumbersArray = [];
     if($scope.intAdd(input) === expected){
       return true;
     } else {
       return false;
     }
    };

    $scope.noNegativeNumbers = function(expected,input){
      $scope.numbersArray = [];
      $scope.negativeNumbersArray = [];
     if($scope.intAdd(input) === expected){
       return true;
     } else {
       return false;
     }
    };

    $scope.numbersBiggerThanThousand = function(expected,input){
      $scope.numbersArray = [];
      $scope.negativeNumbersArray = [];
     if($scope.intAdd(input) === expected){
       return true;
     } else {
       return false;
     }
    };

    $scope.delimsAnyLengthFormat = function(expected,input){
      $scope.numbersArray = [];
      $scope.negativeNumbersArray = [];
     if($scope.intAdd(input) === expected){
       return true;
     } else {
       return false;
     }
    };

    $scope.allowMultipleDelims = function(expected,input){
      $scope.numbersArray = [];
      $scope.negativeNumbersArray = [];
     if($scope.intAdd(input) === expected){
       return true;
     } else {
       return false;
     }
    };

    $scope.allowMultipleDelimsOfLength = function(expected,input){
      $scope.numbersArray = [];
      $scope.negativeNumbersArray = [];
     if($scope.intAdd(input) === expected){
       return true;
     } else {
       return false;
     }
    };

    $scope.allowAnything = function(expected,input){
      $scope.numbersArray = [];
      $scope.negativeNumbersArray = [];
     if($scope.intAdd(input) === expected){
       return true;
     } else {
       return false;
     }
    };

    console.log($scope.ifEmptyReturnZero(0,""));
    console.log($scope.allowMultipleNumbers(6,"2,1,1,2"));
    console.log($scope.allowNewLinesBetweenNumbers(6,"1\n2,3"));
    console.log($scope.supportDifferentDelims(3,"//;\n1;2"));
    console.log($scope.noNegativeNumbers(3,"//;\n1;2;-1"));
    console.log($scope.numbersBiggerThanThousand(3,"//;\n1;2;1001"));
    console.log($scope.delimsAnyLengthFormat(6,"//[***]\n1***2***3"));
    console.log($scope.allowMultipleDelims(6,"//[*][%]\n1*2%3"));
    console.log($scope.allowMultipleDelimsOfLength(6,"//[******][%%%%%]\n1******2%%%%%3"));
    console.log($scope.allowAnything(6,"asmhdshadg1sdjfh4asjkdkasd-11111,asdasdjh,1"));

























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
