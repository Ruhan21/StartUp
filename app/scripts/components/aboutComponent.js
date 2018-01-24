angular.module('app.aboutComponent',[])

.component('about',{
  controller:function ($timeout) {

    var vm = this;

    vm.$onInit = function (changedObj) {
      console.log(changedObj)
      vm.centerImageVisable = false
      vm.imgClass = [{class: 'normal'}, {class: 'normal'}, {class: 'normal'}]
    };

    vm.centerImg = function () {
      $('#aboutTopLeft').animate({marginLeft: '54%', zIndex: '0'}, 1500, 'easeOutBack')
      $('#aboutBottomRight').animate({marginRight: '54%', zIndex: '0'}, 1500, 'easeOutBack', function () {
        vm.centerImageVisable = true;

        $timeout(function () {
          $('#imgPrevious').animate({marginLeft: '0'}, 600, 'easeOutBack', function () {
            $('#imgNext').animate({marginLeft: '0'}, 600, 'easeOutBack')
          })
        }, 300)
      })
    };

    vm.imgClick = function (type) {

      if (type === 'next') {
        vm.imgClass[2].class = 'clicked'
        $timeout(function () {
          vm.imgClass[2].class = 'normal'

          vm.imgClass[1].class = 'clicked'
          $timeout(function () {
            vm.imgClass[1].class = 'normal'

            vm.imgClass[0].class = 'clicked'
            $timeout(function () {
              vm.imgClass[0].class = 'normal'
            }, 300)

          }, 300)

        }, 300)
      } else {
        vm.imgClass[0].class = 'clicked'
        $timeout(function () {
          vm.imgClass[0].class = 'normal'

          vm.imgClass[1].class = 'clicked'
          $timeout(function () {
            vm.imgClass[1].class = 'normal'

            vm.imgClass[2].class = 'clicked'
            $timeout(function () {
              vm.imgClass[2].class = 'normal'
            }, 300)

          }, 300)

        }, 300)
      }

    }
  },
  templateUrl: 'views/about.html'
});
