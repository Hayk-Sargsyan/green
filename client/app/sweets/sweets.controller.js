angular.module('sweetboxApp')
  .controller('SweetsCtrl', function ($scope, Sweet, growl) {
    $scope.products = [];

    Sweet.query({}, function (res) {
      $scope.products = res;
    }, function (err) {
      growl.error("Something wrong please try again");
    });

    $scope.removeUser = function (product, index) {
      $scope.products.splice(index, 1);
      Sweet.delete({
        number: product.number
      }, function(res) {
        growl.success("Successful deleted");
      }, function(err) {
        $scope.products.splice(index, 0, product);
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
      if(product._id) {

        Sweet.edit(product,function (res) {
          growl.success("Successful updated");
        },function (err) {
          growl.error("Something wrong please try again");
        });

      } else {

        Sweet.create(product, function (res) {
          $scope.products.splice(index, 1, res);
          growl.success("Successful added");
        },function (err) {
          growl.error("Something wrong please try again");
        });

      }
    };

    $scope.checkProd = function(product) {
      if (!$scope.checkProduct(product)) {
        $scope.products.pop()
      }
    };

    var filds = ['name', 'number', 'price', 'count'];

    $scope.checkProduct = function (product) {

      for(var i = 0; i < filds.length; i++) {
        if(!product[filds[i]]) {
          return false;
        }
      }

      return true;
    }
  });
