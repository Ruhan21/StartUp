angular.module('app.venueController', [])

  .controller('VenueCtrl', function ($scope, $state) {

    $scope.people = [
      {name: 'Janet Perkins', img: '../images/venue/v3.jpg', newMessage: true},
      {name: 'Mary Johnson', img: '../images/venue/v3.jpg', newMessage: false},
      {name: 'Peter Carlsson', img: '../images/venue/v3.jpg', newMessage: false}
    ];

    $scope.data = {
      cb1: true,
      cb4: true,
      cb5: false
    };

    $scope.toggleVenueGuests = function (showId, HideId) {
      $(showId).toggle(500, "swing", function () {
        $(HideId).toggle(500, "swing", function () {

        });
      });
    };

    $scope.vImages = [
      {title: 'title1', src: '../images/venue/v3.jpg'},
      {title: 'title2', src: '../images/venue/v3.jpg'},
      {title: 'title3', src: '../images/venue/v3.jpg'}];

    $scope.Theme = [true,false];

    $scope.changeTheme = function (KeepTheme) {

      angular.forEach($scope.Theme, function(value,key){
        $scope.Theme[key]= false;
      });

      $scope.Theme[KeepTheme] = true;
    }

  });
