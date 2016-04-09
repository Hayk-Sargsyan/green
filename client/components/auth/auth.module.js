'use strict';

angular.module('sweetboxApp.auth', [
  'sweetboxApp.constants',
  'sweetboxApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
