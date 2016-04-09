angular.module('sweetboxApp')
  .controller('SweetsCtrl', function ($scope, Sweet) {

    $scope.aaa = function () {
      Sweet.get({},function (res) {
        console.log(res);
      },function (err) {
        console.log(err);
      });
    };

    $scope.bbb = "asd";

    $scope.aaa();
  });
