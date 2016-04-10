angular.module('sweetboxApp')
  .controller('MainCtrl', function ($scope, Sweet, growl) {
    $scope.barcode = "";
    $scope.product = null;
    $scope.productList = [];

    $scope.$watch('barcode', function() {
      if( !$scope.barcode ) {
        return;
      }

      Sweet.get({
        number: $scope.barcode
      }, function (res) {
        $scope.product = res;
        $scope.barcode = "";
      }, function (err) {
        growl.warning('Not found');
      });
    });

    $scope.add = function(prod) {
      $scope.productList.push(prod);
    };

    $scope.cancel = function() {
      $scope.product = null;
    };

    $scope.clearHistory = function() {
      $scope.product = '';
      $scope.barcode = "";
      $scope.productList = [];
    };

    $scope.total = function() {
      var total = 0;

      if( !$scope.productList.length ) {
        return 0;
      }

      _.forEach($scope.productList, function(value) {
        total += value.price;
      });

      return total;
    };
  });
