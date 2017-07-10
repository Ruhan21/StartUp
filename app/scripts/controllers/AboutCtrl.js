angular.module('app.aboutController', [])

  .controller('AboutCtrl', function ($scope, $timeout, $state) {

    $scope.centerImageVisable = false

    $scope.centerImg = function () {
      $('#aboutTopLeft').animate({marginLeft: '54%', zIndex: '0'}, 1500, 'easeOutBack')
      $('#aboutBottomRight').animate({marginRight: '54%', zIndex: '0'}, 1500, 'easeOutBack', function () {
        $scope.centerImageVisable = true

        $timeout(function () {
          $scope.expandImages()
        }, 300)
      })
    }

    $scope.expandImages = function () {
      $('#imgPrevious').animate({marginLeft: '0'}, 600, 'easeOutBack', function () {
        $('#imgNext').animate({marginLeft: '0'}, 600, 'easeOutBack')
      })
    }

    $scope.imgClass = [{class: 'normal'}, {class: 'normal'}, {class: 'normal'}]

    $scope.imgClick = function (type) {

      if (type === 'next') {
        $scope.imgClass[2].class = 'clicked'
        $timeout(function () {
          $scope.imgClass[2].class = 'normal'

          $scope.imgClass[1].class = 'clicked'
          $timeout(function () {
            $scope.imgClass[1].class = 'normal'

            $scope.imgClass[0].class = 'clicked'
            $timeout(function () {
              $scope.imgClass[0].class = 'normal'
            }, 300)

          }, 300)

        }, 300)
      } else {
        $scope.imgClass[0].class = 'clicked'
        $timeout(function () {
          $scope.imgClass[0].class = 'normal'

          $scope.imgClass[1].class = 'clicked'
          $timeout(function () {
            $scope.imgClass[1].class = 'normal'

            $scope.imgClass[2].class = 'clicked'
            $timeout(function () {
              $scope.imgClass[2].class = 'normal'
            }, 300)

          }, 300)

        }, 300)
      }

    }

  })
