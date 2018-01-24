angular.module('app.venueComponent',[])

.component('venue',{
  controller:function ($state, func) {

    var vm = this;

    vm.$onInit = function () {
      vm.guestTable = func.getGuestsByTables();

      vm.people = [
        {name: 'Janet Perkins', img: '../images/venue/v3.jpg', newMessage: true},
        {name: 'Mary Johnson', img: '../images/venue/v3.jpg', newMessage: false},
        {name: 'Peter Carlsson', img: '../images/venue/v3.jpg', newMessage: false}
      ];
      vm.showVTop = true;
    };

    $().ready(function () {
      $("#vContacts").animate({marginTop: '-179px'}, 1000, 'easeOutBounce');
      $("#vTop").animate({marginLeft: '-215px'}, 1300, 'easeOutBounce');
      $("#vMid").animate({marginLeft: '-160px'}, 1100, 'easeOutBounce');
      $("#vBottom").animate({marginLeft: '-215px'}, 1000, 'easeOutBounce');
    });

    vm.vImgClick = function (showId) {

      vm.toggleVenueGuests = function (showId, HideId) {
        $(showId).toggle(500, "swing", function () {
          $(HideId).toggle(500, "swing", function () {

          });
        });
      };

      if (vm.showVTop) {
        $(showId + '1').animate({width: 'toggle'}, 800, 'easeOutBounce', function () {
          $(showId + '2').animate({width: 'toggle'}, 800, 'easeOutBounce', function () {
            $(showId + '3').animate({width: 'toggle'}, 800, 'easeOutBounce', function () {
              vm.showVTop = false;
            });
          });
        });
      } else {
        $(showId + '3').animate({width: 'toggle'}, 500, 'easeOutBack', function () {
          $(showId + '2').animate({width: 'toggle'}, 500, 'easeOutBack', function () {
            $(showId + '1').animate({width: 'toggle'}, 500, 'easeOutBack', function () {
              vm.showVTop = true;
            });
          });
        });
      }
    };

    vm.switchCard = function (index) {
      $('#CardCarousel').carousel(index);

      $('#Title'+index).addClass('active-card');

      for (var i = 0; i < 3; i++) {
        if(i != index){
          $('#Title'+i).removeClass('active-card')
        }
      }
    };

    vm.selectTable = function (table, id) {
      angular.forEach(vm.guestTable, function (value, key) {
        if (table === value) {
          vm.selectedTable = table;
        }
      })
    };


  },
  templateUrl: 'views/venue/venue.html'
});
