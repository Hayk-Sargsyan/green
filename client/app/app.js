'use strict';

angular.module('sweetboxApp', [
  'sweetboxApp.auth',
  'sweetboxApp.admin',
  'sweetboxApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'xeditable',
  'angular-growl'
])
  .config(function($urlRouterProvider, $locationProvider, growlProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    growlProvider.onlyUniqueMessages(false);
    growlProvider.globalTimeToLive(4000);
    growlProvider.globalDisableCountDown(true);
    growlProvider.globalPosition('bottom-right');
  })
  .run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
  });
