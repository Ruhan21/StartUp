angular.module('service.func', [])

.service('func', function() {
  this.AddToList = function (list,item) {
    list.$add(item)
  }
});
