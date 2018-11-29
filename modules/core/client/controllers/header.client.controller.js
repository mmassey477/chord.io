(function () {
  'use strict';

  angular
    .module('core')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$scope', '$state', 'Authentication', 'PartyService', "$http"];

  function HeaderController($scope, $state, Authentication, PartyService, $http) {
    var vm = this;
    vm.user = Authentication.user
    vm.isCollapsed = false;
    vm.joinParty = PartyService.joinParty;
    vm.createParty = PartyService.createParty;

    $scope.$on('$stateChangeSuccess', stateChangeSuccess);

    function stateChangeSuccess() {
      // Collapsing the menu after navigation
      vm.isCollapsed = false;
      vm.user = Authentication.user;     
    }
  }
}());
