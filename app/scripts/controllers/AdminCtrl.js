angular.module('app.adminController', [])

  .controller('AdminCtrl', function ($scope,$timeout, $mdSidenav, $log, $mdDialog) {

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


    $scope.modalStatus = "";
    $scope.customFullscreen = false;

    $scope.showPrompt = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.prompt()
        .title('What would you name your dog?')
        .textContent('Bowser is a common name.')
        .placeholder('Dog name')
        .ariaLabel('Dog name')
        .initialValue('Buddy')
        .targetEvent(ev)
        .ok('Okay!')
        .cancel('I\'m a cat person');

      $mdDialog.show(confirm).then(function(result) {
        $scope.modalStatus = 'You decided to name your dog ' + result + '.';
      }, function() {
        $scope.modalStatus = 'You didn\'t name your dog.';
      });
    };

    function DialogController($scope, $mdDialog) {
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

    ////////////////FAB////////////////////////

      $scope.topDirections = ['left', 'up'];
      $scope.bottomDirections = ['down', 'right'];
      $scope.isOpen = false;
      $scope.availableModes = ['md-fling', 'md-scale'];
      $scope.selectedMode = 'md-fling';
      $scope.availableDirections = ['up', 'down', 'left', 'right'];
      $scope.selectedDirection = 'up';


  });

