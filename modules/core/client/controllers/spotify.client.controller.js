(function () {
    'use strict';
  
    angular
      .module('core')
      .controller('SpotifyController', SpotifyController);
  
    SpotifyController.$inject = ['$scope', '$state', 'Authentication', 'PartyService', "$http", '$location', '$mdDialog'];
  
    function SpotifyController($scope, $state, Authentication, PartyService, $http, $location, $mdDialog) {
      var vm = this;
      vm.user = Authentication.user
      vm.joinParty = PartyService.joinParty;
      vm.createParty = PartyService.createParty;

      if (!vm.user) {
        $state.go('signin');
      }

      
    }
  }());
  