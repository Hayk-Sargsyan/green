angular.module('sweetboxApp')
  .factory('External', function ($resource, BaseURL) {
    var replyApiUrl = BaseURL + '/external';

    return $resource(replyApiUrl, { number : '@number' },
      {
        decrease: {
          method: 'PUT',
          url: replyApiUrl + '/:number'
        }
      });
  });
