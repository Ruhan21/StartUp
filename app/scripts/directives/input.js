angular.module('inputDirectives',[])
.directive("tableInputText",function(){
    return{
        restrict: 'E',
        scope:{
            ngModel: '=',
            id: '@'
        },
        template: '<input type="text" class="inputTable" ng-model="ngModel">',
        controller: function($scope){

        }
    }
});

