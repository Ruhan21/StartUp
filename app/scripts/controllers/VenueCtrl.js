angular.module('app.venueController', [])

  .controller('VenueCtrl', function ($scope, $state) {

    $scope.people = [
      { name: 'Janet Perkins', img: 'img/100-0.jpeg', newMessage: true },
      { name: 'Mary Johnson', img: 'img/100-1.jpeg', newMessage: false },
      { name: 'Peter Carlsson', img: 'img/100-2.jpeg', newMessage: false }
    ];

    $scope.data = {
      cb1: true,
      cb4: true,
      cb5: false
    };

  });
