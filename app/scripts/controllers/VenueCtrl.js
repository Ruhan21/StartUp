angular.module('app.venueController', [])

  .controller('VenueCtrl', function ($scope, $state, func) {

    $().ready(function () {
      $("#vContacts").animate({marginTop: '-179px'}, 1000, 'easeOutBounce');
      $("#vTop").animate({marginLeft: '-215px'}, 1300, 'easeOutBounce');
      $("#vMid").animate({marginLeft: '-160px'}, 1100, 'easeOutBounce');
      $("#vBottom").animate({marginLeft: '-215px'}, 1000, 'easeOutBounce');
    });

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

      if ($scope.showVTop) {
        $(showId + '1').animate({width: 'toggle'}, 800, 'easeOutBounce', function () {
          $(showId + '2').animate({width: 'toggle'}, 800, 'easeOutBounce', function () {
            $(showId + '3').animate({width: 'toggle'}, 800, 'easeOutBounce', function () {
              $scope.showVTop = false;
            });
          });
        });
      } else {
        $(showId + '3').animate({width: 'toggle'}, 500, 'easeOutBack', function () {
          $(showId + '2').animate({width: 'toggle'}, 500, 'easeOutBack', function () {
            $(showId + '1').animate({width: 'toggle'}, 500, 'easeOutBack', function () {
              $scope.showVTop = true;
            });
          });
        });
      }
    };

    $scope.switchCard = function (index) {
      $('#CardCarousel').carousel(index);

      $('#Title'+index).addClass('active-card')

      for (var i = 0; i < 3; i++) {
        if(i != index){
          $('#Title'+i).removeClass('active-card')
        }
      }
    }


      $scope.guestTable = func.getGuestsByTables();
      console.log($scope.guestTable);

      var tempGuestTables =  $scope.guestTable;

      $scope.selectTable = function (table, id) {
        angular.forEach($scope.guestTable, function (value, key) {
          if (table === value) {
            $scope.selectedTable = table;
          }
        })
      };

    });
