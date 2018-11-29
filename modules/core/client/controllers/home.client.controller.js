(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$state', 'Authentication', '$window', "$http", '$location'];

  function HomeController($scope, $state, Authentication, $window, $http, $location) {
    var vm = this;
    console.log('Auth', Authentication);
    if (Authentication.user) {
      $state.go('spotify');
    } else {
      $state.go('signin');
    }
  }
}());
