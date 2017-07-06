angular.module('app.venueController', [])

  .controller('VenueCtrl', function ($scope, $state) {

    $scope.showVTop = true;

    $scope.vImgClick = function (showId) {

      if($scope.showVTop){
        $(showId+'1').animate({width: 'toggle'}, 800, 'easeOutBounce', function () {
          $(showId+'2').animate({width: 'toggle'}, 800, 'easeOutBounce', function () {
            $(showId+'3').animate({width: 'toggle'}, 800, 'easeOutBounce', function () {
              $scope.showVTop = false;
            });
          });
        });
      } else {
        $(showId+'3').animate({width: 'toggle'}, 500, 'easeOutBack', function () {
          $(showId+'2').animate({width: 'toggle'}, 500, 'easeOutBack', function () {
            $(showId+'1').animate({width: 'toggle'}, 500, 'easeOutBack', function () {
              $scope.showVTop = true;
            });
          });
        });
      }



    }

  });
