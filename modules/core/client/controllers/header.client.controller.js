(function () {
  'use strict';

  angular
    .module('core')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$scope', 'PartyNameService', '$state', 'Authentication', 'PartyService', "$http"];

  function HeaderController($scope, PartyNameService, $state, Authentication, PartyService, $http) {
    var vm = this;
    vm.user = Authentication.user
    vm.isCollapsed = false;
    vm.joinParty = PartyService.joinParty;
    vm.createParty = PartyService.createParty;
    vm.partyName = PartyNameService.partyName;
    vm.signout = signout;
    vm.state = $state
    
    $scope.$on('$stateChangeSuccess', stateChangeSuccess);

    function stateChangeSuccess() {
      // Collapsing the menu after navigation
      vm.isCollapsed = false;
      vm.user = Authentication.user; 
      vm.partyName = PartyNameService.partyName;
      vm.onParty = $state.includes('party')
      console.log(vm.partyName); 
    }

    function signout() {
      console.log("In sign out");
      
      $http.get('/api/auth/signout').success(function(){
        console.log("Succcess");
        delete Authentication.user
        delete vm.user
        console.log(vm.user);
        
        $state.go('signin');
      })
    }
  }
}());
