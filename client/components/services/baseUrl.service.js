angular.module('sweetboxApp')
  .factory('BaseURL', function () {
    var url = 'http://localhost:9000/api';

    return url;
  });
