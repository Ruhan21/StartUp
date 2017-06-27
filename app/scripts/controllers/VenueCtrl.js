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

    $scope.toggleVenueGuests = function (showId,HideId) {
      $(showId).toggle(500, "swing", function () {
        $(HideId).toggle(500, "swing", function () {

        });
      });
    };

    // Get the modal
    $scope.modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
    $scope.img = document.getElementById('myImg');
    $scope.modalImg = document.getElementById("img01");
    $scope.captionText = document.getElementById("caption");
    $scope.img.onclick = function(){
      $scope.modal.style.display = "block";
      $scope.modalImg.src = this.src;
      $scope.captionText.innerHTML = this.alt;
    };

// Get the <span> element that closes the modal
    $scope.span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    $scope.span.onclick = function() {
      $scope.modal.style.display = "none";
    }

  });
