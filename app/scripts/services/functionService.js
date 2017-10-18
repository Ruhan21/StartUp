angular.module('service.func', [])

.service('func', function($firebaseArray, $firebaseObject, $q, $rootScope) {

  this.refTable = function (table) {
    return firebase.database().ref().child(table)
  };

  this.incomeTable = $firebaseArray(this.refTable("incomeTable"));
  this.expenseTable = $firebaseArray(this.refTable("expenseTable"));
  this.guestsTable = $firebaseArray(this.refTable("guestsTable"));
  this.lookups = $firebaseArray(this.refTable("lookups"));

  this.getAllData = function () {
    $('#loader').modal('show');
    $q.when(this.incomeTable.$loaded(), this.expenseTable.$loaded(), this.guestsTable.$loaded(), this.lookups.$loaded()).then(function () {
      $rootScope.isLoading = false;
      $('#loader').modal('hide');
    })
  };

  this.AddToList = function (list,item) {
    this[list].$add(item)
  };

  this.RemoveFromList = function (list,item) {
    this[list].$remove(item)
  };

  this.EditList = function (list,item) {
    this[list].$save(item)
  };

  this.SumAmount = function (table) {
    let Total = 0;
    angular.forEach(this[table],function (value) {
      if(angular.isDefined(value.quantity)){
        if(value.selected){
          Total += (value.price * value.quantity)
        }
      } else {
        Total += value.amount
      }
    });

    return Total
  };

  this.SumGuests = function () {
    let Total = [0, 0];

    angular.forEach(this.guestsTable,function (value) {
      Total[0]++;
      if (value.going) {
        Total[1]++
      }
    });

    return Total
  };

  this.AddToLookups = function (type,item) {
    this.lookups.$add(item)
  };

  this.getChartLabels = function (table) {
    let labelArray = [];

    angular.forEach(this[table],function (value) {
      labelArray.push(value.type)
    });

    return labelArray
  };

  this.getChartData = function (table) {
    let DataArray = [];

    DataArray.push(this.SumAmount(table))

    return DataArray
  };

  this.getExpenseDetailedData = function () {
    let labelArray = [];
    let numberArray = [];
    let DataArray = [];


    angular.forEach(this.expenseTable,function (value) {

      if(value.selected) {
        labelArray.push(value.description);
        numberArray.push((value.price * value.quantity));
      }

    });

    DataArray.push(labelArray,numberArray);

    return DataArray
  };

  this.selectedExpenseFilter = function (item) {
    return item.selected === true
  }
});
