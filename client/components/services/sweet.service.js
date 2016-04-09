angular.module('sweetboxApp')
  .factory('Sweet', function ($resource, BaseURL) {
    var replyApiUrl = BaseURL + '/external';

    return $resource(replyApiUrl, { id: '@id'},
      {
        query: {
          method: 'GET',
          isArray: true
        },
        get: {
          method: 'GET',
        },
        create: {
          method: 'POST'
        },
        edit: {
          method: 'PUT',
          url: replyApiUrl
        },
        delete: {
          method: 'DELETE',
          url: replyApiUrl
        }
      });
  });
