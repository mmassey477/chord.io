(function () {
    'use strict';
  
    angular
      .module('core')
      .controller('SpotifyController', SpotifyController);
  
    SpotifyController.$inject = ['$scope', '$state', 'Authentication', 'menuService', "$http", '$location', '$mdDialog'];
  
    function SpotifyController($scope, $state, Authentication, menuService, $http, $location, $mdDialog) {
      var vm = this;
      vm.user = Authentication.user
      vm.joinParty = joinParty;
      vm.createParty = createParty;

      if (!vm.user) {
        $state.go('signin');
      }

      function createParty(){
        
      }

      function joinParty(){
        $mdDialog.show({
          templateUrl: 'modules/party/client/views/newParty.dialog.client.view.html',
          parent: angular.element(document.body),
          clickOutsideToClose: true,
          controller: 'partyController',
          controllerAs: 'vm',
        })
      }  
    }
  }());
  