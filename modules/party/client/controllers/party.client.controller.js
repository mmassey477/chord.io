(function () {
    'use strict';
  
    angular
      .module('core')
      .controller('partyController', partyController);
  
    partyController.$inject = ['$scope', '$state', 'PartyNameService', 'Authentication', 'Socket', "$http", '$location', '$mdDialog'];
  
    function partyController($scope, $state, PartyNameService, Authentication, Socket, $http, $location, $mdDialog) {
        var vm = this;
        vm.user = Authentication.user
        vm.partyFound = true;
        vm.close = function() {
            $mdDialog.hide();
          }
        vm.okay = function() {
            $mdDialog.hide();
            $http.post('/api/party/newParty', {name: vm.partyName}).success(function(response) {
                Socket.connect();
                PartyNameService.partyName = vm.partyName
                $state.go("party", {partyId: response._id})
              }).error(function(response) {
                throw(response)
              });
        }

        vm.searchParty = function() {
          $http.post('/api/party/searchParty', {name: vm.partyName}).success(function(response) {
            var party = response
            if(party){
              Socket.connect();
              PartyNameService.partyName = party.name
              $mdDialog.hide()
              vm.partyFound = true;
              console.log("going");
              
              $state.go("party", {partyId: response._id})
            } else {
              vm.partyFound = false;
            }
          }).error(function(response) {
            throw(response)
          });
        }
    }
}());
