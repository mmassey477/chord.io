(function () {
    'use strict';
  
    angular
      .module('core')
      .controller('partyController', partyController);
  
    partyController.$inject = ['$scope', '$state', 'Authentication', 'Socket', "$http", '$location', '$mdDialog'];
  
    function partyController($scope, $state, Authentication, Socket, $http, $location, $mdDialog) {
        var vm = this;
        vm.user = Authentication.user
        vm.close = function() {
            $mdDialog.hide();
          }
        vm.okay = function() {
            $mdDialog.hide();
            console.log('vm.partyName', vm.partyName);
            $http.post('/api/party/newParty', {name: vm.partyName}).success(function(response) {
                Socket.connect();
              }).error(function(response) {
                throw(response)
              });
            $state.go("party")
        }
    }
}());
