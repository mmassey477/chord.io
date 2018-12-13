(function () {
    'use strict';
  
    angular
      .module('core')
      .factory('PartyNameService', PartyNameService);
  
    PartyNameService.$inject = ['Authentication', '$state', '$timeout', '$mdDialog'];
  
    function PartyNameService(Authentication, $state, $timeout, $mdDialog) {
        var service = {};
        var partyName = ""
        service.partyName = partyName
        return service;
    }
}());