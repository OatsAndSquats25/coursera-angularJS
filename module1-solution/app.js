(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  
  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    $scope.message = "";
    $scope.checkIfTooMuch = function() {
      var lunchItemsArray = $scope.lunchItems.split(',');
      if($scope.lunchItems === "") {
        $scope.message = "Please enter data first";
        return;
      }
      if (lunchItemsArray.length <= 3) {
        $scope.message = "Enjoy!";
      }
      else {
        $scope.message = "Too much!";
      }
    }
  }

})();
