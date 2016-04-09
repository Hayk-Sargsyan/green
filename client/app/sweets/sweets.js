'use strict';
  angular.module('sweetboxApp')
    .config(function ($stateProvider) {
      $stateProvider
        .state('sweets', {
          url: '/sweets',
          templateUrl: 'app/sweets/sweets.html',
          controller: 'SweetsCtrl',
          authenticate: true
        });
    });
