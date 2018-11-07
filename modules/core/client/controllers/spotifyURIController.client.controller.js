(function () {
    'use strict';
  
    angular
      .module('core')
      .controller('SpotifyURIController', SpotifyURIController);
  
    SpotifyURIController.$inject = ['$scope', '$state', '$window', 'Authentication', 'menuService', "$http", '$location', '$mdDialog'];
  
    function SpotifyURIController($scope, $state, $window, Authentication, menuService, $http, $location, $mdDialog) {
        var vm = this;

        $http.post('/api/auth/spotify', $location.$$search).success(function(response) {
            Authentication.user = response[0]
            $state.go('home')
          }).error(function(response) {
            console.log(response);
          });
    }
}());