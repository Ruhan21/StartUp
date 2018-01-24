angular.module('app.introComponent', [])

.component('intro', {
  controller: function () {
    $().ready(function () {
      $("#bride").animate({marginLeft: '0px'}, 1300, 'easeOutBounce');
      $("#groom").animate({marginLeft: '0px'}, 1000, 'easeOutBounce');
    });
  },
  templateUrl: 'views/intro.html'
});
