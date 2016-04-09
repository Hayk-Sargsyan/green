angular.module('sweetboxApp')
  .controller('SweetsCtrl', function ($scope, Sweet, growl) {
    $scope.products = [];

    Sweet.query({}, function (res) {
      $scope.products = res;
    }, function (err) {
      growl.error("Something wrong please try again");
    });

    $scope.removeUser = function (product, index) {
      Sweet.delete({
        number: product.number
      }, function(res) {
        $scope.products.splice(index, 1);
        growl.success("Successful deleted");
      }, function(err) {
        growl.error("Something wrong please try again");
      });
    };

    $scope.addProduct = function () {
      $scope.inserted = {
        name: null,
        price: null,
        count: null,
        number: null
      };
      $scope.products.push($scope.inserted);
    };

    $scope.updateProduct = function (product, index) {
      if(!$scope.checkProduct(product)) {
        if(product._id) {

          Sweet.edit(product,function (res) {
            console.log(res);
            growl.success("Successful updated");
          },function (err) {
            growl.error("Something wrong please try again");
          });

        } else {

          Sweet.create(product, function (res) {
            $scope.products.splice(index, 1, res);
            growl.success("Successful updated");
          },function (err) {
            growl.error("Something wrong please try again");
          });

        }
      } else {
        growl.error("Some field is empty");
      }
    };

    $scope.checkProduct = function (product) {
      for(var item in product) {
        if(product[item]) {
          return false;
        }
      }
      return true;
    }
  });
