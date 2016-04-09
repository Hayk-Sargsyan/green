angular.module('sweetboxApp')
  .controller('MainCtrl', function ($scope, Sweet) {
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

      });
    });

    $scope.add = function(prod) {
      $scope.productList.add(prod);
    };

    $scope.cancel = function() {
      $scope.product = null;
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
