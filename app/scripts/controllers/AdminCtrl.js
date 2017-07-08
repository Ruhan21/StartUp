angular.module('app.adminController', [])

  .controller('AdminCtrl', function ($scope,$timeout, $mdDialog) {

    $scope.oneAtATime = true;

    $scope.groups = [
      {
        title: 'Dynamic Group Header - 1',
        content: 'Dynamic Group Body - 1'
      },
      {
        title: 'Dynamic Group Header - 2',
        content: 'Dynamic Group Body - 2'
      }
    ];


    $scope.status = {
      isCustomHeaderOpen: false,
      isFirstOpen: true,
      isFirstDisabled: false
    };

    ///////////////Modal//////////////////////
    $scope.newItem = {};

    $scope.modalPrompt = function(row,type) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'views/admin/stationary/modal.html',
        locals : {
          row : row
        }
      })
        .then(function(answer) {

          if(type === "add")
          {
            $scope.rowCollection.push(answer);
          }
        });
    };

    function DialogController($scope, $mdDialog , row) {

      $scope.item = row;

      $scope.hide = function() {
        $mdDialog.hide();
      };

      $scope.cancel = function() {
        $mdDialog.cancel();
      };

      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }

    /////////////////Smart Table/////////////////

    $scope.rowCollection = [
      {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
      {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
      {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    //$scope.displayedCollection = [].concat($scope.rowCollection); //have to do this because the data gets assigned asynchronously .  with time delay this is not needed.

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
      var index = $scope.rowCollection.indexOf(row);
      if (index !== -1) {
        $scope.rowCollection.splice(index, 1);
      }
    }

  });

