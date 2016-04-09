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
        $scope.productList.push(res);
        $scope.barcode = "";
      }, function (err) {
        
      });
    });
  });
