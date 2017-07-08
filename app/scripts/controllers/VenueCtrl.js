angular.module('app.venueController', [])

  .controller('VenueCtrl', function ($scope, $state) {

    $scope.people = [
      {name: 'Janet Perkins', img: '../images/venue/v3.jpg', newMessage: true},
      {name: 'Mary Johnson', img: '../images/venue/v3.jpg', newMessage: false},
      {name: 'Peter Carlsson', img: '../images/venue/v3.jpg', newMessage: false}
    ];
    $scope.showVTop = true;

    $scope.vImgClick = function (showId) {

    $scope.toggleVenueGuests = function (showId, HideId) {
      $(showId).toggle(500, "swing", function () {
        $(HideId).toggle(500, "swing", function () {

        });
      });
    };

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
