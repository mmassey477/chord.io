(function () {
  'use strict';

  angular
    .module('core')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$scope', '$state', 'Authentication', 'menuService', "$http"];

  function HeaderController($scope, $state, Authentication, menuService, $http) {
    var vm = this;

    vm.accountMenu = menuService.getMenu('account').items[0];
    vm.authentication = Authentication;
    vm.isCollapsed = false;
    vm.menu = menuService.getMenu('topbar');
    vm.login = login

    $scope.$on('$stateChangeSuccess', stateChangeSuccess);

    function login() {
      $http.post('/api/auth/signin', vm.credentials).success(function(response) {
        console.log('response', response);
        window.location.href = response;
      }).error(function(response) {
        console.log('response', response);
      });
    }

    function stateChangeSuccess() {
      // Collapsing the menu after navigation
      vm.isCollapsed = false;
    }
  }
}());
