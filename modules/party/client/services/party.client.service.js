(function () {
    'use strict';
  
    angular
      .module('core')
      .factory('PartyService', PartyService);
  
    PartyService.$inject = ['Authentication', '$resource', '$state', '$timeout', '$mdDialog'];
  
    function PartyService(Authentication, $resource, $state, $timeout, $mdDialog) {
      var party = $resource('api/party/:partyId', {
        partyId: '@_id'
      })
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
              templateUrl: 'modules/party/client/views/joinParty.dialog.client.view.html',
              parent: angular.element(document.body),
              clickOutsideToClose: true,
              controller: 'partyController',
              controllerAs: 'vm',
            })
          } 
        var service = {};
        service.joinParty = joinParty;
        service.createParty = createParty;
        service.party = party   
        return service;
    }
}());