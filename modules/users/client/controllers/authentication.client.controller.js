(function () {
  'use strict';

  angular
    .module('users')
    .controller('AuthenticationController', AuthenticationController);

  AuthenticationController.$inject = ['$scope', '$http', '$state', '$location', '$window', 'Authentication'];

  function AuthenticationController($scope, $http, $state, $location, $window, Authentication) {
    var vm = this;

    vm.authentication = Authentication;
    
    vm.login = login;

    function login() {
      $http.post('/api/auth/signin').success(function(response) {
        window.location.href = response;
      }).error(function(response) {
        throw(response)
      });
    }
  }
}());
