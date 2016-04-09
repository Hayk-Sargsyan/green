angular.module('sweetboxApp')
  .controller('SweetsCtrl', function ($scope, Sweet) {

    $scope.products = [
      {
        name: 'awesome user',
        price: 345,
        count: 243,
        number: 12342456789
      },{
        name: 'awesome user',
        price: 345,
        count: 243,
        number: 3243564567
      },{
        name: 'awesome user',
        price: 345,
        count: 243,
        number: 213456789
      }
    ];

    $scope.removeUser = function (index) {
        $scope.products.splice(index, 1);
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

    Sweet.get({},function (res) {
      console.log(res);
    },function (err) {
      console.log(err);
    });


  });
