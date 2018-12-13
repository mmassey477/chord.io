(function () {
    'use strict';
  
    angular
      .module('core')
      .controller('DjController', DjController);
  
    DjController.$inject = ['$scope', '$state', 'Authentication', 'partyResolve', 'PartyNameService', 'Socket', "$http", '$location', '$mdDialog'];
  
    function DjController($scope, $state, Authentication, party, PartyNameService, Socket, $http, $location, $mdDialog) {
        var vm = this;
        vm.user = Authentication.user
        vm.searchSong = searchSong;
        vm.addToQueue = addToQueue;
        vm.queuedSongs = []
        vm.party = party
        vm.partyName = party.name
        PartyNameService.partyName = party.name
        console.log("Parrr", party);
        vm.queuedSongs = party.queue
        function searchSong(song){
            $http.post('/api/party/searchSong', {"text": song}).success(function(response) {
                vm.searchResults = response.results
                console.log('vm.searchresults', vm.searchResults);
            }).error(function(response) {
                console.log(response);
              });
        }

        Socket.on('display song', function(song){
            vm.queuedSongs.push(song)
            if(vm.user.id == "mitchmassey1"){
                console.log("User adding song");
                $http.post('/api/party/addToQueue', {"song": song, "partyName": vm.partyName}).success(function(resonse){
                })
            }
        })

        function addToQueue(song){
            Socket.emit('new song', song)
            vm.queuedSongs.push(song.name + " by " + song.artists[0].name)
            $http.post('/api/party/addToQueue', {"song": song, "partyName": vm.partyName}).success(function(response){
                console.log("Resopnse", response);
                
            })
        }
    }
}());
