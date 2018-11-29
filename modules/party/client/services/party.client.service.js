(function () {
    'use strict';
  
    angular
      .module('core')
      .factory('PartyService', PartyService);
  
    PartyService.$inject = ['Authentication', '$state', '$timeout', '$mdDialog'];
  
    function PartyService(Authentication, $state, $timeout, $mdDialog) {

        function createParty(){
            $mdDialog.show({
              templateUrl: 'modules/party/client/views/createParty.dialog.client.view.html',
              parent: angular.element(document.body),
              clickOutsideToClose: true,
              controller: 'partyController',
              controllerAs: 'vm',
            })
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
        var service = {};
        service.joinParty = joinParty;
        service.createParty = createParty;   
        return service;
    }
}());