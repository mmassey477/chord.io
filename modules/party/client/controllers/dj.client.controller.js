(function () {
    'use strict';
  
    angular
      .module('core')
      .controller('DjController', DjController);
  
    DjController.$inject = ['$scope', '$state', 'Authentication', "$http", '$location', '$mdDialog'];
  
    function DjController($scope, $state, Authentication, $http, $location, $mdDialog) {
        var vm = this;
        vm.user = Authentication.user
        vm.searchSong = searchSong;
        vm.addToQueue = addToQueue;

        vm.queuedSongs = []
        vm.searchResults = []

        function searchSong(song){
            $http.post('/api/party/searchSong', {"text": song}).success(function(response) {
                vm.searchResults = response.results
                console.log('vm.searchresults', vm.searchResults);
            }).error(function(response) {
                console.log(response);
              });
        }

        function addToQueue(song){
            vm.queuedSongs.push(song)
        }
    }
}());
