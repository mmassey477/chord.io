(function () {
    'use strict';
  
    angular
      .module('core')
      .controller('SpotifyURIController', SpotifyURIController);
  
    SpotifyURIController.$inject = ['$scope', '$state', '$window', 'Authentication', "$http", '$location', '$mdDialog'];
  
    function SpotifyURIController($scope, $state, $window, Authentication, $http, $location, $mdDialog) {
        var vm = this;
        vm.authentication = Authentication

        $http.post('/api/auth/spotify', $location.$$search).success(function(response) {
          console.log("User", response)  
          vm.authentication.user = response
          $state.go('home')
          }).error(function(response) {
            console.log(response);
          });
    }
}());