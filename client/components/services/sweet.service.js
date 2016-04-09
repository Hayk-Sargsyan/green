angular.module('sweetboxApp')
  .factory('Sweet', function ($resource, BaseURL) {
    var replyApiUrl = BaseURL + '/sweets';

    return $resource(replyApiUrl, { number : '@number' },
      {
        query: {
          method: 'GET',
          isArray: true
        },
        get: {
          method: 'GET',
          url: replyApiUrl + '/:number'
        },
        create: {
          method: 'POST'
        },
        edit: {
          method: 'PUT',
          url: replyApiUrl + '/:number'
        },
        delete: {
          method: 'DELETE',
          url: replyApiUrl +  + '/:number'
        }
      });
  });
