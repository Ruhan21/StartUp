angular.module('app.testComponent', [])

  .component('test', {
    bindings: { test: '=' },
    controller: function(func) {
      this.localservice = func.testComponentName;
      console.log(this.test)
    },
    templateUrl: 'views/components/testComponentView.html'
  })

  .component('test2', {
    controller: function(func) {


    },
    template: '<h1> You have routed </h1>'
  });
