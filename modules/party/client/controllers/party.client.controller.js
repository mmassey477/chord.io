(function () {
    'use strict';
  
    angular
      .module('core')
      .controller('partyController', partyController);
  
    partyController.$inject = ['$scope', '$state', 'Authentication', 'menuService', "$http", '$location', '$mdDialog'];
  
    function partyController($scope, $state, Authentication, menuService, $http, $location, $mdDialog) {
        var vm = this;
        vm.user = Authentication.user
        vm.close = function() {
            $mdDialog.hide();
          }
        vm.okay = function() {
            $mdDialog.hide();
            
        }
    }
}());
